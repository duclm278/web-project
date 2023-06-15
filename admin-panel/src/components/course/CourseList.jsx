// import { useEffect, useState } from "react";
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
    <List
      {...props}
      // sx={{
      //   "& .RaList-actions": {
      //     maxWidth: `calc(100vw - ${sidebarWidth}px - 35px)`,
      //   },
      //   "& .RaList-content": {
      //     maxWidth: `calc(100vw - ${sidebarWidth}px - 35px)`,
      //     overflowX: "scroll",
      //   },
      // }}
    >
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
