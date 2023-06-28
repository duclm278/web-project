import { Edit, NumberInput, SimpleForm, TextInput } from "react-admin";

const OrderEdit = (props) => {
  return (
    <Edit title="Edit the order" {...props}>
      <SimpleForm>
        <TextInput source="id" fullWidth disabled />
        <TextInput source="userId" fullWidth disabled />
        <NumberInput source="amount" />
        <TextInput source="address" fullWidth disabled />
        <TextInput source="status" />
      </SimpleForm>
    </Edit>
  );
};

export default OrderEdit;
