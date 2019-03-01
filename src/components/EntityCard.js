import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    //display: 'flex',
    //flexDirection: 'column'
   },
   h5: {
     color: theme.palette.primary.main
   }
})

class EntityCard extends Component {
  render() {
    const { classes, type } = this.props
    return (
      <Paper className={classes.paper}>
        <Typography variant="h6" classes={{h6: classes.h5}}>{type}</Typography>
        <Typography variant="body1">Name goes here</Typography>
        <Typography variant="body1">Website goes here</Typography>
        <Typography variant="body1">Address goes here</Typography>
        <Typography variant="body1">Blockchain address goes here</Typography>
      </Paper>
    )
  }
}

export default withStyles(styles)(EntityCard)
