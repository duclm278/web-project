import { Box, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import ReactPlayer from "react-player";

export default function LearningVideo() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box
        style={{
          width: "100%",
          maxHeight: "75vh",
          aspectRatio: "16/9",
        }}
      >
        <ReactPlayer
          url="https://www.youtube.com/watch?v=7CqJlxBYj-M"
          controls
          width="100%"
          height="100%"
          onEnded={() => console.log("Video Ended")}
        />
      </Box>

      <Tabs
        value={value}
        onChange={handleChange}
        textColor="inherit"
        TabIndicatorProps={{
          style: {
            backgroundColor: "#1c1d1f",
          },
        }}
        sx={{ my: 2 }}
      >
        <Tab value={0} label="OVERVIEW" />
        <Tab value={1} label="COMMENTS" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Typography component="h2" variant="h6" fontWeight="bold">
          Introduction to React
        </Typography>
        <Typography component="p" variant="body1" mt={2}>
          Hello, I am <strong>John Doe</strong>, a web developer from{" "}
          <strong>London, United Kingdom</strong>. I hold a Master&apos;s Degree
          in Computer Science from the University of London. I also have a
          Bachelor&apos;s Degree in Computer Science from the University of
          London. I have been working as a freelance web developer for the past
          10 years.
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography component="h2" variant="h6" fontWeight="bold">
          There are no comments yet.
        </Typography>
      </TabPanel>
    </>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      style={{ minHeight: 250 }}
      {...other}
    >
      {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
    </div>
  );
}