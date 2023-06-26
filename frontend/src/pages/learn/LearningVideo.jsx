import { Box, Button, Stack, Tab, Tabs, Typography } from "@mui/material";
import Linkify from "linkify-react";
import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import noteService from "../../services/note";
import { formatTime } from "../../utils/formatter";
import { NoteCreate } from "./NoteCreate";
import { NoteRead } from "./NoteRead";
import { NoteUpdate } from "./NoteUpdate";
import "./index.css";

export default function LearningVideo({ lesson, onEnded }) {
  const [loading, setLoading] = useState(false);
  const [tab, setTab] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [notes, setNotes] = useState([]);
  const [noteContent, setNoteContent] = useState("");
  const [timeMarked, setTimeMarked] = useState(null);

  const playerRef = useRef(null);
  const playerContainerRef = useRef(null);

  useEffect(() => {
    if (!lesson) return;
    const user = JSON.parse(localStorage.getItem("user"));
    const token = user.token;
    const fetchNotes = async () => {
      setLoading(true);
      try {
        const notes = await noteService.search(token, {
          lessonId: lesson._id,
        });
        setNotes(notes);
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    };

    fetchNotes();
  }, [lesson]);

  const mdRef = useRef(null);
  const [mdFocus, setMdFocus] = useState(false);
  useEffect(() => {
    if (mdFocus && tab !== 1) setTab(1);
    if (mdFocus && tab === 1) {
      setMdFocus(false);
      requestAnimationFrame(() => {
        if (mdRef.current?.scrollIntoView) mdRef.current?.scrollIntoView();
      });
    }
  }, [mdFocus, tab]);

  const handleSeek = (e, seconds) => {
    e.preventDefault();
    playerRef.current.seekTo(seconds, "seconds");
    requestAnimationFrame(() => {
      if (playerContainerRef.current?.scrollIntoView)
        playerContainerRef.current?.scrollIntoView();
    });
    setPlaying(true);
  };

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

  const handleTimeMarked = async () => {
    setPlaying(false);
    setTimeout(() => {
      setTimeMarked(secondsElapsed);
      setMdFocus(true);
    }, 500);
  };

  const handleNoteCreate = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = user.token;
    setLoading(true);
    try {
      const newNote = await noteService.create(token, {
        lessonId: lesson._id,
        time: timeMarked,
        content: noteContent,
      });
      setNotes([newNote, ...notes]);
      setNoteContent("");
      setTimeMarked(null);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  const handleNoteDelete = async (noteId) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = user.token;
    setLoading(true);
    try {
      await noteService.remove(token, noteId);
      setNotes(notes.filter((note) => note._id !== noteId));
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  const handleNoteEditToggle = (noteId) => {
    setNotes(
      notes.map((note) =>
        note._id === noteId ? { ...note, isEditing: !note.isEditing } : note
      )
    );
  };

  const handleNoteEditChange = (noteId, content) => {
    setNotes(
      notes.map((note) =>
        note._id === noteId ? { ...note, content: content } : note
      )
    );
  };

  const handleNoteEditSubmit = async (noteId) => {
    console.log("Submitting note", noteId);
    const user = JSON.parse(localStorage.getItem("user"));
    const token = user.token;
    setLoading(true);
    try {
      const updatedNote = await noteService.update(token, noteId, {
        content: notes.find((note) => note._id === noteId).content,
      });
      updatedNote.isEditing = false;
      setNotes(
        notes.map((note) =>
          note._id === noteId ? { ...note, ...updatedNote } : note
        )
      );
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  return (
    <Box>
      <Box
        ref={playerContainerRef}
        sx={{
          width: "100%",
          minHeight: "55vh",
          maxHeight: "75vh",
          aspectRatio: "16/9",
        }}
      >
        <ReactPlayer
          ref={playerRef}
          url={lesson?.videoUrl}
          origin={location.origin}
          controls
          width="100%"
          height="100%"
          playing={playing}
          onPlay={() => setPlaying(true)}
          onEnded={onEnded}
          onProgress={(progress) => {
            setSecondsElapsed(Math.floor(progress.playedSeconds));
          }}
        />
      </Box>

      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Tabs
          variant="scrollable"
          scrollButtons="auto"
          value={tab}
          onChange={handleTabChange}
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
        <Button variant="contained" color="primary" onClick={handleTimeMarked}>
          Stop to add note at {formatTime(secondsElapsed)}
        </Button>
      </Stack>

      <TabPanel value={tab} index={0}>
        <Typography component="h2" variant="h6" fontWeight="bold">
          {lesson?.name}
        </Typography>
        <Typography variant="body1" mt={2} sx={{ whiteSpace: "pre-line" }}>
          <Linkify>{lesson?.description}</Linkify>
        </Typography>
      </TabPanel>

      <TabPanel value={tab} index={1}>
        {timeMarked !== null && (
          <NoteCreate
            mdRef={mdRef}
            handleSeek={handleSeek}
            noteContent={noteContent}
            setNoteContent={setNoteContent}
            timeMarked={timeMarked}
            setTimeMarked={setTimeMarked}
            handleNoteCreate={handleNoteCreate}
          />
        )}

        {notes.map((note) => (
          <React.Fragment key={note._id}>
            {note.isEditing ? (
              <NoteUpdate
                mdRef={mdRef}
                handleSeek={handleSeek}
                note={note}
                handleNoteEditToggle={handleNoteEditToggle}
                handleNoteEditChange={handleNoteEditChange}
                handleNoteEditSubmit={handleNoteEditSubmit}
              />
            ) : (
              <NoteRead
                handleSeek={handleSeek}
                note={note}
                handleNoteDelete={handleNoteDelete}
                handleNoteEditToggle={handleNoteEditToggle}
              />
            )}
          </React.Fragment>
        ))}
      </TabPanel>

      <TabPanel value={tab} index={2}>
        <Typography component="h2" variant="h6" fontWeight="bold">
          There are no comments yet.
        </Typography>
      </TabPanel>

      <TabPanel value={tab} index={3}>
        <Typography component="h2" variant="h6" fontWeight="bold">
          There are no ratings yet.
        </Typography>
      </TabPanel>
    </Box>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      id={`simple-tabpanel-${index}`}
      hidden={value !== index}
      style={{ minHeight: 250 }}
      {...other}
    >
      {value === index && <Box sx={{ p: 1 }}>{children}</Box>}
    </Box>
  );
}
