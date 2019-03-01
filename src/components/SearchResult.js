import React, { Component } from 'react'
import SearchResultDocument from './SearchResultDocument'
import CssBaseline from '@material-ui/core/CssBaseline';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  title: {
    marginLeft: theme.spacing.unit*3
  }
})

class SearchResult extends Component {
  render() {
    const { classes } = this.props
    console.log(this.props.location.state.query)
    return (
      <div>
        <CssBaseline />
        <h1 className={classes.title}>Search Result</h1>
        <SearchResultDocument />
      </div>
    )
  }
}

export default withStyles(styles)(SearchResult)


