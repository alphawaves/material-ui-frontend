import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';
import DocumentCategory from './DocumentCategory'

const styles = theme => ({
    root: {
      backgroundColor: theme.palette.background.paper,
      width: '100%',
    },
  });

  function TabContainer({ category, entityData, dir }) {
    return (
      <DocumentCategory category={category} />
    );
  }

class DocumentTabBar extends Component {
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
            <Tab label="Unissued" />
            <Tab label="Issued" />
            <Tab label="Received" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer category="Unissued" entityData={issuerData} dir={theme.direction}>Item One</TabContainer>
          <TabContainer category="Issued" entityData={receiverData} dir={theme.direction}>Item Two</TabContainer>
          <TabContainer category="Received" entityData={receiverData} dir={theme.direction}>Item Two</TabContainer>
        </SwipeableViews>
      </div>
    )
  }
}

DocumentTabBar.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles, {withTheme: true})(DocumentTabBar)
