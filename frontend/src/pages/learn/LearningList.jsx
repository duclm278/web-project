import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import HelpIconIcon from "@mui/icons-material/Help";
import {
  Checkbox,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import progressService from "../../services/progress";
import { formatTime } from "../../utils/formatter";

export default function LearningList({
  lessons,
  completedLessons,
  setCompletedLessons,
  currentLessonId,
  setCurrentLessonId,
}) {
  const { courseId } = useParams();

  const handleWatch = async (lessonId) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = user.token;
    try {
      await progressService.update(token, courseId, {
        currentLesson: lessonId,
        completedLessons,
      });
      setCurrentLessonId(lessonId);
    } catch (err) {
      console.log(err);
    }
  };

  const handleToggle = (lessonId) => {
    let completedLessonIds = [];
    if (completedLessons.includes(lessonId)) {
      completedLessonIds = completedLessons.filter((id) => id !== lessonId);
    } else {
      completedLessonIds = [...completedLessons, lessonId];
    }

    const request = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user"));
        const token = user.token;
        const progress = await progressService.update(token, courseId, {
          currentLesson: currentLessonId,
          completedLessons: completedLessonIds,
        });
        setCompletedLessons(progress.completedLessons);
      } catch (err) {
        console.log(err);
      }
    };

    request();
  };

  return (
    <List>
      {lessons.map((lesson) => (
        <React.Fragment key={lesson._id}>
          <ListItem disablePadding>
            <ListItemButton
              selected={currentLessonId === lesson._id}
              autoFocus={currentLessonId === lesson._id}
            >
              <ListItemIcon>
                <Checkbox
                  checked={completedLessons.includes(lesson._id)}
                  tabIndex={-1}
                  disableRipple
                  onClick={() => handleToggle(lesson._id)}
                />
              </ListItemIcon>
              <ListItemText
                id={lesson.id}
                primary={lesson.name}
                secondary={
                  lesson.type === "video" ? (
                    <span style={{ display: "flex", alignItems: "center" }}>
                      <PlayCircleIcon sx={{ fontSize: 13.5, mr: 0.5 }} />
                      {formatTime(lesson.lengthSeconds)}
                    </span>
                  ) : (
                    <span style={{ display: "flex", alignItems: "center" }}>
                      <HelpIconIcon sx={{ fontSize: 13.5, mr: 0.5 }} />
                      {formatTime(lesson.lengthSeconds)}
                    </span>
                  )
                }
                onClick={() => handleWatch(lesson._id)}
              />
            </ListItemButton>
          </ListItem>
        </React.Fragment>
      ))}
    </List>
  );
}
