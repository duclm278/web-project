import { Create, NumberInput, SimpleForm, TextInput } from "react-admin";
import axios from "axios";

const CourseCreate = (props) => {
  const handleSubmit = (courseData) => {
    axios
      .post("http://localhost:3001/api/upload", courseData)
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
