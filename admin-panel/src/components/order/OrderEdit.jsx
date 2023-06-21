import { Edit, NumberInput, SimpleForm, TextInput } from "react-admin";

const OrderEdit = (props) => {
  return (
    <Edit title="Edit the order" {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput disabled source="userId" />
        <NumberInput source="amount" />
        <TextInput disabled source="address" />
        <TextInput source="status" />
      </SimpleForm>
    </Edit>
  );
};

export default OrderEdit;
