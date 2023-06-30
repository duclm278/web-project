import { Box, Button, Stack, Tab, Tabs, Typography } from "@mui/material";
import Linkify from "linkify-react";
import React, { useEffect, useRef, useState } from "react";
import Quiz from "react-quiz-component";
import { useAuthContext } from "../../hooks/useAuthContext";
import noteService from "../../services/note";
import { NoteCreate } from "./NoteCreate";
import { NoteRead } from "./NoteRead";
import { NoteUpdate } from "./NoteUpdate";
import "./index.css";

export default function LearningQuiz({ lesson, onEnded }) {
  const { user } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const [tab, setTab] = useState(0);
  const [notes, setNotes] = useState([]);
  const [noteContent, setNoteContent] = useState("");
  const [timeMarked, setTimeMarked] = useState(null);

  useEffect(() => {
    if (!lesson) return;
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

  // Convert lesson to quiz
  const quiz = {
    quizTitle: lesson.name,
    quizSynopsis: lesson.description,
    nrOfQuestions: lesson.questions?.length,
    ...lesson,
  };

  const mdRef = useRef(null);
  const [mdFocus, setMdFocus] = useState(false);
  useEffect(() => {
    if (mdFocus && tab !== 1) setTab(1);
    if (mdFocus && tab === 1) {
      setMdFocus(false);
      requestAnimationFrame(() => {
        // if (mdRef.current?.scrollIntoView) mdRef.current?.scrollIntoView();
      });
    }
  }, [mdFocus, tab]);

  const handleSeek = () => {};

  const handleTimeMarked = async () => {
    setTimeMarked(0);
    setMdFocus(true);
  };

  const handleNoteCreate = async () => {
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

  console.log("lesson", lesson);
  return (
    <Stack gap={2}>
      <Box width="100%" minHeight="70vh">
        <Quiz
          quiz={quiz}
          // shuffle={true}
          // showInstantFeedback={true}
          continueTillCorrect={true}
          onComplete={onEnded}
        />
      </Box>

      <Stack
        direction="row"
        alignItems="flex-start"
        justifyContent="space-between"
      >
        <Tabs
          variant="scrollable"
          scrollButtons="auto"
          value={tab}
          onChange={(e, newValue) => setTab(newValue)}
          textColor="inherit"
          TabIndicatorProps={{
            style: {
              height: 2.5,
              backgroundColor: "#1c1d1f",
            },
          }}
          sx={{ mt: 1, mb: 2 }}
        >
          <Tab value={0} label="ABOUT" />
          <Tab value={1} label="NOTES" />
        </Tabs>
        <Button
          variant="contained"
          color="primary"
          onClick={handleTimeMarked}
          sx={{ alignSelf: "flex-start", mt: 1.25 }}
        >
          Add new note
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

        {notes.length === 0 && (
          <Typography component="h2" variant="h6" fontWeight="bold">
            There are no notes yet.
          </Typography>
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
    </Stack>
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
