import React from 'react';

class Landing extends React.Component{
  render(){
    return(
      <h1 onClick={()=>{window.location.href='./about'}}>LANDING PAGE</h1>
    )
  }
}

export default Landing;