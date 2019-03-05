import { withStyles } from "@material-ui/core";
import React from 'react'
import { Copyright } from 'mdi-material-ui'

const styles = theme => ({
    footer: {
        position: 'absolute',
        bottom:0,
        display: 'flex',
        justifyContent: 'center',

    },
    contactUs: {
        marginLeft: theme.spacing.unit * 3,
        color: theme.palette.primary.main
    }
})

class Footer extends React.Component {
    render() {
        const { classes } = this.props
        return (
            <footer className={classes.footer}>
                <div class="copyright">
                    <p><Copyright /> 2019 - Certchain</p>
                </div>
                <div class="contactus" class="social">
                    <a href="#">Contact Us</a>
                    {/* <a href="#" class="face">f</a>
                    <a href="#" class="tweet">t</a>
                    <a href="#" class="linked">in</a> */}
                </div>
            </footer>
        )
    }
}

export default withStyles(styles)(Footer)