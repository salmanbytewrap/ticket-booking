import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar'
import Home from './components/layout/Home'
import Booking from './components/layout/Booking'
import './App.css';
import Routes from './components/routing/Routes'
import { loadUser } from './actions/auth'
import setAuthToken from './utils/setAuthToken'
// redux

import { Provider } from 'react-redux';
import store from './store';
import './App.css'

if (localStorage.token) {
  setAuthToken(localStorage.token)
}


const App = () => {
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/booking" component={Booking} />
            <Route component={Routes} />
          </Switch>

        </Fragment>
      </Router>
    </Provider>
  )
};


export default App;
