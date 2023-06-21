import { Edit, NumberInput, SimpleForm, TextInput } from "react-admin";

const CourseEdit = (props) => {
  return (
    <Edit title="Edit the course" {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="name" />
        <NumberInput source="price" />
        <TextInput source="coverImage" />
        <TextInput multiline source="description" />
      </SimpleForm>
    </Edit>
  );
};

export default CourseEdit;
