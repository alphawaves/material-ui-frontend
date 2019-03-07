import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import SearchResult from './components/SearchResult'
import Dashboard from './components/Dashboard'
import UploadForm from './components/UploadForm'
import DetailedDocumentMaterial from './components/DetailedDocumentMaterial'
import Footer from './components/Footer'
import HomeScreen from './components/HomeScreen'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import { Ip } from 'mdi-material-ui';

class App extends Component {
  render() {
    const theme = createMuiTheme({
      palette: {
        primary: red
      }
    });
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <div className="Site">
          <Route path="/" component={NavBar} />
          <Route exact path="/" component={HomeScreen} />
            <Switch>
              <Route path="/login" component={LoginForm} />
              <Route path="/register" component={RegisterForm} />
              <Route path="/searchResult" component={SearchResult} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/detailed" component={DetailedDocumentMaterial} />
              <Route path="/upload" component={UploadForm} />
            </Switch>
            <Route path="/" component={Footer} />
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
