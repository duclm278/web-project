// import { useEffect, useState } from "react";
import {
  Datagrid,
  DateField,
  DeleteButton,
  EditButton,
  ImageField,
  List,
  NumberField,
  TextField,
  useRecordContext,
} from "react-admin";

const FieldWrapper = ({ children, label }) => children;

const LessonsField = () => {
  const record = useRecordContext();
  return (
    <ul>
      {record.lessons.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default function CourseList(props) {
  // const [sidebarRef, setSidebarRef] = useState(null);
  // const [sidebarWidth, setSidebarWidth] = useState(0);
  // useEffect(() => {
  //   const handleResize = () => {
  //     setTimeout(() => {
  //       const newSidebarRef = document.querySelector(".RaSidebar-fixed");
  //       setSidebarRef(newSidebarRef);
  //       setSidebarWidth(newSidebarRef?.offsetWidth || 0);
  //     }, 200);
  //   };
  //   handleResize();
  //   window.addEventListener("resize", handleResize);
  //   // TODO: DOMNodeInserted is deprecated, use MutationObserver instead
  //   sidebarRef?.addEventListener("DOMNodeInserted", handleResize);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //     // TODO: DOMNodeInserted is deprecated, use MutationObserver instead
  //     sidebarRef?.removeEventListener("DOMNodeInserted", handleResize);
  //   };
  // }, [sidebarRef]);
  // console.log("sidebarWidth", sidebarWidth);
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <ImageField source="coverImage" />
        <TextField source="name" />
        <NumberField source="price" />
        <FieldWrapper label="Linked lessons">
          <LessonsField />
        </FieldWrapper>
        <NumberField source="studentsEnrolled" />
        <DateField source="createdAt" />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
}
