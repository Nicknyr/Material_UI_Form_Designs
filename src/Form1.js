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
import { Button, LinearProgress } from '@material-ui/core';
import { TextField } from 'formik-material-ui';
import theme from './FormTheme';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import PropTypes from 'prop-types';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      width: '100%',
      display: 'flex',
      alignItems: 'center'
    },  
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        justifyContent: 'center',
        color: 'snow',
        background: '#FFF'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        background: '#FFF'
    },
    customInput: {
        background: 'black'
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
        //background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, #21CBF3 90%)`,
        background: theme.palette.primary.main,
        opacity: '.8',
        color: 'snow',
        fontWeight: 'bold',
        width: '100%',
        marginTop: '.5rem',

        '&:hover':{
            background: theme.palette.primary.main,
            opacity: '1'
        }
    },
    box: {
        //background: 'green',
        display: 'flex',
        flexDirection: 'column',
        alignItem: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    header: {
        color: 'black',
        fontWeight: 'bold',
        margin: '.5rem 0'
    },
     formHelperText: {
        color: 'brown'
    }
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
  
  export default function FormOne(props) {
    const classes = useStyles(props);
    const { color, ...other } = props;
    const helperTestClasses = helperTextStyles();



    return (
        <Grid container className={classes.container}>
            <Grid item xs={10} sm={6} md={3} lg={3}>
                <Paper elevation="5" className={classes.paper}>
                    <Box  className={classes.box}>
                        <Box align="center">
                            <StarHalfIcon color="primary" align="center" style={{ fontSize: 45 }} />
                        </Box>
                        <Typography variant="h5" className={classes.header}>Create Account</Typography>
                    <Formik
                        initialValues={{
                        name: '',
                        email: '',
                        password: '',
                        }}

                        validate = {values => {
                            const errors = {};

                            if(!values.name) {
                                errors.name = 'Required';
                            }

                            if(!values.password) {
                                errors.password = 'Required';
                            }

                            if (!values.email) {
                                errors.email = 'Required';
                            } 
                            else if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
                            ) {
                                errors.email = 'Invalid email address';
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
                            <Form className={classes.form} >
                                <Field
                                    component={TextField}
                                    type="name"
                                    label="Name"
                                    name="name"
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
                                    name="email"
                                    type="email"
                                    label="Email"
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
                                <Field
                                    component={TextField}
                                    type="password"
                                    label="Password"
                                    name="password"
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

                                {isSubmitting && <LinearProgress />}
                                <br />

                                <Button
                                    variant="contained"
                                    disabled={isSubmitting}
                                    onClick={submitForm}
                                    className={classes.button}
                                    color="red"
                                    >
                                    Create Your Account
                                </Button>
                            </Form>
                        )}
                    </Formik>
                    </Box>
                </Paper>
            </Grid>
        </Grid>
    );
  }