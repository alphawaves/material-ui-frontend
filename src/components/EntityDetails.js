import React from 'react'
import { withStyles, Typography } from "@material-ui/core"

const styles = theme => ({
    entitydetails: {
        borderLeft: `1px solid #D3D3D3`,
        margin: theme.spacing.unit * 3,
        marginLeft: theme.spacing.unit * 8,
        paddingLeft: theme.spacing.unit * 2
    },
    entitytitle: {
        marginBottom: theme.spacing.unit * 2
    }
})

class EntityDetails extends React.Component {
    render() {
        const { classes, type } = this.props
        return(
            <div className={classes.entitydetails}>
                <Typography variant="h6" color="primary" className={classes.entitytitle}>{type}</Typography>
                <Typography variant="body1">Name goes here</Typography>
                <Typography variant="body1">Website goes here</Typography>
                <Typography variant="body1">Address goes here</Typography>
                <Typography variant="body1">Blockchain address goes here</Typography>
            </div>
        )
    }
}

export default withStyles(styles)(EntityDetails)