import { Box, Tab, Tabs, Typography } from "@mui/material";
import Linkify from "linkify-react";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import MDEditor from "@uiw/react-md-editor";

export default function LearningVideo({ lesson, onEnded }) {
  const [tabValue, setTabValue] = useState(0);
  const [value, setValue] = useState("");

  // TODO: If previous note exists, load it instead
  useEffect(() => {
    setValue(`# ${lesson?.name}\n\n${lesson?.description}`);
  }, [lesson]);

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
          onEnded={onEnded}
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
        <Tab value={1} label="NOTES" />
        <Tab value={2} label="COMMENTS" />
        <Tab value={3} label="RATINGS" />
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
        <div className="container">
          <div data-color-mode="light">
            <MDEditor height={550} value={value} onChange={setValue} />
          </div>
        </div>
      </TabPanel>

      <TabPanel value={tabValue} index={2}>
        <Typography component="h2" variant="h6" fontWeight="bold">
          There are no comments yet.
        </Typography>
      </TabPanel>

      <TabPanel value={tabValue} index={3}>
        <Typography component="h2" variant="h6" fontWeight="bold">
          There are no ratings yet.
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
