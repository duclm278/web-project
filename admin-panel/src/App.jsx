import simpleRestProvider from "ra-data-simple-rest";
import { Admin, Resource, defaultTheme, fetchUtils } from "react-admin";
import "./App.css";
import authProvider from "./authProvider";
import CourseCreate from "./components/course/CourseCreate";
import CourseEdit from "./components/course/CourseEdit";
import CourseList from "./components/course/CourseList";
import LessonCreate from "./components/lesson/LessonCreate";
import LessonEdit from "./components/lesson/LessonEdit";
import LessonList from "./components/lesson/LessonList";
import QuizCreate from "./components/quiz/QuizCreate";
import QuizEdit from "./components/quiz/QuizEdit";
import QuizList from "./components/quiz/QuizList";
import theme from "./themes/mui";

const VITE_APP_BASE_URL =
  import.meta.env.VITE_APP_BASE_URL || "http://localhost:3001/api";

const lightTheme = { ...defaultTheme, ...theme };
const darkTheme = { ...defaultTheme, ...theme, palette: { mode: "dark" } };

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
      theme={lightTheme}
      darkTheme={darkTheme}
      authProvider={authProvider}
      dataProvider={simpleRestProvider(VITE_APP_BASE_URL, httpClient)}
    >
      <Resource
        name="courses"
        list={CourseList}
        create={CourseCreate}
        edit={CourseEdit}
      />
      <Resource
        name="lessons"
        list={LessonList}
        create={LessonCreate}
        edit={LessonEdit}
      />
      {/* <Resource name="orders" list={OrderList} edit={OrderEdit} /> */}
      <Resource
        name="quizzes"
        list={QuizList}
        create={QuizCreate}
        edit={QuizEdit}
      />
    </Admin>
  );
}

export default App;
