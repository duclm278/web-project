import { Box } from "@mui/material";
import {
  ArrayInput,
  DeleteButton,
  Edit,
  FormDataConsumer,
  NumberInput,
  SaveButton,
  SelectInput,
  SimpleForm,
  SimpleFormIterator,
  TextInput,
  Toolbar,
  required,
} from "react-admin";
import "./Quiz.css";

export default function CourseShow(props) {
  return (
    <Edit title="Edit the quiz" {...props}>
      <SimpleForm
        shouldUnregister
        toolbar={<MyToolbar />}
        sx={{ maxWidth: 850 }}
      >
        <TextInput source="id" fullWidth disabled />
        <TextInput source="quizTitle" fullWidth />
        <TextInput source="quizSynopsis" fullWidth multiline />
        <ArrayInput source="questions">
          <SimpleFormIterator inline fullWidth className="lv-1">
            <TextInput source="question" fullWidth multiline />
            <SelectInput
              source="questionType"
              fullWidth
              validate={required()}
              choices={[
                { id: "text", name: "Text" },
                { id: "photo", name: "Photo" },
              ]}
            />
            <TextInput
              source="questionPic"
              fullWidth
              placeholder="https://dummyimage.com/600x400/000/fff&text=X"
              helperText="If you need to display Picture in Question"
              sx={{ mb: 2.5 }}
            />
            <SelectInput
              source="answerSelectionType"
              fullWidth
              validate={required()}
              choices={[
                { id: "single", name: "Single" },
                { id: "multiple", name: "Multiple" },
              ]}
            />
            <ArrayInput source="answers">
              <SimpleFormIterator
                inline
                fullWidth
                className="lv-2"
                getItemLabel={(index) => `A${index + 1}.`}
              >
                <TextInput fullWidth multiline />
              </SimpleFormIterator>
            </ArrayInput>

            <FormDataConsumer>
              {({
                formData, // The whole form data
                scopedFormData, // The data for this item of the ArrayInput
                getSource, // A function to get the valid source inside an ArrayInput
                ...rest
              }) =>
                scopedFormData.answerSelectionType === "single" ? (
                  <TextInput
                    source={getSource("correctAnswer")}
                    validate={required()}
                  />
                ) : (
                  <ArrayInput source={getSource("correctAnswer")}>
                    <SimpleFormIterator
                      // inline
                      fullWidth
                      className="lv-2"
                      getItemLabel={(index) => `A${index + 1}.`}
                    >
                      <NumberInput fullWidth min={1} step={1} />
                    </SimpleFormIterator>
                  </ArrayInput>
                )
              }
            </FormDataConsumer>

            <NumberInput
              source="point"
              fullWidth
              parse={(v) => (v === "" ? 0 : parseInt(v, 10))}
            />
          </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
    </Edit>
  );
}

function MyToolbar() {
  return (
    <Toolbar>
      <SaveButton alwaysEnable />
      <Box flex={1} />
      <DeleteButton />
    </Toolbar>
  );
}
