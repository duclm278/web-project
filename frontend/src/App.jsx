import { CssBaseline } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Router from "./routes";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <BrowserRouter>
        <CssBaseline />
        <Router />
      </BrowserRouter>
    </LocalizationProvider>
  );
}

export default App;
