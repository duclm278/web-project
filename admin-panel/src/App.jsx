import simpleRestProvider from "ra-data-simple-rest";
import { fetchUtils, Admin, Resource } from "react-admin";
import authProvider from "./authProvider";
import CourseCreate from "./components/course/CourseCreate";
import CourseEdit from "./components/course/CourseEdit";
import CourseList from "./components/course/CourseList";
import OrderEdit from "./components/order/OrderEdit";
import OrderList from "./components/order/OrderList";

const BASE_URL =
  import.meta.env.VITE_APP_BASE_URL || "http://localhost:3001/api";

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  const token = localStorage.getItem("token");
  options.headers.set("Authorization", `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
};

function App() {
  return (
    <Admin
      authProvider={authProvider}
      dataProvider={simpleRestProvider(BASE_URL, httpClient)}
    >
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
