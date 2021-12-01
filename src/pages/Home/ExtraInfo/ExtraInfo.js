// This is extra info section
import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './ExtraInfo.css'

// This is Extrainfo Section
const ExtraInfo = () => {
    return (
        <div className="mt-5 pt-5">
            <Container>
                <Row  className="d-flex col-sm-12">
                    {/* THis is use for video in the extra info section */}
                    <Col >
                    <iframe title="vimeo-player" src="https://player.vimeo.com/video/87713534?h=fd39639033" width="100%" height="100%" frameBorder="0" allowFullScreen></iframe>
                    </Col>

                    {/* THis is use for extra information the extra info section */}
                    <Col className="ms-5 mt-sm-3 pe-5" xs={10} md={6}>
                        <h1 className="text-info">Good Health
                            <br/>
                        Moves Us Forward</h1>
                        <p>
                        Laboratory Place In Medical Practice. Every day is a new opportunity for you to do something for your health.Every day is a new opportunity for you to do something for your health.A team of dentists working to ensure you receive the best treatment.Visit Dentist Care on these social links and connect with us. Make sure to follow our accounts for regular updates.Laboratory Place In Medical Practice. Every day is a new opportunity for you to do something for your health.A team of dentists working to ensure you receive the best treatment.
                        </p>
                        <Button className="btn btn-info rounded-3 text-white"> Learn More</Button>
                        
                    
                    </Col>

                </Row>
            </Container>
            <br/>
            <br/>
        </div>
    );
};

export default ExtraInfo;