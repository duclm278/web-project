import { Box, Button, Card, Link, Stack, Typography } from "@mui/material";
import MDEditor from "@uiw/react-md-editor";
import { formatTime } from "../../utils/formatter";

export function NoteCreate({
  mdRef,
  noteContent,
  setNoteContent,
  timeMarked,
  setTimeMarked,
  handleSeek,
  handleNoteCreate,
}) {
  return (
    <Card
      sx={{
        my: 2,
        p: 4,
        border: "2px solid #eaecef",
        borderRadius: 12,
      }}
    >
      <Typography component="h2" variant="h6" fontWeight="bold" mb={2}>
        Creating note at{" "}
        <Box
          component="span"
          sx={{
            color: "primary.main",
          }}
        >
          <Link
            underline="hover"
            fontWeight="bold"
            onClick={(e) => handleSeek(e, timeMarked)}
            sx={{ mb: 1 }}
          >
            {formatTime(timeMarked)}
          </Link>
        </Box>
      </Typography>
      <Box
        data-color-mode="light"
        style={{
          lineHeight: "1px !important",
        }}
      >
        <MDEditor
          ref={mdRef}
          autoFocus
          height={250}
          value={noteContent}
          onChange={setNoteContent}
        />
      </Box>
      <Stack direction="row" gap={1} mt={2}>
        <Button
          size="small"
          color="primary"
          variant="contained"
          onClick={() => handleNoteCreate()}
        >
          Save
        </Button>
        <Button
          size="small"
          color="error"
          variant="contained"
          onClick={() => {
            setTimeMarked(null);
          }}
        >
          Cancel
        </Button>
      </Stack>
    </Card>
  );
}
