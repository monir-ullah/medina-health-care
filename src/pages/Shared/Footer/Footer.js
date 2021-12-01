// THis is use for Impor
import React from 'react';
import { Col, Container,  Row } from 'react-bootstrap';
import './Footer.css'
import logo from '../../../Images/logo.png'

// THis is use for Footer Area
const Footer = () => {
    return (
        
        <div className="footer-color py-5 d-flex justify-content-evenly">
            
            <Container>
                <Row >
                
                {/* This is use for mini logo in the footer */}
                    <Col>
                        <img src={logo} alt="mini-logo"></img>
                        <p className="mt-4">A team of dentists working to ensure you receive the best treatment.</p>
                        <p> <span><i className="fas fa-phone-alt"></i> </span> 415-205-5550 </p>
                        <p> <span> <i className="fas fa-envelope"></i> </span>emergecies@medina.com</p>
                        <p> <span><i className="fas fa-location-arrow"></i>  </span> medina.com</p>
                    </Col>
                    {/* This is use for About info in the footer */}
                    <Col>
                    <h1>About</h1>
                    <p className="mt-4"> Our Dental Team Solutions</p>
                    <p>Pricing & Price-list</p>
                    <p>Dental Services</p>
                    <p>Clients</p>
                    <p>Special Services</p>
                    </Col>
                    {/* This is use for Awards info in the footer */}
                    <Col>
                    <h1>Our Awards</h1>
                    <p className="mt-4">A team of dentists working to ensure you receive the best treatment.</p>
                        <p> <span><i className="fas fa-check"></i> </span> DentiCare is a multiple award winnner</p>
                        <p> <span><i className="fas fa-check"></i> </span>Best Patinets Care 2017</p>
                        <p> <span><i className="fas fa-check"></i>  </span>Best Practice & Team 2016</p>
                        <p> <span><i className="fas fa-check"></i>  </span>Best Patient Care 2014</p>
                    </Col>

                    {/* This is use for Social NEtworks info in the footer */}
                    <Col>
                    <h1>Social Networks</h1>
                    <p className="mt-4">A team of dentists working to ensure you receive the best treatment.Visit Dentist Care on these social links and connect with us. Make sure to follow our accounts for regular updates.</p>
                        {/* This is use for fontawesome icon */}
                    <p className="mt-3 fs-1 fw-bold">
                        <span><i className="fab fa-twitter"></i>    </span>
                        <span><i className="fab fa-facebook"></i>   </span>
                        <span><i className="fab fa-youtube"></i>    </span>
                        <span><i className="fab fa-instagram"></i>  </span>

                    </p>
                    </Col>
                </Row>
            </Container>
           
        </div>
        
    );
};

export default Footer;