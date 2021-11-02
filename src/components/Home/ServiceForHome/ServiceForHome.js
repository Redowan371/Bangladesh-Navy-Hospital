import React from 'react';
import './ServiceForHome.css'
import { Card, Col } from 'react-bootstrap';

const ServiceForHome = (props) => {
    const { name, product_thumbnail, service_charge, short_description } = props.service;
    return (
        <div>
            <Col>
                <Card className='text-center'>
                    <Card.Img className='card-img' variant="top" src={product_thumbnail} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            <p>{short_description.slice(0, 100)}</p>
                        </Card.Text>
                        <h5>Service Charge: ${service_charge}</h5>
                    </Card.Body>
                </Card>
            </Col>

        </div>
    );
};

export default ServiceForHome;