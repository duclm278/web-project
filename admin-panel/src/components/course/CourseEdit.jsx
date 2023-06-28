import {
  Edit,
  NumberInput,
  SimpleForm,
  TextInput,
  required,
} from "react-admin";

const CourseEdit = (props) => {
  return (
    <Edit title="Edit the course" {...props}>
      <SimpleForm>
        <TextInput source="id" fullWidth disabled />
        <TextInput source="name" fullWidth validate={required()} />
        <NumberInput source="price" fullWidth validate={required()} />
        <TextInput source="coverImage" fullWidth validate={required()} />
        <TextInput source="description" fullWidth multiline />
      </SimpleForm>
    </Edit>
  );
};

export default CourseEdit;
