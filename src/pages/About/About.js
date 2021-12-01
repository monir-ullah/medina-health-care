// This is use for importing Components and CSS style
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css'


const About = () => {
    return (
        // This Component or Page is use for About Page
        <Container className="my-5 py-5">
            <Row>
                {/* This is for Left size content */}
            <Col>
            
            
                <img src="https://i.ibb.co/SdVKbHY/Cardiology.png" alt=""  className="img-fluid"/>
                <img src="https://i.ibb.co/n8fXGNv/Eye-Surgery.png"/>
            
            </Col>
            {/* This is for right size content */}
            <Col>
            
                <h1>Achieve Your Goals With Educal</h1>
                <p>Lost the plot bobby such a fibber bleeding bits and bobs don't get shirty with me bugger all mate chinwag super pukka william barney, horse play buggered.</p>
                <p> <i className="fas fa-check"></i> <strong>Upskill your organization.</strong></p>
                <p> <i className="fas fa-check"></i>  <strong>Access more then 100K online courses.</strong></p>
                <p> <i className="fas fa-check"></i>  <strong>Learn the latest skills.</strong></p>

                <p>Shiron – Insurance Elementor Template Kit is specially designed for Insurance, Finance, Marketing, Consulting as well as financial and law companies, individual tax, finance advisors.This kit has been optimized for use with the free Hello Elementor theme but may be used with most themes that support Elementor.</p>
            
                
        </Col>
            </Row>
        </Container>
    );
};

export default About;