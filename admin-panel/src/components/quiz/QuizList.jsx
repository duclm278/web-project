import { Box } from "@mui/material";
import {
  Datagrid,
  DateField,
  DeleteButton,
  EditButton,
  List,
  TextField,
  TextInput,
} from "react-admin";

const quizFilters = [
  <TextInput
    key="q"
    label="Search"
    source="q"
    alwaysOn
    placeholder="Partial name and id"
  />,
];

export default function quizList(props) {
  return (
    <List filters={quizFilters} {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="description" />
        <DateField source="createdAt" />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
}
