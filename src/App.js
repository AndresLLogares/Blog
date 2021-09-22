import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./Components/Home/Home";
import NavigationBar from "./Components/Nav/Nav";
import LandPage from "./Components/LandPage/LandPage";
import HomeEnglish from "./Components/HomeEnglish/HomeEnglish";
import Projects from "./Components/Projects/Projects";
import ProjectsE from "./Components/ProjectsE/ProjectsE";
import ScrollToTop from "./Components/ScrolToTop/ScrolToTop";
import NavE from "./Components/Nav/NavE";
import "./Scss/App/App.css";

function App() {
  return (
    <BrowserRouter>
      <Route path="/Home">
        <NavigationBar />
      </Route>
      <Route path="/HomeE">
        <NavE />
      </Route>
      <Route path="/Projects">
        <NavigationBar />
      </Route>
      <Route path="/ProjectsE">
        <NavE />
      </Route>
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={LandPage} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/HomeE" component={HomeEnglish} />
        <Route exact path="/Projects" component={Projects} />
        <Route exact path="/ProjectsE" component={ProjectsE} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
