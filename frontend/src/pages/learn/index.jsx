import { Stack, Typography, Box } from "@mui/material";
import LearningVideo from "./LearningVideo";
import LearningList from "./LearningList";
import Header from "../../components/Header";

export default function Learning() {
  return (
    <Box>
      <Header />
      <Stack direction="row" sx={{ height: "90vh" }}>
        <Stack maxWidth="lg" flex={3}>
          <Box sx={{ p: { xs: 2, md: 3 }, overflow: "auto" }}>
            <LearningVideo />
          </Box>
        </Stack>
        <Stack maxWidth="lg" flex={1}>
          <Typography
            component="h1"
            variant="h4"
            align="center"
            my={2}
            sx={{
              position: "sticky",
              top: 0,
              bgcolor: "background.paper",
            }}
          >
            Course Content
          </Typography>
          <Box sx={{ px: { xs: 2, md: 3 }, overflow: "auto" }}>
            <LearningList />
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
}
