import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from './components/landing/Landing';
import Category from './components/category/Category';
import About from './components/about/About';
import NavBar from './utilities/navbar/Navbar';
import Footer from './utilities/footer/Footer';
import {Container} from 'react-bootstrap'

class App extends React.Component{
  render(){
    return(
      <>
        <Container>
          <h1 style={{textAlign:'center', fontFamily:"'Karla', sans-serif"}}>BLOG NAME</h1>
          <NavBar/>
          <hr/>
          <Router>
            <Switch>
              <Route path="/about" component={About}></Route>
              <Route path="/category/:type" component={Category}></Route>
              <Route path="/" component={Landing}></Route>
            </Switch>
        </Router>
      </Container>
      <Footer></Footer>
    </>
    )
  }
}

export default App;
