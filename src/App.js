import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from './components/landing/Landing';
import About from './components/about/About';

class App extends React.Component{
  render(){
    return(
      <Router>
        <Switch>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/">
            <Landing></Landing>
          </Route>
        </Switch>
    </Router>
    )
  }
}

export default App;
