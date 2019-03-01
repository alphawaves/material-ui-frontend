import React, { Component } from 'react'
import DocumentThumbnail from './DocumentThumbnail'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = theme => ({
    paper: {
        margin: theme.spacing.unit * 3,
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    thumbnailarea: {
        paddingTop: theme.spacing.unit * 2,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignContent: 'space-around'
    },
    h5: {
        color: theme.palette.primary.light,
        fontSize: '25px',
    }
})

class DocumentCategory extends Component {
  render() {
    const { classes, category } = this.props
    return (
      <Paper className={classes.paper}>
          <Typography variant="h5" classes={{h5: classes.h5}}>{category} Documents</Typography>
          <div className={classes.thumbnailarea}>
            <DocumentThumbnail />
            <DocumentThumbnail />
            <DocumentThumbnail />
            <DocumentThumbnail />
          </div>
      </Paper>

    )
  }
}

export default withStyles(styles)(DocumentCategory)
