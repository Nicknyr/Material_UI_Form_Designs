import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Form1 from './Form1';
import { fade, makeStyles, ThemeProvider } from "@material-ui/core/styles";
import theme from './FormTheme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <CssBaseline />
        <Form1></Form1>
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
