import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import SwipeableViews from 'react-swipeable-views';

const styles = theme => ({
    root: {
      backgroundColor: theme.palette.background.paper,
      width: '100%',
    },
  });

  function TabContainer({ entityType, entityData, dir }) {
    return (
      <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
        <Typography variant="h6">{entityType}</Typography>
        {entityData.name}<br />
        {entityData.website}<br />
        {entityData.location}<br />
        {entityData.blockchainAddress}
      </Typography>
    );
  }

class EntityTabBar extends Component {
    state = {
        value: 0,
      };
    
    handleChange = (event, value) => {
    this.setState({ value });
    };

    handleChangeIndex = index => {
    this.setState({ value: index });
    };

  render() {
    const { classes, theme } = this.props;
    const issuerData = {
        name: 'Issuer1',
        website: 'www.issuer1.com',
        location: 'Panjab University',
        blockchainAddress: '0x000'
    }

    const receiverData = {
        name: 'Receiver1',
        website: 'www.receiver1.com',
        location: 'Panjab University',
        blockchainAddress: '0x000'
    }

    return (
        <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <Tab label="Issuer" />
            <Tab label="Receiver" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer entityType="Issuer" entityData={issuerData} dir={theme.direction}>Item One</TabContainer>
          <TabContainer entityType="Receiver" entityData={receiverData} dir={theme.direction}>Item Two</TabContainer>
        </SwipeableViews>
      </div>
    )
  }
}

EntityTabBar.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles, {withTheme: true})(EntityTabBar)
