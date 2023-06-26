import { Box, Button, Card, Link, Stack, Typography } from "@mui/material";
import MDEditor from "@uiw/react-md-editor";
import { formatTime } from "../../utils/formatter";

export function NoteUpdate({
  mdRef,
  handleSeek,
  note,
  handleNoteEditToggle,
  handleNoteEditChange,
  handleNoteEditSubmit,
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
        Editing note at{" "}
        <Box
          component="span"
          sx={{
            color: "primary.main",
          }}
        >
          <Link
            underline="hover"
            fontWeight="bold"
            onClick={(e) => handleSeek(e, note.time)}
            sx={{ mb: 1 }}
          >
            {formatTime(note.time)}
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
          value={note.content}
          onChange={(content) => handleNoteEditChange(note._id, content)}
        />
      </Box>
      <Stack direction="row" gap={1} mt={2}>
        <Button
          size="small"
          color="primary"
          variant="contained"
          onClick={() => handleNoteEditSubmit(note._id)}
        >
          Save
        </Button>
        <Button
          size="small"
          color="error"
          variant="contained"
          onClick={() => handleNoteEditToggle(note._id)}
        >
          Cancel
        </Button>
      </Stack>
    </Card>
  );
}
