import {
  ArrayField,
  List,
  Datagrid,
  NumberField,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
} from "react-admin";

const CourseList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <NumberField source="price" />
        <ArrayField source="lessons">
          <Datagrid bulkActionButtons={false}>
            <TextField source="_id" />
            <TextField source="name" />
            <TextField source="videoUrl" />
            <NumberField source="lengthSeconds" />
          </Datagrid>
        </ArrayField>
        <NumberField source="studentsEnrolled" />
        <TextField source="coverImage" />
        <DateField source="createdAt" />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
};

export default CourseList;
