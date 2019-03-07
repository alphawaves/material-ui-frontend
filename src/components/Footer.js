import { withStyles } from "@material-ui/core";
import React from 'react'

const styles = theme => ({
    footer: {
        position: 'fixed',
        left: 0,
        textAlign:'center',
        width: '100%',
        bottom: 0,
        display: 'flex',
        justifyContent: 'center',
    },
    contactus: {
        marginLeft: theme.spacing.unit * 1,
        color: theme.palette.primary.main
    },
    link: {
        color: '#000000',
        textDecoration: 'underline',
        '&:visited': {
            color: '#000000',
        },
        '&:active': {
            color: '#000000',
        },
        '&:hover': {
            color: '#000000',
        },
    }
})

class Footer extends React.Component {
    render() {
        const { classes } = this.props
        return (
            <footer className={classes.footer}>
                <div class="copyright">
                    <p>© 2019 - Certchain</p>
                </div>
                <div className={classes.contactus}>
                    <a href="" className={classes.link}>Contact Us</a>
                    {/* <a href="#" class="face">f</a>
                    <a href="#" class="tweet">t</a>
                    <a href="#" class="linked">in</a> */}
                </div>
            </footer>
        )
    }
}

export default withStyles(styles)(Footer)