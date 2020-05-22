import React from 'react';
import { withRouter } from 'react-router';
import {Row, Col, Container} from 'react-bootstrap';
import RecentPosts from './recent-posts/RecentPosts';
import SidePanel from './side-panel/SidePanel';
import './landing.css';

class Landing extends React.Component{
  render(){
    return(
      <div style={{paddingBottom:20}}>
        {/* <ImageSlider></ImageSlider> */}
        <Container>
          <hr/>
          <Row>
            <Col lg>
              <RecentPosts></RecentPosts>
            </Col>
            <Col sm={3}>
              <SidePanel></SidePanel>
            </Col>
          </Row>
      </Container>
      </div>
    )
  }
}

export default withRouter(Landing);