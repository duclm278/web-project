import { Create, NumberInput, SimpleForm, TextInput } from "react-admin";
import axios from "axios";

const BASE_URL =
  import.meta.env.VITE_APP_BASE_URL || "http://localhost:3001/api";

const CourseCreate = (props) => {
  const handleSubmit = (courseData) => {
    axios
      .post(`${BASE_URL}/upload`, courseData)
      .then((response) => {
        console.log("Course created successfully!", response);
      })
      .catch((error) => {
        console.error("Error creating course:", error);
      });
  };
  return (
    <Create title="Upload a course" {...props}>
      <SimpleForm onSubmit={handleSubmit}>
        <TextInput source="playlistUrl" />
        <NumberInput source="price" />
        <TextInput source="coverImage" />
      </SimpleForm>
    </Create>
  );
};

export default CourseCreate;
