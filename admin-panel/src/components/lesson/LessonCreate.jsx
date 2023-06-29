import {
  AutocompleteInput,
  Create,
  FormDataConsumer,
  NumberInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
  required,
} from "react-admin";

const LessonCreate = (props) => {
  return (
    <Create title="Create a quiz lesson" {...props}>
      <SimpleForm>
        <TextInput source="name" fullWidth validate={required()} />
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
          sx={{ mb: 2 }}
        />
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
                <TextInput source="videoUrl" fullWidth validate={required()} />
              )
            );
          }}
        </FormDataConsumer>
        <TextInput source="description" fullWidth multiline />
      </SimpleForm>
    </Create>
  );
};

export default LessonCreate;
