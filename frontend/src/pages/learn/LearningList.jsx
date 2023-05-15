import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import {
  Checkbox,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import * as React from "react";

const lessons = [
  {
    id: 1,
    title: "Introduction",
    description: "Introduction to React",
    video: "https://www.youtube.com/embed/7CqJlxBYj-M",
    length: "5:08",
    watched: true,
  },
  {
    id: 2,
    title: "What is React?",
    description: "What is React?",
    video: "https://www.youtube.com/embed/7CqJlxBYj-M",
    length: "5:08",
    watched: false,
  },
  {
    id: 3,
    title: "Why React?",
    description: "Why React?",
    video: "https://www.youtube.com/embed/7CqJlxBYj-M",
    length: "5:08",
    watched: true,
  },
  {
    id: 4,
    title: "React vs Angular vs Vue",
    description: "React vs Angular vs Vue",
    video: "https://www.youtube.com/embed/7CqJlxBYj-M",
    length: "5:08",
    watched: true,
  },
  {
    id: 5,
    title: "React vs Angular vs Vue",
    description: "React vs Angular vs Vue",
    video: "https://www.youtube.com/embed/7CqJlxBYj-M",
    length: "5:08",
    watched: false,
  },
  {
    id: 6,
    title: "React vs Angular vs Vue",
    description: "React vs Angular vs Vue",
    video: "https://www.youtube.com/embed/7CqJlxBYj-M",
    length: "5:08",
    watched: false,
  },
  {
    id: 7,
    title: "React vs Angular vs Vue",
    description: "React vs Angular vs Vue",
    video: "https://www.youtube.com/embed/7CqJlxBYj-M",
    length: "5:08",
    watched: false,
  },
  {
    id: 8,
    title: "React vs Angular vs Vue",
    description: "React vs Angular vs Vue",
    video: "https://www.youtube.com/embed/7CqJlxBYj-M",
    length: "5:08",
    watched: false,
  },
  {
    id: 9,
    title: "React vs Angular vs Vue",
    description: "React vs Angular vs Vue",
    video: "https://www.youtube.com/embed/7CqJlxBYj-M",
    length: "5:08",
    watched: false,
  },
  {
    id: 10,
    title: "React vs Angular vs Vue",
    description: "React vs Angular vs Vue",
    video: "https://www.youtube.com/embed/7CqJlxBYj-M",
    length: "5:08",
    watched: false,
  },
  {
    id: 11,
    title: "React vs Angular vs Vue",
    description: "React vs Angular vs Vue",
    video: "https://www.youtube.com/embed/7CqJlxBYj-M",
    length: "5:08",
    watched: true,
  },
];

export default function LearningList() {
  return (
    <List
      sx={{
        bgcolor: "background.paper",
      }}
    >
      {lessons.map((lesson) => (
        <React.Fragment key={lesson.id}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ alignSelf: "flex-start" }}>
                <Checkbox
                  checked={lesson.watched}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": lesson.id }}
                />
              </ListItemIcon>
              <ListItemText
                id={lesson.id}
                primary={lesson.title}
                secondary={
                  <span style={{ display: "flex", alignItems: "center" }}>
                    <PlayCircleIcon sx={{ fontSize: 13.5, marginRight: 4 }} />
                    {lesson.length}
                  </span>
                }
              />
            </ListItemButton>
          </ListItem>
          {/* <Divider variant="inset" component="li" /> */}
        </React.Fragment>
      ))}
    </List>
  );
}
