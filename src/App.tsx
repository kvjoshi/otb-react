import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Nav from './components/Nav'
import Home from './views/Home'
import About from './views/About'
import Adventure from './views/Adventure'
import NotFound from './views/NotFound'
import Footer from "./components/Footer";
import Aqua from "./views/Aqua";
import Restro from "./views/Restro";
import Events from "./views/Events";

const App = () => {
  return (
      <>
      <Nav />
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/adventure">
          <Adventure />
        </Route>
        <Route path="/aqua">
          <Aqua />
        </Route>
        <Route path="/restro">
          <Restro />
        </Route>
        <Route path="/events">
          <Events />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
        <Footer/>
      </>
  );
};

export default App;
