import * as React from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CourseContent() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Course Overview</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="body1" component="p">
              Course Introduction
            </Typography>
            <Typography variant="body1" component="p">
              06:39
            </Typography>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Python Setup</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="body1" component="p">
              Command Line Basics
            </Typography>
            <Typography variant="body1" component="p">
              04:00
            </Typography>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Python Object and Data Structure Basics</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="body1" component="p">
              Introduction to Python Data Types
            </Typography>
            <Typography variant="body1" component="p">
              04:02
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="body1" component="p">
              Variable Assignments
            </Typography>
            <Typography variant="body1" component="p">
              07:54
            </Typography>
          </Box>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
