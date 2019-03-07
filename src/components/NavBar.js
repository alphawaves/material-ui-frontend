import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import CertchainLogo from './CertchainLogo'
import Link from '@material-ui/core/Link'

const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      height: 80,
    },
  },
  title: {
    display: 'none',
    margin: 0,
    textTransform: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto'
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 300,
      height: 30,
      '&:focus': {
        width: 380,
      },
    },
  },
  button: {
    marginLeft: theme.spacing.unit * 4,
  },
  certchainlogo: {
    transform: 'scale(1.3)',
    marginRight: theme.spacing.unit * 1.5
  },
  certchainlink: {
    '&:hover': {
     textDecoration: 'none',
     color: '#fffff'
    },
  }
});

class NavBar extends React.Component {
  state = {
    query: ''
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push({
      pathname: '/searchResult',
      state: {
        query: this.state.query
      }
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            {/* <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer">
              <MenuIcon />
    </IconButton> */}
            <Button onClick={() => {this.props.history.push('')}} color="inherit">
              <CertchainLogo className={classes.certchainlogo} fontSize="large" />
              <Typography className={classes.title} variant="h5" color="inherit" noWrap>
                Certchain
              </Typography>
            </Button>
            <Button className={classes.button} color="inherit" onClick={() => {this.props.history.push('/login')}}>Login</Button>
            <Button className={classes.button} color="inherit" onClick={() => {this.props.history.push('/register')}}>Register</Button>
            <Button className={classes.button} color="inherit" onClick={() => {this.props.history.push('/dashboard')}}>Dashboard</Button>
            <div className={classes.grow} />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <form onSubmit={this.handleSubmit}>
              <InputBase
                name="query"
                value={this.state.query}
                onChange={this.handleChange}
                placeholder="Search..."
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput
                }} 
                />
              </form>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);