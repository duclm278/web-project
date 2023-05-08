import { Box, Button, Container, TextField, Typography } from "@mui/material";

export default function Upload() {
  return (
    <Container sx={{ maxWidth: 900 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Typography variant="h2" component="h1" sx={{ marginBottom: 3 }}>
          <b>Upload Course</b>
        </Typography>
        <form>
          <TextField
            type="text"
            label="Playlist URL"
            variant="outlined"
            sx={{ width: "300px", marginBottom: 1 }}
          />
          <br />
          <TextField
            type="text"
            label="Price (VND)"
            variant="outlined"
            sx={{ width: "300px", marginBottom: 1 }}
          />
          <br />
          <TextField
            type="text"
            label="Cover Image URL"
            variant="outlined"
            sx={{ width: "300px", marginBottom: 2 }}
          />
          <br />
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button variant="contained">Upload</Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
}
