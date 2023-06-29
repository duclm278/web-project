import {
  Edit,
  FormDataConsumer,
  NumberInput,
  SelectInput,
  SimpleForm,
  TextInput,
  required,
} from "react-admin";

const LessonEdit = (props) => {
  return (
    <Edit title="Edit the lesson" {...props}>
      <SimpleForm shouldUnregister>
        <TextInput source="id" fullWidth disabled />
        <TextInput source="name" fullWidth validate={required()} />
        <SelectInput
          source="type"
          fullWidth
          validate={required()}
          choices={[
            { id: "video", name: "Video" },
            { id: "quiz", name: "Quiz" },
          ]}
        />
        <NumberInput source="lengthSeconds" fullWidth min={0} />
        <FormDataConsumer>
          {({ formData, ...rest }) => {
            console.log(formData.videoUrl);
            return (
              formData.type === "video" && (
                <TextInput source="videoUrl" fullWidth />
              )
            );
          }}
        </FormDataConsumer>
        <TextInput source="description" fullWidth multiline />
      </SimpleForm>
    </Edit>
  );
};

export default LessonEdit;
