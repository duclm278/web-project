import { useState } from "react";
import "./App.css";
import { Box, Button, Container, Stack, Typography } from "@mui/material";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <Typography variant="h2" gutterBottom component="h1">
        My app
      </Typography>
      <Typography variant="h3" gutterBottom component="h2">
        Current counter: {counter}
      </Typography>
    </>
  );
}

export default App;
