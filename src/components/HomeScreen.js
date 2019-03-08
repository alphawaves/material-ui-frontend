import React from 'react'
import CertchainLogo from './CertchainLogo'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'

const styles = theme => ({
    logo: {
        marginTop:theme.spacing.unit * 5,
        borderRadius: '50%',
        padding: 75,
        backgroundColor: theme.palette.primary.main,
    },
    svgicon: {
        transform: 'scale(3.0)',
    },
    info: {
        marginTop:theme.spacing.unit * 8,
        marginBottom:theme.spacing.unit * 8, 
    },
    button: {
        marginLeft: theme.spacing.unit * 4,
    },
})

class HomeScreen extends React.Component {
    render() {
        const { classes } = this.props
        return(
                <React.Fragment>
                    <Grid container className={classes.setheight} alignContent="center" justify="center">
                    <Avatar className={classes.logo}>
                            <CertchainLogo  className={classes.svgicon} />
                            </Avatar>
                    </Grid>
                    <Grid container className={classes.setheight} alignContent="center" justify="center">
                        <Grid item className={classes.content} xs={6}>
                        <div className={classes.info}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                        </div>
                        </Grid>
                    </Grid>
                    <Grid container className={classes.setheight} alignContent="center" justify="center">
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={() => {this.props.history.push('/login')}}>
                        Login
                    </Button>
                    <Button
                        className={classes.button}
                        color="primary"
                        variant="contained"
                        onClick={() => {this.props.history.push('/register')}}>
                        Register
                    </Button>
                </Grid>
                </React.Fragment>
        )
    }
}

export default withStyles(styles)(HomeScreen)

