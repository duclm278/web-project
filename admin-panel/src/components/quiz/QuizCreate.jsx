import Editor from "@monaco-editor/react";
import { Typography } from "@mui/material";
import axios from "axios";
import yaml from "js-yaml";
import { useState } from "react";
import { Create, SaveButton, SimpleForm, Toolbar } from "react-admin";
import { useNavigate } from "react-router-dom";
import sampleYaml from "./sampleYaml";

const VITE_APP_BASE_URL =
  import.meta.env.VITE_APP_BASE_URL || "http://localhost:3001/api";

export default function QuizCreate(props) {
  const [data, setData] = useState(sampleYaml);
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    const token = localStorage.getItem("token");
    const json = yaml.load(data);
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
    <Create title="Upload a quiz" {...props}>
      <SimpleForm
        toolbar={<MyToolbar />}
        onSubmit={() => handleSubmit(data)}
        sx={{ maxWidth: 850 }}
      >
        <Typography variant="h6" gutterBottom>
          Upload a quiz in YAML format
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

function MyToolbar() {
  return (
    <Toolbar>
      <SaveButton alwaysEnable />
    </Toolbar>
  );
}
