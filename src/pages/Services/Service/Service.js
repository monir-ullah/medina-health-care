// THis is import section 
import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// THIs is service page
const Service = (props) => {
  // This is use for distructuring
    const {title, image, description,id} = props.item;
    return (
        <div>
          {/* This is slow single service in services page */}
            <Col>
                <Card>
                  <Card.Img variant="top" src={image} />
                  <Card.Body>
                    {/* This is Name */}
                    <Card.Title>Name:{title}</Card.Title>
                    <Card.Text>
                     {description}
                    </Card.Text>
                    <Link to={`/services/${id}`}>
                      {/* This is use for dynamic button */}
                    <Button variant="info" className="text-white">Read More Extra Info...</Button>
                    </Link>
                  </Card.Body>
                </Card></Col>
        </div>
    );
};

export default Service;