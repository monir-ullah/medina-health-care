// This is USe for import
import React from 'react';
import { Carousel } from 'react-bootstrap';
import './MainHeading.css'

// THis is main HEading page . In this page use carousel and main heading
const MainHeading = () => {
    
    return (
        <div>
            <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://housemed.qodeinteractive.com/wp-content/uploads/2018/06/h1-slider-img-1.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h1 className="text-info">Start Up Your Health Care</h1>
      <p>Every day is a new opportunity for you to do something for your health.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="https://housemed.qodeinteractive.com/wp-content/uploads/2018/06/h1-slider-img-2.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h1 className="text-info">Meet The Best Experts</h1>
      <p>Every day is a new opportunity for you to do something for your health.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://housemed.qodeinteractive.com/wp-content/uploads/2018/06/h1-slider-img-3.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h1 className="text-info">Take Care of Your Health</h1>
      <p>Every day is a new opportunity for you to do something for your health.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default MainHeading;