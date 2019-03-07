import React from 'react'
import CertchainLogo from './CertchainLogo'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'

const styles = theme => ({
    root: {
        //width: '50%',
        //margin: 'auto'
        height: '80vh'
    },
    logo: {
        marginTop:theme.spacing.unit * 5,
        borderRadius: '50%',
        padding: 75,
        backgroundColor: theme.palette.primary.main,
    },
    logocontainer: {
        display:'flex',
        flexDirection:'column',
        justifyContent:'center'
    },
    svgicon: {
        transform: 'scale(3.0)',
    },
    button: {
        marginLeft: theme.spacing.unit * 4,
    },
})

class HomeScreen extends React.Component {
    render() {
        const { classes } = this.props
        return(
                <Grid className={classes.root} container direction="column" alignItems="center" justify="space-around">
                    <Grid item xs={4}>
                        <div >
                            <Avatar className={classes.logo}>
                            <CertchainLogo  className={classes.svgicon} />
                            </Avatar>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
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
                    <Grid item xs={2}>
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
                    </Grid>
        )
    }
}

export default withStyles(styles)(HomeScreen)

