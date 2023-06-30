import {
  Datagrid,
  DateField,
  DeleteButton,
  EditButton,
  ImageField,
  List,
  NumberField,
  TextField,
  TextInput,
} from "react-admin";

const courseFilters = [
  <TextInput
    key="q"
    label="Search"
    source="q"
    alwaysOn
    placeholder="Partial name and id"
  />,
];

export default function CourseList(props) {
  return (
    <List filters={courseFilters} {...props}>
      <Datagrid>
        <TextField source="id" />
        <ImageField
          source="coverImage"
          sx={{
            "& img": { maxWidth: 100, maxHeight: 100, objectFit: "cover" },
          }}
        />
        <TextField source="name" />
        <NumberField source="price" />
        <NumberField source="studentsEnrolled" />
        <DateField source="createdAt" />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
}
