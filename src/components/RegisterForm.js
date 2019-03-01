import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { TextField } from '@material-ui/core';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    marginBottom: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

//name, email, password, confirmpass, website, location

class RegisterForm extends React.Component {

  state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      website: '',
      location: '',
      showPassword: false
  }

  handleChange = e => {
      this.setState({
          [e.target.name]: e.target.value
      })
  }

  handleClickShowPassword = e => {
      this.setState( prevState => ({
            showPassword: !prevState.showPassword
        })
      )
  }
  
  render() {
   const { classes } = this.props;
   return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <form className={classes.form}>
          <TextField
            id="name"
            label="Name"
            name="name"
            className={classes.textField}
            value={this.state.name}
            onChange={this.handleChange}
            margin="normal"
            variant="outlined"
            fullWidth
            autoFocus
          />
          <TextField
            id="email"
            label="Email"
            name="email"
            className={classes.textField}
            value={this.state.email}
            onChange={this.handleChange}
            margin="normal"
            variant="outlined"
            fullWidth
          />
          <TextField
            id="password"
            label="Password"
            name="password"
            className={classes.textField}
            value={this.state.password}
            onChange={this.handleChange}
            margin="normal"
            variant="outlined"
            type={this.state.showPassword? 'text' : 'password'}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="Toggle password visibility"
                        onClick={this.handleClickShowPassword}
                      >
                        {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                )
            }}
            fullWidth
          />
          <TextField
            id="confirmPassword"
            label="Confirm Password"
            name="confirmPassword"
            className={classes.textField}
            value={this.state.confirmPassword}
            onChange={this.handleChange}
            margin="normal"
            variant="outlined"
            type={this.state.showPassword? 'text' : 'password'}
            fullWidth
          />
          <TextField
            id="website"
            label="Website"
            name="website"
            className={classes.textField}
            value={this.state.website}
            onChange={this.handleChange}
            margin="normal"
            variant="outlined"
            fullWidth
          />
          <TextField
            id="location"
            label="location"
            name="location"
            className={classes.textField}
            value={this.state.location}
            onChange={this.handleChange}
            margin="normal"
            variant="outlined"
            fullWidth
          />
        
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Register
          </Button>
        </form>
      </Paper>
    </main>
  );
}
}

RegisterForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RegisterForm);
