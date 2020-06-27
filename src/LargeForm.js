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
import LockIcon from '@material-ui/icons/Lock';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import InputAdornment from '@material-ui/core/InputAdornment';
import Logo2 from './assets/logo2.png';
import ScrollAnimation from 'react-animate-on-scroll';



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
            border: '#F46197'   //theme.palette.primary.main.dark
        },
    },
    button: {
        background: theme.palette.primary.main, 
        opacity: '.9',
        color: 'snow',
        fontWeight: 'bolder',
        width: '100%',

        '&:hover':{
            background:  '#F46197', //theme.palette.primary.main,
            opacity: '1'
        }
    },
    header: {
        color: 'black',
        fontWeight: 'bold',
        margin: '.5rem 0'
    },
    // HR section above social media icons //
    separator: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '.5rem 0'
    },
    hr: {
        width: '150px',
        padding: '0',
        marginLeft: '0.5rem',
        marginRight: '0.5rem',
        borderTop: '1px',
        borderColor: '#E5E5E5'
    },
    fontAwesomeIcons: {
        margin: '0 0.7rem',
        color: 'black',

        '&:hover': {
            color: '#F46197'
        }
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
  
  export default function LargeForm() {
    const classes = useStyles();
    const helperTestClasses = helperTextStyles();

    return (
        <Grid container >
            <Grid item xs={12}>
                <ScrollAnimation animateIn="fadeIn" delay="1000" animateOnce>
                    <Box align="center">
                        <Typography variant="h6"> Welcome to </Typography>
                        <img src={Logo2} height="60"></img>
                        <br></br>
                        <br></br>
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
                                    //label="Username"
                                    fullWidth="true"
                                    variant="outlined"
                                    size="small"
                                    margin="dense"
                                    color="main"
                                    required
                                    placeholder="Username"
                                    id="input-with-icon-adornment"
                                    FormHelperTextProps={{ classes: helperTestClasses }}
                                    InputProps={{
                                        className: classes.formInput,
                                        startAdornment: <InputAdornment position="start">
                                                            <AccountCircleIcon />
                                                        </InputAdornment>
                                    }}
                                />
                                <br />
                                <Field
                                    component={TextField}
                                    name="password"
                                    type="password"
                                    //label="Password"
                                    fullWidth="true"
                                    variant="outlined"
                                    size="small"
                                    margin="dense"
                                    id="outlined-error"
                                    color="main"
                                    required
                                    placeholder="Password"
                                    id="input-with-icon-adornment"
                                    FormHelperTextProps={{ classes: helperTestClasses }}
                                    InputProps={{
                                        className: classes.formInput,
                                        startAdornment: <InputAdornment position="start">
                                                            <LockIcon />
                                                        </InputAdornment>
                                    }}
                                />
                                <br></br>
                                {isSubmitting && <LinearProgress />}

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
                                <Link href="#" style={{ color: '#F46197' }}> Sign Up</Link>
                            </Typography>
                            <Box className={classes.separator}>
                                <hr className={classes.hr}></hr>Or<hr className={classes.hr}></hr>
                            </Box>
                            <Typography variant="body1" style={{ marginBottom: '1rem'}}>Continue with social media</Typography>
                            <Link href="#">
                                <FontAwesomeIcon icon={['fab', 'facebook']} size="2x" className={classes.fontAwesomeIcons} />
                            </Link>
                            <Link href="#">
                                <FontAwesomeIcon icon={['fab', 'twitter']} size="2x" className={classes.fontAwesomeIcons} />
                            </Link>
                            <Link href="#">
                                <FontAwesomeIcon icon={['fab', 'github']} size="2x" className={classes.fontAwesomeIcons} />
                            </Link>
                        </Box>
                    </Box>
                </ScrollAnimation>
            </Grid>
        </Grid>
    );
  }