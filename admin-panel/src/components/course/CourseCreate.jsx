import axios from "axios";
import {
  Create,
  NumberInput,
  SimpleForm,
  TextInput,
  required,
} from "react-admin";
import { useNavigate } from "react-router-dom";

const VITE_APP_BASE_URL =
  import.meta.env.VITE_APP_BASE_URL || "http://localhost:3001/api";

const CourseCreate = (props) => {
  const navigate = useNavigate();

  const handleSubmit = async (courseData) => {
    try {
      const response = await axios.post(
        `${VITE_APP_BASE_URL}/upload`,
        courseData
      );
      console.log("Course created successfully!", response);
      navigate(-1);
    } catch (err) {
      console.error("Error creating course:", err);
    }
  };

  return (
    <Create title="Upload a course" {...props}>
      <SimpleForm onSubmit={handleSubmit}>
        <TextInput source="playlistUrl" fullWidth validate={required()} />
        <NumberInput source="price" fullWidth validate={required()} />
        <TextInput
          source="coverImage"
          fullWidth
          helperText="By default, the cover image will be the image of the playlist."
        />
      </SimpleForm>
    </Create>
  );
};

export default CourseCreate;
