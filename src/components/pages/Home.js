import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import yogaPoseImage from '../../assets/different-yoga-poses.jpg';
import Navbar from '../layouts/NavBar';
const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    overflow: 'hidden',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      height: 'auto',
    },
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      backgroundImage: `url(${yogaPoseImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      zIndex: '-1',
      animation: '$animate 30s linear infinite',
    },
  },
  textContainer: {
    background: 'rgba(255, 255, 255, 0.8)',
    padding: theme.spacing(4),
    borderRadius: theme.shape.borderRadius,
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto',
  },
  title: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
  },
  subtitle: {
    marginBottom: theme.spacing(4),
  },
  button: {
    marginTop: theme.spacing(2),
  },
  '@keyframes animate': {
    '0%': {
      transform: 'translateX(0)',
    },
    '100%': {
      transform: 'translateX(-100%)',
    },
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div>
         <Navbar />
  
    <div className={classes.root}>
       
      <div className={classes.textContainer}>
        <Typography variant="h3" className={classes.title}>
          Welcome to our Yoga Website
        </Typography>
        <Typography variant="h5" className={classes.subtitle}>
          Discover the benefits of yoga and improve your health and wellbeing.
        </Typography>
        <Typography variant="body1">
          Our website offers a variety of yoga asanas for all levels, from beginners to advanced practitioners.
          Practicing yoga can help improve your flexibility, strength, balance, and mental clarity.
        </Typography>
        <Button variant="contained" color="primary" className={classes.button}>
          Explore Asanas
        </Button>
      </div>
    </div>
    </div>
  );
};

export default Home;

