import React from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import Home from './Components/Home/Home';
import NavigationBar from './Components/Nav/Nav';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import LandPage from './Components/LandPage/LandPage';
import HomeEnglish from './Components/HomeEnglish/HomeEnglish';
import './Scss/App/App.css';

function App() {
  return (
    <Router>
      <Route path='/Home'>
        <NavigationBar />
      </Route>
      <Route path='/HomeE'>
        <NavigationBar />
      </Route>
      <Switch>
        <Route exact path='/Blog' component={LandPage} />
        <Route exact path='/Home' component={Home} />
        <Route exact path='/HomeE' component={HomeEnglish} />
        <Route component={PageNotFound} />
        <Route exact path='/'  >
          <Redirect to={{ pathname: '/Blog' }} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
