import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import SearchIcon from '@material-ui/icons/Search'
import InputBase from '@material-ui/core/InputBase'
import { fade } from '@material-ui/core/styles/colorManipulator'

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
      },
      title: {
        display: 'none',
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
        width: 'auto',
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
          width: 120,
          '&:focus': {
            width: 200,
          },
        },
      },


})

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

  handle
  render() {
  const { classes } = this.props;
  return (
    <div>
      <AppBar position="static">
          <Toolbar>
            <Typography className={classes.title}variant="title" color="inherit">
                Certchain
            </Typography>
            <Button color="inherit" onClick={() => {this.props.history.push('/login')}}>Login</Button>
            <Button color="inherit" onClick={() => {this.props.history.push('/register')}}>Register</Button>
            <Button color="inherit" onClick={() => {this.props.history.push('/dashboard')}}>Dashboard</Button>
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <form onSubmit={this.handleSubmit} >
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
  )
  }
}

export default withStyles(styles)(NavBar)
