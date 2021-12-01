// This is use for Detail page.This page will be access if user alrady login
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

// This is Details Components
const Details = () => {

    const {serviceId} = useParams();
    const [detail, setDetail] = useState({});
    useEffect( ()=>{
        const url = `https://jsonplaceholder.typicode.com/comments/${serviceId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setDetail(data))
        
        
    }, [] )

    const {name, body, id} = detail;
   const str = `${name}`;
   
   
    return (
        <div className="pt-5 py-5 mt-5 d-flex ">
            <Container>
            <Row>
            <Col md="4" className="pt-5 py-5 mt-5 my-5">
                <Card border="success" style={{ width: '25rem' }} >
                    <Card.Header> <h1>This is Sevice No : {id}</h1></Card.Header>
                    <Card.Body>
                    <Card.Title><h4>{str.toUpperCase()}</h4></Card.Title>
                    <Card.Text>
                        {body}
                    </Card.Text>
                    </Card.Body>
            </Card>
            </Col>
            </Row>
            </Container>
        </div>
    );
};

export default Details;