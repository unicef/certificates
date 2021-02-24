import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

const styles = theme => ({
  layout: {
    padding: theme.spacing.unit * 3
  }

});

function Blog (props) {
  const { classes } = props;
  return (
    <React.Fragment>
      <CssBaseline />
      <Paper className = {classes.layout}>
          <Typography variant="h6" color="inherit">
              <p>28 February 2019, Astana, Kazakhstan: On this week, UNICEF Kazakhstan and the Center for Emergency Situations and Disaster Risk Reduction, from the Government of Kazakhstan, conducted a training seminar on how to integrate drones as part of emergency preparedness and response efforts.</p>
              <p>Kazakhstan, a large country with diverse terrain, is vulnerable to nearly every type of natural disaster: floods, extreme temperature events, earthquakes, landslides, mudslides, storms and wildfires. Every year, close to 4,000 emergencies cause 3,000-5,000 injuries and claim several dozen lives. The changing climate also affects the rise of weather-related disasters.</p>
              <p>All participants travelled to the drone corridor in the Almaty province of Kazakhstan for a second round of testing, following initial tests. Drones were used in search and rescue real-life scenarios and for forest wildfire location and mapping in mountainous terrains. Four companies from Kazakhstan (
                <Link href={'http://www.kazuav.kz/'}>KazUAV</Link>, 
                <Link href={'http://uavsg.kz/'}> UAV Service Group</Link>, 
                <Link href={'https://altf4.kz/en'}> AltF4</Link>, 
                UAV Group) came to the Zhambyl district of Almaty province to show how their drones perform and can help save lives.</p>
              <p>UNICEF Kazakhstan issued certificates of recognition to these drone companies for their participation. The certificates were issued in the Ethereum blockchain, ensuring the authenticity of the documents.</p>
          </Typography>
      </Paper>            
    </React.Fragment>
  );
}

Blog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Blog);