import React from 'react';
import {Row, Col} from 'react-bootstrap';
import PostsList from './posts-list/PostsList';
import CategorySidePanel from './category-side-panel/CategorySidePanel';
import {withGetScreen} from 'react-getscreen';
import './Category.css';

class Category extends React.Component{
  render(){
    return(
      <Row style={{justifyContent:'center', marginBottom:20}} id="category">
        <Col lg>
          <Row style={{textAlign:'center'}}>
            <h1 className="category-name">{this.props.match.params.type}</h1>
          </Row>
          <Row style={{textAlign:'center', justifyContent:'center'}}>
            <PostsList></PostsList>
          </Row>
        </Col>
        <Col sm={this.props.isDesktop() ? 3 : 7}>
          <CategorySidePanel></CategorySidePanel>
        </Col>
      </Row>
    )
  }
}

export default withGetScreen(Category);