import { Stack, Typography, Box, Divider } from "@mui/material";
import LearningVideo from "./LearningVideo";
import LearningList from "./LearningList";
import Header from "../../components/Header";

export default function Learning() {
  return (
    <Box>
      <Header />
      <Stack direction="row" sx={{ height: "90vh" }}>
        <Stack maxWidth="lg" flex={3}>
          <Box sx={{ p: { xs: 1, md: 2 }, overflow: "auto" }}>
            <LearningVideo />
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
              10/54 lectures • 6h 51m left
            </Typography>
          </Box>
          <Divider sx={{ borderWidth: 1 }} />
          <Box sx={{ overflow: "auto" }}>
            <LearningList />
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
}
