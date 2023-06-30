import Editor from "@monaco-editor/react";
import { Typography } from "@mui/material";
import axios from "axios";
import yaml from "js-yaml";
import { useEffect, useState } from "react";
import {
  AutocompleteInput,
  Create,
  ReferenceInput,
  SaveButton,
  SimpleForm,
  TextInput,
  Toolbar,
  useGetRecordId,
  useTheme,
} from "react-admin";
import { useNavigate } from "react-router-dom";

const VITE_APP_BASE_URL =
  import.meta.env.VITE_APP_BASE_URL || "http://localhost:3001/api";

const deleteMetadata = (data) => {
  delete data.id;
  delete data._id;
  delete data.createdAt;
  delete data.updatedAt;
  delete data.__v;
};

export default function QuizCreate(props) {
  const [file, setFile] = useState("");
  const [theme, setTheme] = useTheme();
  const navigate = useNavigate();
  const recordId = useGetRecordId();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${VITE_APP_BASE_URL}/quizzes/${recordId}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        const data = response.data;
        deleteMetadata(data);
        data.questions.forEach((question) => {
          deleteMetadata(question);
        });
        const yamlData = yaml.dump(response.data);
        setFile(yamlData);
      } catch (error) {
        console.error("Error fetching quiz:", error);
      }
    };
    fetchData();
  }, [recordId]);

  const handleSubmit = async (data) => {
    const token = localStorage.getItem("token");
    const json = yaml.load(data);
    try {
      const response = await axios.patch(
        `${VITE_APP_BASE_URL}/quizzes/${recordId}`,
        json,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log("Quiz updated successfully!", response);
      navigate(-1);
    } catch (error) {
      console.error("Error updating quiz:", error);
    }
  };

  return (
    <Create title="Update the quiz lesson" {...props}>
      <SimpleForm
        toolbar={<MyToolbar />}
        onSubmit={() => handleSubmit(file)}
        sx={{ maxWidth: 850 }}
      >
        <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
          Update the quiz lesson in YAML format
        </Typography>
        <ReferenceInput source="courseId" reference="courses">
          <AutocompleteInput
            fullWidth
            optionText={(record) => `${record.name} ${record._id}`}
            helperText="Course is optional, used to insert this lesson to a specific course."
            sx={{
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
          sx={{ mb: 2.5 }}
        />
        <Editor
          height="70vh"
          defaultLanguage="yaml"
          theme={theme === "dark" ? "vs-dark" : "light"}
          value={file}
          onChange={(value) => setFile(value)}
        />
      </SimpleForm>
    </Create>
  );
}

function MyToolbar(props) {
  return (
    <Toolbar {...props}>
      <SaveButton alwaysEnable />
    </Toolbar>
  );
}
