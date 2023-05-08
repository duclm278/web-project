import { Admin, Resource } from "react-admin";
import restProvider from "ra-data-simple-rest";
import CourseList from "./components/CourseList";

function App() {
  return (
    <Admin dataProvider={restProvider("http://localhost:3001/api")}>
      <Resource name="courses" list={CourseList} />
    </Admin>
  );
}

export default App;
