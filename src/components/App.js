import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';

import NavBar from './NavBar';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import CreateOffer from './CreateOffer';
import ViewOffer from './ViewOffer';
import Bottom from './Bottom';
import Story from './Story';
import UserAgreement from './UserAgreement';
import PrivacyPolicy from './PrivacyPolicy';
import Press from './Press';
import PrivateRoute from './PrivateRoute';

const muiStyles = () => ({
  wholeStyle: {
    // backgroundImage: `url(${'../img/bg-sign.jpg'})`,
    // backgroundImage: URL.createObjectURL('../img/bg-sign.jpg')
  }
})
class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Route>
        <div className={classes.wholeStyle}>
          <NavBar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/login" exact component={Login} />
              <Route path="/signup" exact component={Signup} />
              <Route path="/story" exact component={Story} />
              <Route path="/useragreement" exact component={UserAgreement} />
              <Route path="/privacypolicy" exact component={PrivacyPolicy} />
              <Route path="/press" exact component={Press} />
              <PrivateRoute path="/createoffer" exact component={CreateOffer} />
              <PrivateRoute path="/viewoffer/:offerid" exact component={ViewOffer} />
            </Switch>
          <Bottom />
        </div>
      </Route>
    );
  }
}

export default withStyles(muiStyles)(App);