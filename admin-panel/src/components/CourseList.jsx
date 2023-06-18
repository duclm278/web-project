import {
  ArrayField,
  List,
  Datagrid,
  ImageField,
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
        <ImageField source="coverImage" title="name" />
        <TextField source="name" />
        <NumberField source="price" />
        <ArrayField source="lessons" perPage={5}>
          <Datagrid bulkActionButtons={false}>
            <TextField source="name" />
            <TextField source="videoUrl" />
            <NumberField source="lengthSeconds" />
          </Datagrid>
        </ArrayField>
        <NumberField source="studentsEnrolled" />
        <DateField source="createdAt" />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
};

export default CourseList;
