import React from 'react';
import { withRouter } from 'react-router';

class Landing extends React.Component{
  render(){
    return(
      <h1 onClick={()=>{this.props.history.push('./about')}}>LANDING PAGE</h1>
    )
  }
}

export default withRouter(Landing);