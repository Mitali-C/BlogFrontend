import React from 'react';
import {Row, Col, Image} from 'react-bootstrap';
import './SidePanel.css';
import dummy6 from '../../../images/landing/dummy/dummy6.png';
import dummy5 from '../../../images/landing/dummy/dummy5.png';
import dummy7 from '../../../images/landing/dummy/dummy7.png';
import dummy8 from '../../../images/landing/dummy/dummy8.png';

class SidePanel extends React.Component{
  stayConnected  = () => {
    return(
      <Col>
        <Row>
          <h3 className="static-text">KEEP IN TOUCH</h3>
        </Row>
        <hr/>
        <Row className="social-container">
          <span className="fa-stack fa-lg icon-outline">
            <i className="fa fa-twitter fa-stack-1x"></i>
          </span>
          <span className="fa-stack fa-lg icon-outline">
            <i className="fa fa-facebook fa-stack-1x"></i>
          </span>
          <span className="fa-stack fa-lg icon-outline">
            <i className="fa fa-instagram fa-stack-1x"></i>
          </span>
          <span className="fa-stack fa-lg icon-outline">
            <i className="fa fa-linkedin fa-stack-1x"></i>
          </span>
          <span className="fa-stack fa-lg icon-outline">
            <i className="fa fa-github fa-stack-1x"></i>
          </span>
        </Row>
      </Col>
    )
  }

  popularPosts = () => {
    return(
      <Col style={{marginTop:40}} id="popular-posts">
        <Row>
          <h3 className="static-text">POPULAR POSTS</h3>
        </Row>
        <hr/>
        <Row style={{paddingBottom:20, alignItems:'center', paddingLeft:10, paddingRight:10}}>
          <div style={{flex:1}}>
            <Image src={dummy5} fluid />
          </div>
          <div style={{flex:3, paddingLeft:10}}>
            <div className="title">Some post title</div>
            <h6 className="date">AUGUST 22, 2019</h6>
          </div>
        </Row>
        <Row style={{paddingBottom:20, alignItems:'center', paddingLeft:10, paddingRight:10}}>
          <div style={{flex:1}}>
            <Image src={dummy6} fluid />
          </div>
          <div style={{flex:3, paddingLeft:10}}>
            <div className="title">Gently falls the bakula - Sudha Murthy</div>
            <h6 className="date">AUGUST 22, 2019</h6>
          </div>
        </Row>
        <Row style={{paddingBottom:20, alignItems:'center', paddingLeft:10, paddingRight:10}}>
          <div style={{flex:1}}>
            <Image src={dummy7} fluid />
          </div>
          <div style={{flex:3, paddingLeft:10}}>
            <div className="title">Some post title</div>
            <h6 className="date">AUGUST 22, 2019</h6>
          </div>
        </Row>
        <Row style={{paddingBottom:20, alignItems:'center', paddingLeft:10, paddingRight:10}}>
          <div style={{flex:1}}>
            <Image src={dummy8} fluid />
          </div>
          <div style={{flex:3, paddingLeft:10}}>
            <div className="title">Some post title</div>
            <h6 className="date">AUGUST 22, 2019</h6>
          </div>
        </Row>
      </Col>
    )
  }

  subscribe = () => {
    return(
      <Col style={{marginTop:40}}>
        <Row>
          <h3 className="static-text">SUBSCRIBE</h3>
        </Row>
        <hr/>
        <Row className="static-text" style={{fontWeight:100, textAlign:'left', marginBottom:10}}>Subscribe to stay updated with the latest posts!</Row>
        <Row>
          <input
            className="subscribe-input"
            placeholder="Your email address"
          />
        </Row>
        <Row>
          <button className="subscribe-button">SUBSCRIBE</button>
        </Row>
      </Col>
    )
  }
  
  render(){
    return(
      <Col id="panel" style={{marginBottom:20}}>
        <Row>
          {this.stayConnected()}
        </Row>
        <Row>
          {this.popularPosts()}
        </Row>
        <Row>
          {this.subscribe()}
        </Row>
      </Col>
    )
  }
}

export default SidePanel;