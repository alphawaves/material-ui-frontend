import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid'
import ButtonBase from '@material-ui/core/ButtonBase'
import EntityTabBar from './EntityTabBar'
import EntityCard from './EntityCard'
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography'
import classNames from 'classnames'

const styles = theme => ({
    root: {
     marginLeft: theme.spacing.unit * 3,
     marginRight: theme.spacing.unit * 3,
     flexGrow: 1
    },
    paper: {
     padding: theme.spacing.unit * 2
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    documentcard: {
        //display:'flex',
        //justifyContent:'space-around'
    },
    entityarea: {
        //display: 'flex',
        //justifyContent: 'space-around',
        //height: '75%'
    },
    buttonbase: {
        //width:'40%',
        //marginRight: theme.spacing.unit * 3
    },
    documentdetail: {
        //height:'100%'
    }

})

class SearchResultDocument extends Component {
  render() {
    const { classes } = this.props
    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={16}>
                    <Grid item xs={5}>
                        <Paper className={classNames(classes.paper, classes.documentcard)}>
                            <Grid container spacing={16}>
                                <Grid item xs={4}>
                                    <ButtonBase>
                                        <img className={classes.img} alt="complex" src="samplethumbnail.png"></img> 
                                    </ButtonBase>
                                </Grid>        
                                <Grid item xs={6}>
                                    <Typography variant="h6">Document Title</Typography>
                                    <Typography variant="p">Document details will go here.</Typography>
                                </Grid>
                            </Grid>
                        </Paper>  
                    </Grid>
                    <Grid item xs={7}>
                        <Grid container spacing={16}>
                            <Grid item xs={6}><EntityCard type="Issuer" /></Grid>
                            <Grid item xs={6}><EntityCard type="Receiver" /></Grid>    
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
  }
}

SearchResultDocument.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchResultDocument)

{/* <Paper className={classNames(classes.paper, classes.documentcard)}>
                            
                            <ButtonBase className={classes.buttonbase}>
                                <img className={classes.img} alt="complex" src="samplethumbnail.png"></img> 
                            </ButtonBase>
                            
                            <div>
                                <Paper className={classes.paper, classes.documentdetail}>
                                    <Typography variant="h6">Document Title</Typography>
                                    <Typography variant="p">Document details will go here.</Typography>
                                </Paper>
                            </div>
                            
                        </Paper>    */}

