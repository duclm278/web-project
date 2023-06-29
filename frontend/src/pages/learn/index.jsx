import { Box, Divider, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/Header";
import courseService from "../../services/course";
import enrollService from "../../services/enroll";
import progressService from "../../services/progress";
import { formatTime } from "../../utils/formatter";
import LearningList from "./LearningList";
import LearningQuiz from "./LearningQuiz";
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

  // Current lesson
  const lesson = lessons.find((lesson) => lesson._id === currentLessonId);

  // Check if user is enrolled in course
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = user.token;

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
        const course = await courseService.getOne(courseId);
        setLessons(course.lessons);
      } catch (err) {
        console.log(err);
      }
    };

    checkEnroll();
    fetchCourse();
  }, [courseId, navigate]);

  // Fetch progress
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = user.token;

    const fetchProgress = async () => {
      try {
        const progress = await progressService.getOne(token, courseId);
        setCompletedLessons(progress.completedLessons);
        if (!progress.currentLesson) {
          const firstLessonId = lessons?.[0]._id;
          setCurrentLessonId(firstLessonId);
        } else {
          setCurrentLessonId(progress.currentLesson);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchProgress();
  }, [courseId, lessons]);

  const handleOnEnded = async (lessonId, delay) => {
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
      if (delay === 0) return;
      setTimeout(() => {
        setCurrentLessonId(progress.currentLesson);
        setCompletedLessons(progress.completedLessons);
      }, delay * 1000);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box>
      <Header />
      <Stack direction="row" sx={{ height: "90vh" }}>
        <Stack maxWidth="lg" flex={3}>
          <Box sx={{ p: { xs: 1, md: 2 }, overflow: "auto" }}>
            {lesson?.type === "video" && (
              <LearningVideo
                lesson={lesson}
                onEnded={() => handleOnEnded(currentLessonId, 2)}
              />
            )}
            {lesson?.type === "quiz" && (
              <LearningQuiz
                lesson={lesson}
                onEnded={() => handleOnEnded(currentLessonId, 0)}
              />
            )}
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
