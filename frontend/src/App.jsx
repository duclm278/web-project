import { CssBaseline, ThemeProvider } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { AuthContextProvider } from "./contexts/AuthContext";
import Router from "./routes";
import theme from "./themes/mui";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <AuthContextProvider>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router />
          </ThemeProvider>
        </BrowserRouter>
      </AuthContextProvider>
    </LocalizationProvider>
  );
}

export default App;
