import { Box, Divider, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/Header";
import courseService from "../../services/course";
import enrollService from "../../services/enroll";
import progressService from "../../services/progress";
import { formatTime } from "../../utils/formatter";
import LearningList from "./LearningList";
import LearningVideo from "./LearningVideo";

export default function Learning() {
  const { courseId } = useParams();
  const [lessons, setLessons] = useState([]);
  const [currentLessonId, setCurrentLessonId] = useState(null);
  const [completedLessons, setCompletedLessons] = useState([]);
  const navigate = useNavigate();

  let videoUrl = null;
  if (currentLessonId) {
    videoUrl = lessons.find(
      (lesson) => lesson._id === currentLessonId
    )?.videoUrl;
  }
  if (!videoUrl && lessons.length > 0) {
    videoUrl = lessons[0].videoUrl;
  }

  // Exclude completed lessons
  let totalLengthSecondsLeft = 0;
  lessons.forEach((lesson) => {
    if (!completedLessons.includes(lesson._id)) {
      totalLengthSecondsLeft += lesson.lengthSeconds;
    }
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = user.token;

    let course;
    const checkEnroll = async () => {
      try {
        await enrollService.getOne(token, courseId);
      } catch (err) {
        console.log(err);
        navigate(`/course/${courseId}`);
      }
    };

    const fetchCourse = async () => {
      try {
        course = await courseService.getOne(courseId);
        setLessons(course.lessons);
      } catch (err) {
        console.log(err);
      }
    };

    const fetchProgress = async () => {
      try {
        const progress = await progressService.getOne(token, courseId);
        setCompletedLessons(progress.completedLessons);
        if (!progress.currentLesson) {
          const firstLessonId = course.lessons?.[0]?._id;
          setCurrentLessonId(firstLessonId);
        } else {
          setCurrentLessonId(progress.currentLesson);
        }
      } catch (err) {
        console.log(err);
      }
    };

    checkEnroll();
    fetchCourse();
    fetchProgress();
  }, [courseId, navigate]);

  const handleOnEnded = async (lessonId) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = user.token;

    // Mark lesson as completed if not already
    let completedLessonIds;
    if (completedLessons.includes(lessonId)) {
      completedLessonIds = [...completedLessons];
    } else {
      completedLessonIds = [...completedLessons, lessonId];
    }

    // Set next lesson as current lesson to watch
    const currentLessonIndex = lessons.findIndex(
      (lesson) => lesson._id === lessonId
    );
    const nextLessonId =
      lessons?.[currentLessonIndex + 1]?._id || currentLessonId;

    // Update progress
    try {
      const progress = await progressService.update(token, courseId, {
        currentLesson: nextLessonId,
        completedLessons: completedLessonIds,
      });
      setCurrentLessonId(progress.currentLesson);
      setCompletedLessons(progress.completedLessons);
    } catch (err) {
      console.log(err);
    }
  };

  console.log("completedLessons", completedLessons);
  return (
    <Box>
      <Header />
      <Stack direction="row" sx={{ height: "90vh" }}>
        <Stack maxWidth="lg" flex={3}>
          <Box sx={{ p: { xs: 1, md: 2 }, overflow: "auto" }}>
            <LearningVideo
              lesson={lessons.find((lesson) => lesson._id === currentLessonId)}
              onEnded={() => handleOnEnded(currentLessonId)}
            />
          </Box>
        </Stack>
        <Divider orientation="vertical" sx={{ borderWidth: 1 }} />
        <Stack maxWidth="lg" flex={1}>
          <Box
            sx={{
              ml: 3,
              my: 2,
              position: "sticky",
              top: 0,
            }}
          >
            <Typography component="h1" variant="h6" fontWeight="bold">
              Course Content
            </Typography>
            <Typography component="p" variant="body1">
              {completedLessons.length}/{lessons.length} lessons •{" "}
              {formatTime(totalLengthSecondsLeft)} left
            </Typography>
          </Box>
          <Divider sx={{ borderWidth: 1 }} />
          <Box sx={{ overflow: "auto" }}>
            <LearningList
              lessons={lessons}
              completedLessons={completedLessons}
              setCompletedLessons={setCompletedLessons}
              currentLessonId={currentLessonId}
              setCurrentLessonId={setCurrentLessonId}
            />
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
}
