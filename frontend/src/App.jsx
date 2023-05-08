import { CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Router from "./routes";

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Router />
    </BrowserRouter>
  );
}

export default App;
