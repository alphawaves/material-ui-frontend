import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core'
import { Button, Avatar, Typography } from '@material-ui/core'
import { Upload } from 'mdi-material-ui'
import LinearDeterminate from './LinearDeterminate'

const styles = theme => ({
    dialog: {
        width:'600px'
    },
    avatar: {
      color: '#fff',
      margin: 'auto',
      marginTop: theme.spacing.unit * 3,
      marginBottom: theme.spacing.unit * 3,
      backgroundColor: theme.palette.primary.main,
      width: '50px',
      height: '50px'
    },
    contenttext: {
      marginBottom: theme.spacing.unit * 3,
      textAlign:'center'
    },
    button: {
      marginBottom: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3
    }
})

class UploadDialog extends Component {
  
  state={}

  handleClose = () => {
      this.props.onClose()
  }

  render() {
    const { classes, onClose, responseMessage, ...other } = this.props
    return (
      <Dialog onClose={this.handleClose} {...other}>
        <DialogTitle>
          <Avatar sizes="medium" className={classes.avatar}>
              <Upload />
          </Avatar>
        </DialogTitle>
        <DialogContent className={classes.dialog}>
            <DialogContentText className={classes.contenttext}><Typography variant="h5">{responseMessage}</Typography></DialogContentText>
            <LinearDeterminate />
        </DialogContent>
        <DialogActions>
            <Button onClick={this.handleClose} className={classes.button} color="primary" size="large">OK</Button>
        </DialogActions>
      </Dialog>
    )
  }
}

export default withStyles(styles)(UploadDialog)
