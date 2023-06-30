import Editor from "@monaco-editor/react";
import { Typography } from "@mui/material";
import axios from "axios";
import yaml from "js-yaml";
import { useState } from "react";
import {
  AutocompleteInput,
  Create,
  ReferenceInput,
  SaveButton,
  SimpleForm,
  TextInput,
  Toolbar,
  useTheme,
} from "react-admin";
import { useNavigate } from "react-router-dom";
import sampleYaml from "./sampleYaml";

const VITE_APP_BASE_URL =
  import.meta.env.VITE_APP_BASE_URL || "http://localhost:3001/api";

export default function QuizCreate(props) {
  const [file, setFile] = useState(sampleYaml);
  const [theme, setTheme] = useTheme();
  const navigate = useNavigate();

  const handleSubmit = async (file, data) => {
    const token = localStorage.getItem("token");
    let json = yaml.load(file);
    if (data.courseId) json.courseId = data.courseId;
    if (data.index) json.index = data.index;
    try {
      const response = await axios.post(`${VITE_APP_BASE_URL}/quizzes`, json, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log("Quiz created successfully!", response);
      navigate(-1);
    } catch (error) {
      console.error("Error creating quiz:", error);
    }
  };

  return (
    <Create title="Upload a quiz lesson" {...props}>
      <SimpleForm
        toolbar={<MyToolbar />}
        onSubmit={(data) => handleSubmit(file, data)}
        sx={{ maxWidth: 850 }}
      >
        <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
          Upload a quiz lesson in YAML format
        </Typography>
        <ReferenceInput source="courseId" reference="courses">
          <AutocompleteInput
            fullWidth
            optionText={(record) => `${record.name} ${record._id}`}
            helperText="Course is optional, used to insert this lesson to a specific course."
            sx={{
              mt: 2.5,
              mb: 2.5,
              "& .MuiInputBase-input.Mui-disabled": {
                WebkitTextFillColor: "#000000",
              },
            }}
          />
        </ReferenceInput>
        <TextInput
          source="index"
          fullWidth
          helperText="Index is optional, used to insert this lesson BEFORE an existing lesson's index of the specified course. If the index is not specified, this lesson will be inserted at the end of the course. If both the course and index are not specified, this lesson will be orphaned (unlinked)."
          sx={{ mb: 2 }}
        />
        <Typography variant="body1" sx={{ ml: 1, mb: 2 }}>
          Edit the YAML file below to create a quiz lesson. You can use the
          below sample YAML file as a template.
        </Typography>
        <Editor
          height="75vh"
          defaultLanguage="yaml"
          theme={theme === "dark" ? "vs-dark" : "light"}
          value={file}
          onChange={(value) => setFile(value)}
        />
      </SimpleForm>
    </Create>
  );
}

function MyToolbar() {
  return (
    <Toolbar>
      <SaveButton alwaysEnable />
    </Toolbar>
  );
}
