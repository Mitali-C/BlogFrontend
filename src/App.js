import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from './components/landing/Landing';
import About from './components/about/About';
import NavBar from './utilities/navbar/Navbar';
import {Container} from 'react-bootstrap'

class App extends React.Component{
  render(){
    return(
      <Container>
        <h1 style={{textAlign:'center', fontFamily:"'Karla', sans-serif"}}>BLOG NAME</h1>
      <NavBar/>
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
    </Container>
    )
  }
}

export default App;
