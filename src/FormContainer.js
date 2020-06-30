import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { fade, makeStyles, ThemeProvider } from "@material-ui/core/styles";
import { useChangeTheme } from "./Theme";
import { Button, LinearProgress } from '@material-ui/core';
import Background from './assets/motion.png';
import Form1 from './Form1';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import { borders } from '@material-ui/system';
import LargeForm from './LargeForm';
import Logo from './assets/logo.svg';
import Logo2 from './assets/logo2-white.png';
import ScrollAnimation from 'react-animate-on-scroll';
import Blob from './assets/blob.svg';
import Blob1 from './assets/blob1.svg';
import Blob2 from './assets/blob2.svg';
import { positions } from '@material-ui/system';

const useStyles = makeStyles((theme) => ({
    root: {
        background: '#F46197',
        height: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },  
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        borderRadius: '20px',
        zIndex: '100',

        [theme.breakpoints.down('xs')]: {
            backgroundColor: 'red',
            flexDirection: 'column',
            marginTop: '10rem',
            marginBottom: '10rem'
          },
    },
    split: {
        background: '#FFF',
        height: '500px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        overflow: 'auto',
        padding: '1.5rem'
    },
    image: {
        background:`linear-gradient(
            rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0.5)
        ),url(${Background})`,
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'center'
    },
    overlay: {
        height: '100%',
        width: '100%',
        color: '#FFF',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

        [theme.breakpoints.up('sm')]: {
            width: '70%'
          },
    },
    formContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    logo: {
        height: '50px',

        [theme.breakpoints.up('md')]: {
            height: '70px'
          },
    }
  }));
  
  export default function FormContainer() {
    const classes = useStyles();

    return (
    <Grid container className={classes.root}>
        <Grid item xs={11} md={10} xl={6}>
            <Paper elevation="10" className={classes.container}>
                <Grid item xs={12}  className={classes.split} >
                    <LargeForm />
                </Grid>
                <Grid item xs={12}  className={[classes.split, classes.image]}>
                    <Box className={classes.overlay} borderRadius="50%" zIndex="100">
                        <ScrollAnimation animateIn="fadeIn" delay="1000" animateOnce>
                            <Box align="center">
                                <img src={Logo2} className={classes.logo}/>
                            </Box>
                            <Typography variant="body1" style={{ textAlign: 'center', lineHeight: '1.7' }} >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Typography>
                        </ScrollAnimation>
                    </Box>
                </Grid>
            </Paper>
        </Grid>
    </Grid>
    );
  }