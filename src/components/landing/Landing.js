import React from 'react';
import { withRouter } from 'react-router';
import {Carousel} from 'react-bootstrap';
import landing1 from '../../images/landing/blog-landing-1.png';
import landing2 from '../../images/landing/blog-landing-2.png';
import landing3 from '../../images/landing/blog-landing-3.png';

class Landing extends React.Component{
  render(){
    return(
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={landing1}
              alt="First slide"
            />
            {/* <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={landing2}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={landing3}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    )
  }
}

export default withRouter(Landing);