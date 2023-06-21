import { Admin, Resource } from "react-admin";
import restProvider from "ra-data-simple-rest";
import CourseList from "./components/course/CourseList";
import CourseCreate from "./components/course/CourseCreate";
import CourseEdit from "./components/course/CourseEdit";
import OrderList from "./components/order/OrderList";
import OrderEdit from "./components/order/OrderEdit";

function App() {
  return (
    <Admin dataProvider={restProvider("http://localhost:3001/api")}>
      <Resource
        name="courses"
        list={CourseList}
        create={CourseCreate}
        edit={CourseEdit}
      />
      <Resource name="orders" list={OrderList} edit={OrderEdit} />
    </Admin>
  );
}

export default App;
