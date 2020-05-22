import React from 'react';
import {Row, Col, Image} from 'react-bootstrap';
import Truncate from 'react-truncate-html';
import dummy6 from '../../../images/landing/dummy/dummy6.png';
import dummy5 from '../../../images/landing/dummy/dummy5.png';
import dummy7 from '../../../images/landing/dummy/dummy7.png';
import dummy8 from '../../../images/landing/dummy/dummy8.png';
import './RecentPosts.css';

class RecentPosts extends React.Component{
  render(){
    return(
      <Col>
        <Row>
          <Col sm={5}>
            <Image src={dummy6} fluid />
          </Col>
          <Col sm={7}>
            <a href="/" className="tag">BOOK REVIEW</a>
            <h4><a href="/" className="post-title">GENTLY FALLS THE BAKULA - SUDHA MURTHY</a></h4>
            <Truncate
              className="post-content"
              lines={4}
              dangerouslySetInnerHTML={{
                __html: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
              }}
              />
              <div><a href="/" className="link-more">READ MORE</a></div>
              <div className="date-comment-container">
                <div className="date-comment">AUGUST 22, 2019</div>
                <div className="date-comment" style={{marginLeft:10, marginRight:10}}>	&#x2022; </div>
                <div className="date-comment">NO COMMENTS</div>
              </div>
          </Col>
        </Row>
        <hr/>
        <Row>
          <Col sm={5}>
            <Image src={dummy5} fluid />
          </Col>
          <Col sm={7}>
            <a href="/" className="tag">LIFETSYLE</a>
            <h4><a href="/" className="post-title">SOME POST TITLE</a></h4>
            <Truncate
              className="post-content"
              lines={4}
              dangerouslySetInnerHTML={{
                __html: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
              }}
              />
              <div><a href="/" className="link-more">READ MORE</a></div>
              <div className="date-comment-container">
                <div className="date-comment">AUGUST 22, 2019</div>
                <div className="date-comment" style={{marginLeft:10, marginRight:10}}>	&#x2022; </div>
                <div className="date-comment">NO COMMENTS</div>
              </div>
          </Col>
        </Row>
        <hr/>
        <Row>
          <Col sm={5}>
            <Image src={dummy7} fluid />
          </Col>
          <Col sm={7}>
            <a href="/" className="tag">SHORT STORIES</a>
            <h4><a href="/" className="post-title">SOME POST TITLE</a></h4>
            <Truncate
              className="post-content"
              lines={4}
              dangerouslySetInnerHTML={{
                __html: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
              }}
              />
              <div><a href="/" className="link-more">READ MORE</a></div>
              <div className="date-comment-container">
                <div className="date-comment">AUGUST 22, 2019</div>
                <div className="date-comment" style={{marginLeft:10, marginRight:10}}>	&#x2022; </div>
                <div className="date-comment">NO COMMENTS</div>
              </div>
          </Col>
        </Row>
        <hr/>
        <Row>
          <Col sm={5}>
            <Image src={dummy8} fluid />
          </Col>
          <Col sm={7}>
            <a href="/" className="tag">TECHNOLOGY</a>
            <h4><a href="/" className="post-title">SOME POST TITLE</a></h4>
            <Truncate
              className="post-content"
              lines={4}
              dangerouslySetInnerHTML={{
                __html: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
              }}
              />
              <div><a href="/" className="link-more">READ MORE</a></div>
              <div className="date-comment-container">
                <div className="date-comment">AUGUST 22, 2019</div>
                <div className="date-comment" style={{marginLeft:10, marginRight:10}}>	&#x2022; </div>
                <div className="date-comment">NO COMMENTS</div>
              </div>
          </Col>
        </Row>
        <hr/>
      </Col>
    )
  }
}

export default RecentPosts;