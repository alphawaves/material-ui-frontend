import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { TextField } from '@material-ui/core';
import { Upload, Publish} from 'mdi-material-ui'
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Input } from '@material-ui/core'
import UploadDialog from './UploadDialog'

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 800,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    marginBottom: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  margin: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2
  },
  submit: {
    //marginTop: theme.spacing.unit * 3,
  },
});

class UploadForm extends React.Component {

  state = {
    uploadType: 'upload',
    data: {
        documentTitle: "",
        description: "",
        receiverAddress: "",
        selectedFile: null,
        uploadProgress: 0,
        responseMessage: "Uploading document..."
    },
    dialogOpen: false
  };

  handleChange = e => {
      this.setState({
          [e.target.name]: e.target.value
      })
  }

  handleClose = () => {
      this.setState({ dialogOpen: false})
  }

  handleSubmit = (e) => {
      e.preventDefault()
      this.setState({ dialogOpen: true })
  }
  
  render() {
   const { classes } = this.props;
   return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        {/* <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar> */}
        <Typography component="h1" variant="h5">
          Upload Document
        </Typography>
        <form className={classes.form}>
          <input
            accept="application/pdf" 
            className={classes.margin} 
            id="raised-button-file" 
            type="file" 
          /> 
          <TextField
            id="title"
            label="Document Title:"
            name="title"
            className={classes.textField}
            value={this.state.title}
            onChange={this.handleChange}
            margin="normal"
            variant="outlined"
            fullWidth
            autoFocus
          />
          <TextField
            id="description"
            label="Description"
            name="description"
            className={classes.textField}
            value={this.state.description}
            onChange={this.handleChange}
            margin="normal"
            variant="outlined"
            fullWidth
            multiline
            rows="5"
          />
          <FormControl  className={classes.margin} component="fieldset">
            <FormLabel component="legend">Would you like to issue the document at this time?</FormLabel>
            <RadioGroup
                row
                aria-label="Aria label"
                name="uploadType"
                value={this.state.uploadType}
                onChange={this.handleChange}
            >
                <FormControlLabel value="uploadAndIssue" control={<Radio color="primary"/>} label="Yes" />
                <FormControlLabel value="upload" control={<Radio color="primary" />} label="No" />
            </RadioGroup>
          </FormControl>
          { (this.state.uploadType === "uploadAndIssue") && <TextField
            id="receiverAddress"
            label="Receiver's Address"
            name="receiverAddress"
            className={classes.textField}
            value={this.state.receiverAddress}
            onChange={this.handleChange}
            margin="normal"
            variant="outlined"
            fullWidth
          />}
        
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={this.handleSubmit}
          >
            {this.state.uploadType === "upload" ? <Upload /> : <Publish />}
            {this.state.uploadType === "upload" ? "Upload" : "Upload and Issue"}
          </Button>
        </form>
      </Paper>
      <UploadDialog
        open={this.state.dialogOpen}
        onClose={this.handleClose}
        responseMessage={this.state.data.responseMessage}
      />
    </main>
  );
}
}

UploadForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UploadForm);
