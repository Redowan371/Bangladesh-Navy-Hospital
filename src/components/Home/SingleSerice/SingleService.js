import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleService = (props) => {
    const { name, product_thumbnail, service_charge, id, short_description } = props.service;
    return (
        <div>
            <Col>
                <Card className='text-center'>
                    <Card.Img className='card-img' variant="top" src={product_thumbnail} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            <p>{short_description.slice(0, 150)}</p>
                        </Card.Text>
                        <h5>Service Charge: ${service_charge}</h5>
                        <div className="d-flex justify-content-between">
                            <div className="Go to Home">
                                <Link to='/home'><button className='btn-regular'>Go to Home</button></Link>
                            </div>
                            <div className="get-service">
                                <Link to={`/serviceDetails/${id}`}><button className='btn-regular'>Get Service</button></Link>
                            </div>

                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default SingleService;