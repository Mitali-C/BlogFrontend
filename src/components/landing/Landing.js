import React from 'react';
import {withGetScreen} from 'react-getscreen';
import {Row, Col} from 'react-bootstrap';
import RecentPosts from './recent-posts/RecentPosts';
import SidePanel from './side-panel/SidePanel';
import './landing.css';

class Landing extends React.Component{
  render(){
    return(
      <Row style={{justifyContent:'center'}}>
        <Col lg>
          <RecentPosts></RecentPosts>
        </Col>
        <Col sm={this.props.isDesktop() ? 3 : 7}>
          <SidePanel></SidePanel>
        </Col>
      </Row>
    )
  }
}

export default withGetScreen(Landing);