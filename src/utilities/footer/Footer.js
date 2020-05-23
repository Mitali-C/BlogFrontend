import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import './Footer.css';

class Footer extends React.Component{
  render(){
    return(
      <div id="footer">
        <Container>
          <Row>
            <Col lg>
              <h6 className="quick-link-title">QUICK LINKS</h6>
              <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap', justifyContent:'center'}}>
                <a href="/category/lifestyle" className="quick-link-item">LIFESTYLE</a><div style={{width:1, height:'auto', backgroundColor:'rgba(255,255,255,0.5)', marginLeft:10, marginRight:10}}></div>
                <a href="/category/books" className="quick-link-item">BOOKS</a><div style={{width:1, height:'auto', backgroundColor:'rgba(255,255,255,0.5)', marginLeft:10, marginRight:10}}></div>
                <a href="/category/tales" className="quick-link-item">TALES</a><div style={{width:1, height:'auto', backgroundColor:'rgba(255,255,255,0.5)', marginLeft:10, marginRight:10}}></div>
                <a href="/category/technology" className="quick-link-item">TECHNOLOGY</a><div style={{width:1, height:'auto', backgroundColor:'rgba(255,255,255,0.5)', marginLeft:10, marginRight:10}}></div>
                <a href="/about" className="quick-link-item">ABOUT</a><div style={{width:1, height:'auto', backgroundColor:'rgba(255,255,255,0.5)', marginLeft:10, marginRight:10}}></div>
                <a href="/contact" className="quick-link-item">CONTACT</a>
              </div>
            </Col>
            <Col lg>
            <h6 className="quick-link-title">KEEP IN TOUCH</h6>
              <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap', justifyContent:'center'}}>
                <a href="/" className="quick-link-item" style={{marginLeft:10, marginRight:10}}><i className="fa fa-twitter fa-2x"></i></a>
                <a href="/" className="quick-link-item" style={{marginLeft:10, marginRight:10}}><i className="fa fa-facebook fa-2x"></i></a>
                <a href="/" className="quick-link-item" style={{marginLeft:10, marginRight:10}}><i className="fa fa-instagram fa-2x"></i></a>
                <a href="/" className="quick-link-item" style={{marginLeft:10, marginRight:10}}><i className="fa fa-linkedin fa-2x"></i></a>
                <a href="/" className="quick-link-item" style={{marginLeft:10, marginRight:10}}><i className="fa fa-github fa-2x"></i></a>
              </div>
            </Col>
          </Row>
          <Row>
            <div className="copyright"><i className="fa fa-copyright"></i> 2020. All Rights Reserved.</div>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Footer;