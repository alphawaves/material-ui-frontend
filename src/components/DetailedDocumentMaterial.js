import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import EntityCard from './EntityCard'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import classNames from 'classnames'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'
import Info from '@material-ui/icons/Info'
import Description from '@material-ui/icons/Description'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
    stylizedbackground: {
        background: `linear-gradient(155deg, ${theme.palette.common.white} 50%, ${theme.palette.primary.main})`,
        height: '89vh',
        width: '100vw'
    },
    root: {
        margin: theme.spacing.unit * 3
    },
    img: {
        maxWidth: '100%',
        maxHeight: '100%',
    },
    documentthumbnail: {
        height:'100%'
    },
    paper: {
        padding: theme.spacing.unit * 3
    },
    cardheader: {
        height: '100px',
        border: `4px solid ${theme.palette.primary.light}`,
        borderBottom: `1px solid ${theme.palette.primary.light}`,
    },
    cardheaderavatar: {
        transform: 'scale(1.5)',
        marginLeft: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit * 5,
    },
    cardheadertitle: {
        fontSize:'230%'
    },
    avatar: {
        backgroundColor: theme.palette.primary.main
    },
    cardheaderaction: {
        marginTop:'13px',
        marginLeft:'15px'
    },
    button: {
        marginRight: '20px'
    },
    cardcontent: {
        border: `4px solid ${theme.palette.primary.light}`,
        borderTop: `1px solid ${theme.palette.primary.light}`,
    }

})

class DetailedDocumentMaterial extends Component {

   handleClick() {
       console.log("Download")
   } 
  render() {
    const { classes } = this.props
    return (
      <Card className={classNames(classes.card, classes.root)}>
        <CardHeader
            avatar={
                <Avatar aria-label="Document" className={classes.avatar}>

                    {/* <Icon className={classNames('fa fa-file-alt')} /> */}
                    <Description />
                    
                </Avatar>
            }
            action={
                <div>
                <Button className={classes.button} size="medium" color="primary" variant="contained" onClick={() => this.handleClick()}><Icon color="disabled" className={classNames('fa fa-file-alt')} />Download</Button>
                <Button className={classes.button} size="medium" color="primary" variant="outlined">Copy Hash</Button>
                </div>
            }
            title="Document title"
            classes={{
                root:classes.cardheader,
                title:classes.cardheadertitle,
                avatar:classes.cardheaderavatar,
                action:classes.cardheaderaction
            }}
        />
        <CardContent classes={{root: classes.cardcontent}}>
        <div id="stylized" className={classes.root}>
        <Grid container spacing={16}>
            <Grid item xs={6} className={classes.documentthumbnail}>
                <Paper className={classes.paper}>
                    <img className={classes.img} alt="complex" src="samplethumbnail.png"></img>
                </Paper> 
            </Grid>
            <Grid item xs={6}>
                <Grid container spacing={16} direction="column" justify="space-evenly">
                    <Grid item>
                        <Grid container spacing={16}>
                            <Grid item xs={1}>
                                <Info color="disabled" fontSize="large" />
                            </Grid>
                            <Grid item xs={11}>
                                <Typography variant="p">Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo <i className="fas fa-file-alt">file goes here</i>consequat. Duis aute irure dolor in reprehenderit in
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                                anim id est laborum.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <EntityCard type="Issuer" />
                        <EntityCard type="Receiver" />                        
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
      </div>
        </CardContent>
      </Card>
    )
  }
}

export default withStyles(styles)(DetailedDocumentMaterial)

{/* <Grid container spacing={16} direction="column">
                            <Grid item xs={4}><Paper>Hello</Paper></Grid>
                            <Grid item xs={4}><Paper>Hello</Paper></Grid>
                            <Grid item xs={4}><Paper>Hello</Paper></Grid>
                        </Grid> */}
