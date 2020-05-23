import React from 'react';
import {Row, Card, Spinner} from 'react-bootstrap';
import dummy6 from '../../../images/landing/dummy/dummy6.png';
import dummy5 from '../../../images/landing/dummy/dummy5.png';
import dummy7 from '../../../images/landing/dummy/dummy7.png';
import dummy8 from '../../../images/landing/dummy/dummy8.png';
import Truncate from 'react-truncate-html';
import './PostsList.css';

class PostsList extends React.Component{
  state={
    hoverId:'',
    showPosts:6,
    loading:false,
    cards : [
      {id:'1', title:"Post 1", img: dummy5, date:"August 22, 2019", comments:[] ,content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"},
      {id:"2", title:"Post 2", img: dummy6, date:"August 22, 2019", comments:[] ,content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"},
      {id:"3", title:"Post 3", img: dummy7, date:"August 22, 2019", comments:[] ,content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"},
      {id:"4", title:"Post 4", img: dummy8, date:"August 22, 2019", comments:[] ,content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"},
      {id:"5", title:"Post 5", img: dummy5, date:"August 22, 2019", comments:[] ,content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"},
      {id:"6", title:"Post 6", img: dummy5, date:"August 22, 2019", comments:[] ,content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"},
      {id:"7", title:"Post 7", img: dummy5, date:"August 22, 2019", comments:[] ,content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"},
      {id:"8", title:"Post 8", img: dummy5, date:"August 22, 2019", comments:[] ,content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"},
      {id:"9", title:"Post 9", img: dummy5, date:"August 22, 2019", comments:[] ,content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"},
      {id:"10", title:"Post 10", img: dummy5, date:"August 22, 2019", comments:[] ,content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"},
      {id:"11", title:"Post 11", img: dummy5, date:"August 22, 2019", comments:[] ,content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"},
      {id:"12", title:"Post 12", img: dummy5, date:"August 22, 2019", comments:[] ,content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"},
      {id:"13", title:"Post 13", img: dummy5, date:"August 22, 2019", comments:[] ,content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"},
    ]
  }

  setHover = (id) => {
    this.setState({hoverId:id})
  }

  removeHover = (id) => {
    this.setState({hoverId:''})
  }

  postItem = (data) => {
    return(
      <Card>
        <Card.Img variant="top" src={data.img} />
        <Card.Body>
          <Card.Title>{data.title}</Card.Title>
          <Card.Text>
            <Truncate
              className="post-content"
              lines={2}
              dangerouslySetInnerHTML={{
                __html: data.content
              }}
            />
            <div className="date-comment-container">
              <div className="date-comment">{data.date}</div>
              <div className="date-comment" style={{marginLeft:10, marginRight:10}}>	&#x2022; </div>
              <div className="date-comment"><i className="fa fa-comment"></i> {data.comments.length}</div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }

  loadMore = () => {
    this.setState({loading:true})
    if(this.state.showPosts+6>this.state.cards.length){
      this.setState({showPosts:this.state.cards.length}, ()=>{this.setState({loading:false})})
    }
    else{
      this.setState({showPosts:this.state.showPosts+6}, ()=>{this.setState({loading:false})})
    }
  }

  render(){
    return(
      <Row style={{width:'100%'}} id="posts">
        <div className="cards-container">
          {
            this.state.cards.slice(0, this.state.showPosts).map((data,index)=>{
              return(
                <>{this.postItem(data)}</>
              )
            })
          }
        </div>
          {
            this.state.showPosts<this.state.cards.length && (
              <div className="load-more-container">
                <button className="load-more-btn" onClick={this.loadMore}>
                  {
                    this.state.loading ? (
                      <>
                      <Spinner 
                      as="span"
                      animation="grow"
                      size="sm"
                      role="status"
                      aria-hidden="true"/>  loading...
                      </>
                    ) : "LOAD MORE"
                  }
                </button>
              </div>
            )
          }
      </Row>
    )
  }
}

export default PostsList;