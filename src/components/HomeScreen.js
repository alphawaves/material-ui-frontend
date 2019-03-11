import React from 'react'
import CertchainLogo from './CertchainLogo'
import { withStyles, withTheme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
    title: {
        paddingLeft: theme.spacing.unit * 4
    },
    svgicon: {
        transform: 'scale(9.0)',
        transformOrigin: 'center center',
        [theme.breakpoints.down(900 + theme.spacing.unit * 3 * 2)]: {
            display: 'none'
        },
    },
    info: {
        marginTop:theme.spacing.unit * 8,
        marginBottom:theme.spacing.unit * 8, 
    },
    button: {
        marginLeft: theme.spacing.unit * 4,
    },
    border: {
        border: '1px solid black'
    },
    jumbotron: {
        marginTop: theme.spacing.unit * 20,
        flexDirection: 'column',
        alignItems: 'center',
        [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
            flexDirection: 'row',
            alignItems: 'none'      
        },
    }
})

class HomeScreen extends React.Component {
    render() {
        const { classes, theme } = this.props
        return(
                <React.Fragment>
                
                <Grid container justify="center" className={classes.jumbotron}>
                    <Grid container justify="center" alignContent="center" className={classes.logo} item xs={2}>
                        <CertchainLogo
                        color1={theme.palette.primary.light}
                        color2={theme.palette.primary.main}
                        className={classes.svgicon} />
                    </Grid>
                    <Grid container className={classes.title} direction="column" item xs={4}>
                        <Grid item xs={7}>
                            <Typography color="secondary" variant="h1"> Certchain </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h5" color="primary">
                                Certificate management made dead simple.
                            </Typography>
                        </Grid>
                    </Grid>    
                </Grid>
                   

                


                {/* features */}
                {/* <Grid container justify="center">
                    Features Icon
                </Grid>
                <Grid container justify="center">
                    <Typography variant="h3">Features</Typography>
                </Grid> */}
                </React.Fragment>
        )
    }
}

export default withTheme()(withStyles(styles)(HomeScreen))

{/* <Grid container className={classes.jumbotron}>
<Grid className={classes.border} justify="center" container item xs={5} spacing={16}>
        <Grid item xs={9}></Grid>
        <CertchainLogo
        color1={theme.palette.primary.light}
        color2={theme.palette.primary.main}
        className={classes.svgicon} />
</Grid>
<Grid container direction="column" className={classes.border} item xs={7} spacing={16}>
    <Grid item xs={7}>
        <Typography color="secondary" variant="h1"> Certchain </Typography>
    </Grid>
    <Grid item>
        <Typography variant="h5" color="primary">
            Certificate management made dead simple.
        </Typography>
    </Grid>
</Grid> */}

