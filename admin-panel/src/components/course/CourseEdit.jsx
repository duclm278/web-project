import {
  ArrayInput,
  AutocompleteInput,
  Edit,
  NumberInput,
  ReferenceInput,
  SimpleForm,
  SimpleFormIterator,
  TextInput,
  required,
} from "react-admin";

const FieldWrapper = ({ children, label }) => children;

const CourseEdit = (props) => {
  return (
    <Edit title="Edit the course" {...props}>
      <SimpleForm shouldUnregister>
        <TextInput source="_id" fullWidth disabled />
        <TextInput source="name" fullWidth validate={required()} />
        <NumberInput source="price" fullWidth validate={required()} />
        <TextInput source="coverImage" fullWidth validate={required()} />
        <TextInput source="description" fullWidth multiline />
        <ArrayInput source="lessons">
          <SimpleFormIterator fullWidth>
            <ReferenceInput source="_id" reference="lessons">
              <AutocompleteInput
                fullWidth
                optionText={(record) => `${record.name} [${record._id}]`}
                sx={{
                  "& .MuiInputBase-input.Mui-disabled": {
                    WebkitTextFillColor: "#000000",
                  },
                }}
              />
            </ReferenceInput>
          </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
    </Edit>
  );
};

export default CourseEdit;
