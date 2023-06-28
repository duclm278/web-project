import Editor from "@monaco-editor/react";
import { Typography } from "@mui/material";
import axios from "axios";
import yaml from "js-yaml";
import { useEffect, useState } from "react";
import {
  Create,
  SaveButton,
  SimpleForm,
  Toolbar,
  useGetRecordId,
} from "react-admin";
import { useNavigate } from "react-router-dom";

const VITE_APP_BASE_URL =
  import.meta.env.VITE_APP_BASE_URL || "http://localhost:3001/api";

export default function QuizCreate(props) {
  const [data, setData] = useState("");
  const navigate = useNavigate();
  const recordId = useGetRecordId();
  console.log("record", recordId);

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
        const yamlData = yaml.dump(response.data);
        setData(yamlData);
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
    <Create title="Update the quiz" {...props}>
      <SimpleForm
        toolbar={<MyToolbar />}
        onSubmit={() => handleSubmit(data)}
        sx={{ maxWidth: 850 }}
      >
        <Typography variant="h6" gutterBottom>
          Update the quiz in YAML format
        </Typography>
        <Editor
          height="70vh"
          defaultLanguage="yaml"
          value={data}
          onChange={(value) => setData(value)}
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
