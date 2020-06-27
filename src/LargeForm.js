import React from 'react';
import { FormikContext } from 'formik';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { fade, makeStyles, ThemeProvider } from "@material-ui/core/styles";
import { useChangeTheme } from "./Theme";
import { Formik, Form, Field } from 'formik';
import { Button, LinearProgress, Link } from '@material-ui/core';
import { TextField } from 'formik-material-ui';
import theme from './FormTheme';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons'

const useStyles = makeStyles((theme) => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        background: '#FFF'
    },
    formInput: {
        background: theme.palette.secondary.main,

        '&:before': { 
            borderBottom: '1px solid snow'
        },
        '&:hover': {
            background: '#e9f2ef',
            border: theme.palette.primary.main.dark
        },
    },
    button: {
        background: theme.palette.primary.main,
        opacity: '.8',
        color: 'snow',
        fontWeight: 'bold',
        width: '100%',

        '&:hover':{
            background: theme.palette.primary.main,
            opacity: '1'
        }
    },
    header: {
        color: 'black',
        fontWeight: 'bold',
        margin: '.5rem 0'
    },
  }));

  const helperTextStyles = makeStyles(theme => ({
    root: {
      margin: 4,
      color: "black",
      position: 'absolute',
      top: '37px'
    },
    error: {
      "&.MuiFormHelperText-root.Mui-error": {
        color: 'red'
      }
    }
  }));
  
  export default function LargeForm() {
    const classes = useStyles();
    const helperTestClasses = helperTextStyles();

    return (
        <Grid container >
            <Grid item xs={12}>
                <Box align="center">
                    <Typography variant="h5"> Welcome to </Typography>
                    <Typography variant="h3">Company</Typography>
                    <Formik
                    initialValues={{
                        username: '',
                        password: '',
                    }}

                    validate = {values => {
                        const errors = {};

                        if(!values.username) {
                            errors.username = 'Required';
                        }

                        if(!values.password) {
                            errors.password = 'Required';
                        }
                        
                        return errors;
                    }}

                    onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        setSubmitting(false);
                        alert(JSON.stringify(values, null, 2));
                    }, 500);
                    }}
                >
                    {({ submitForm, isSubmitting }) => (
                        <Grid item xs={8}>
                        <Form className={classes.form}>
                            <Field
                                component={TextField}
                                type="username"
                                name="username"
                                label="Username"
                                fullWidth="true"
                                variant="outlined"
                                size="small"
                                margin="dense"
                                color="main"
                                required
                                FormHelperTextProps={{ classes: helperTestClasses }}
                                InputProps={{
                                    className: classes.formInput,
                                }}
                            />
                            <br />
                            <Field
                                component={TextField}
                                name="password"
                                type="password"
                                label="Password"
                                fullWidth="true"
                                variant="outlined"
                                size="small"
                                margin="dense"
                                id="outlined-error"
                                color="main"
                                required
                                FormHelperTextProps={{ classes: helperTestClasses }}
                                InputProps={{
                                    className: classes.formInput,
                                }}
                            />
                            <br />
                            {isSubmitting && <LinearProgress />}
                            <br />

                            <Button
                                variant="contained"
                                disabled={isSubmitting}
                                onClick={submitForm}
                                className={classes.button}
                                color="red"
                                >
                                Sign In
                            </Button>
                        </Form>
                        </Grid>
                        )}
                    </Formik>
                    <Box>
                        <Typography variant="body1" style={{ marginTop: '1rem'}}>
                            Don't have an account? 
                            <Link href="#"> Sign Up</Link>
                        </Typography>
                        <FontAwesomeIcon icon={['fab', 'facebook']} size="2x" />
                        <FontAwesomeIcon icon={['fab', 'twitter']} size="2x"/>
                        <FontAwesomeIcon icon={['fab', 'github']} size="2x" />
                    </Box>
                </Box>
            </Grid>
        </Grid>
        
    );
  }