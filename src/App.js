import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Form1 from './Form1';
import FormContainer from './FormContainer';
import { fade, makeStyles, ThemeProvider } from "@material-ui/core/styles";
import theme from './FormTheme';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faFacebook, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
import "animate.css/animate.min.css";
 

library.add(fab, faCheckSquare, faCoffee, faFacebook, faGithub, faTwitter);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <CssBaseline />
        <FormContainer></FormContainer>
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
