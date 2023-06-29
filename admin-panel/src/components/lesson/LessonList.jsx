import {
  Datagrid,
  DateField,
  DeleteButton,
  EditButton,
  List,
  NumberField,
  TextField,
  TextInput,
} from "react-admin";

const lessonFilters = [
  <TextInput
    key="q"
    label="Search"
    source="q"
    alwaysOn
    placeholder="Partial name and id"
  />,
  <TextInput key="type" label="Type" source="type" />,
];

export default function LessonList(props) {
  return (
    <List filters={lessonFilters} {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="type" />
        <NumberField source="lengthSeconds" />
        <DateField source="createdAt" />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
}
