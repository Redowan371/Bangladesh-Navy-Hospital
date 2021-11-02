import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import SingleService from '../SingleSerice/SingleService';

const ServiceMain = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/Redowan371/fakeBD/main/serviceFakeDB.json`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='mb-5'>
            <div className="header-text text-center mb-5">
                <h1>OUR SERVICES</h1>
                <p>We are Provided Best Services</p>
            </div>
            {
                <div className="container">
                    <Row xs={1} md={3} className="g-4">
                        {
                            services.map(service => <SingleService
                                key={service.key}
                                service={service}
                            ></SingleService>)
                        }
                    </Row>
                </div>
            }
        </div >
    );
};

export default ServiceMain;