import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActionArea from '@material-ui/core/CardActionArea'
import Paper from '@material-ui/core/Paper'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  card: {
    maxWidth: 315,
    paddingTop: `${theme.spacing.unit * 2}px`,
    paddingRight: `${theme.spacing.unit * 2}px`,
    paddingLeft: `${theme.spacing.unit * 2}px`,
    margin: '10px'
  },
  media: {
    objectFit: 'cover',
  },
  cardcontent: {
    paddingBottom: '0px'
  }
})

class DocumentThumbnail extends Component {
  render() {
    const { classes } = this.props
    return (
      <Card className={classes.card}>
        <CardActionArea>
          <Paper>
          <CardMedia
            component="img"
            className={classes.media}
            alt="Document Thumbnail"
            height="140"
            image="samplethumbnail.png"
          />
          </Paper>
          <CardContent className={classes.cardcontent}>
            <Typography variant="h5">
              Document Title
            </Typography>
            <Typography component="p">
              Description goes here.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Details
          </Button>
        </CardActions>
      </Card>
    )
  }
}

export default withStyles(styles)(DocumentThumbnail)
