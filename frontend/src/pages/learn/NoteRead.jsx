import { Box, Button, Card, Link, Stack } from "@mui/material";
import MDEditor from "@uiw/react-md-editor";
import React from "react";
import { formatTime } from "../../utils/formatter";

export function NoteRead({
  handleSeek,
  note,
  handleNoteEditToggle,
  handleNoteDelete,
}) {
  return (
    <Card
      sx={{
        my: 2,
        p: 4,
        border: "1px solid #eaecef",
        borderRadius: 12,
      }}
    >
      <Link
        underline="hover"
        variant="body1"
        fontWeight="bold"
        onClick={(e) => {
          e.preventDefault();
          handleSeek(note.time);
        }}
        sx={{ mb: 1 }}
      >
        {formatTime(note.time)}
      </Link>

      <Box className="container">
        <Box
          data-color-mode="light"
          style={{
            lineHeight: "1px !important",
          }}
        >
          <MDEditor.Markdown source={note.content} />
        </Box>
      </Box>
      <Stack direction="row" alignItems="center" gap={1} mt={2}>
        <Button
          variant="contained"
          size="small"
          color="primary"
          onClick={() => handleNoteEditToggle(note._id)}
        >
          Edit
        </Button>
        <Button
          size="small"
          variant="contained"
          color="error"
          onClick={() => handleNoteDelete(note._id)}
        >
          Delete
        </Button>
      </Stack>
    </Card>
  );
}
