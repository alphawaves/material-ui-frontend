import React from 'react'
import { withStyles, TextField, Button } from '@material-ui/core'

const styles = theme => ({
    form: {
        width: '70%',
        margin: 'auto',
        marginTop: theme.spacing.unit * 3
    }
})

class IssueForm extends React.Component {

    state = {
        receiverAddress: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({ dialogOpen: true })
    }

    render() {
        const { classes } = this.props
        return(
            <form className={classes.form}>
                <TextField
                    id="receiverAddress"
                    label="Receiver's Address"
                    name="receiverAddress"
                    className={classes.textField}
                    value={this.state.receiverAddress}
                    onChange={this.handleChange}
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    autoFocus
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={this.handleSubmit}>
                    Issue
                </Button>
            </form>

        )
    }
}

export default withStyles(styles)(IssueForm)