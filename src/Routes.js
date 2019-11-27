import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from './components/App'
import Header from './components/Header';
import Footer from './components/Footer';
import Dash from './components/Dash';
import Profile from './components/Profile';

export default function Routes() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/profile" component={Profile} />
        <Route path="/dash" component={Dash} />
        <Route exect path="/" component={App} />
      </Switch>
      <Footer />
    </Router>
  );
}