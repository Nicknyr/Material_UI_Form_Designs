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

const useStyles = makeStyles((theme) => ({
    root: {
        background: theme.palette.primary.main,
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
        width: 'auto',
        background: theme.palette.primary.main,
        //border: '10px solid red',
        borderRadius: '20px'
    },
    split: {
        background: '#FFF',
        height: '70vh',
        //margin: '3rem',
        display: 'flex'
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
        width: '70%',
        color: '#FFF',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    formContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        //background: 'red',
        color: '#FFF'
    }
  }));
  
  export default function FormContainer() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
        <Grid container className={classes.container}>
            <Grid item xs={12} md={5} className={[classes.split, classes.formContainer]}>
                <LargeForm />
            </Grid>
            <Grid item xs={12} md={5} className={[classes.split, classes.image]}>
                <Box className={classes.overlay} borderRadius="50%">
                    <Box>
                        <img src={Logo} className={classes.logo} height="300" width="300"/>
                    </Box>
                    <Typography variant="body1" style={{ textAlign: 'center', lineHeight: '1.7' }} >
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In ornare quam viverra orci sagittis eu volutpat odio.
                    </Typography>
                </Box>
            </Grid>
        </Grid>
        </div>
    );
  }