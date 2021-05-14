import React from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import Home from './Components/Home/Home';
import NavigationBar from './Components/Nav/Nav';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import './Scss/App/App.css';

function App() {
  return (
    <Router>
      <Route path='/'>
        <NavigationBar />
      </Route>
      <Switch>
        <Route exact path='/Home' component={Home} />

        <Route exact path='/'  >
          <Redirect to={{ pathname: '/Home', }} />
        </Route>
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
