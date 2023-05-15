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

const OrderList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="userId" />
        <ArrayField source="items">
          <Datagrid bulkActionButtons={false}>
            <TextField source="courseId" />
          </Datagrid>
        </ArrayField>
        <NumberField source="amount" />
        <TextField source="address" />
        <TextField source="status" />
        <DateField source="createdAt" />
        <DateField source="updatedAt" />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
};

export default OrderList;
