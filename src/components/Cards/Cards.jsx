import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import styles from "./Cards.module.css";
import CountUp from 'react-countup'

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) {
      return 'Loading...';
    } 

    return(
        <div className={styles.container}>
        <Grid container spacing={3} justify="center">
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Infected
              </Typography>
              <Typography variant="h5" component="h2">
                <CountUp start={0} end={confirmed.value} duration={2.75} separator="," />
              </Typography>
              <Typography color="textSecondary">
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2" component="p">
                Number of active cases of COVID-19.
              </Typography>
            </CardContent>
          </Grid>
          
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Recovered
              </Typography>
              <Typography variant="h5" component="h2">
                <CountUp start={0} end={recovered.value} duration={2.75} separator="," />
              </Typography>
              <Typography color="textSecondary">
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2" component="p">
                Number of recoveries from COVID-19.
              </Typography>
            </CardContent>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Deaths
              </Typography>
              <Typography variant="h5" component="h2">
                <CountUp start={0} end={deaths.value} duration={2.75} separator="," />
              </Typography>
              <Typography color="textSecondary">
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2" component="p">
                Number of deaths caused by COVID-19.
              </Typography>
            </CardContent>
      </div>
    );
  };

export default Cards