import React, { useEffect, useState } from 'react';
import './ServiceDetails.css'
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const { id } = useParams();
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/Redowan371/fakeBD/main/serviceFakeDB.json`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    const exactService = services.filter(service => service.id === id)
    return (
        <div>
            <h1 className='text-center mt-3'>Welcome To Our Service Details..</h1>
            <div className="container">
                <div className="row mt-3">
                    <div className="col-md-6">
                        <img className='w-100 service-img' src={exactService[0]?.product_thumbnail} alt="" />
                    </div>
                    <div className="col-md-6 mt-3 details-text">
                        <h3>Service Name: <span>{exactService[0]?.name}</span></h3>
                        <h3 className='mt-5'>Service Description: <span>{exactService[0]?.short_description}</span> </h3>
                        <h5 className='mt-5'>Service Charge: ${exactService[0]?.service_charge}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;