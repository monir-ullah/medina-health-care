// This is use for import
import React, { useEffect, useState } from 'react';
import {  Container, Row } from 'react-bootstrap';
import Service from './Service/Service';

// This is our services section
const Services = () => {

    // This is use for updating data
    const [services, setServices] = useState([]);
    useEffect( () => {
        // This useEffect Use for taking data from fake DB
        fetch('./fakeDBServiceHome-1.JSON')
        .then(res => res.json())
        .then(data => {
            setServices(data)
        })
    },[])

    return (
        <div className="p-5">
           <Container>
               {/* THIs section will send the data to teh service page */}
              <h1 className="text-center pb-5 mt-5">Our Services</h1>
              <Row xs={1} md={3} className="g-4">

                {
                    services.map(item=> <Service
                    item={item}
                    key={item.id}
                    ></Service>)
                }

  
</Row>
           </Container>
        </div>
    );
};

export default Services;