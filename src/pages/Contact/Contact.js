import React from 'react';
import { Container } from 'react-bootstrap';
import './Contact.css'

const Contact = () => {
    return (
        <Container>
             {/* This is for Contact Page */}
        <div className="d-flex">
            <div className="shadow-custom">
                
             <h3>Contact Us</h3>

             {/* This is use for contact input Section */}
                    <div className="contact-input">
                        <input type="text" placeholder="Your Name"  />
                        
                        <input type="text" placeholder="Your Mail"  />
                        <input type="text" placeholder="Your Phone Number"  />
                        <textarea name="" id="" cols="30" rows="10" placeholder="Message..."></textarea>
                        <button className="btn text-white btn-info">Submit Message</button>
                    </div>
            </div> 

            
        </div>
        </Container>
    );
};

export default Contact;