import { Box, Tab, Tabs, Typography } from "@mui/material";
import Linkify from "linkify-react";
import { useState } from "react";
import ReactPlayer from "react-player";

export default function LearningVideo({ lesson }) {
  const [tabValue, setTabValue] = useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
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
          url={lesson?.videoUrl}
          origin={window.location.origin}
          controls
          width="100%"
          height="100%"
          onEnded={() => console.log("Video Ended")}
        />
      </Box>

      <Tabs
        value={tabValue}
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
      <TabPanel value={tabValue} index={0}>
        <Typography component="h2" variant="h6" fontWeight="bold">
          {lesson?.name}
        </Typography>
        <Typography variant="body1" mt={2} sx={{ whiteSpace: "pre-line" }}>
          <Linkify>{lesson?.description}</Linkify>
        </Typography>
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
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
