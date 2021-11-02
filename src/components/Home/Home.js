import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import About from '../About/About';
import Appointments from '../Appointments/Appointments';
import Contact from '../Contact/Contact';
import Department from '../Department/Department';
import Doctors from '../Doctors/Doctors';
import Banner from '../Sheared/Banner/Banner';
import Footer from '../Sheared/Footer/Footer';
import Menubar from '../Sheared/Menubar/Menubar';
import ServiceForHome from './ServiceForHome/ServiceForHome';

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/Redowan371/fakeBD/main/serviceFakeDB.json`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <>
            <div>
                <Menubar></Menubar>
                <Banner></Banner>
                <About></About>
                <Appointments></Appointments>
                <div className="container text-center">
                    <div className="header-text text-center mb-5">
                        <h1>OUR SERVICES</h1>
                        <p>We are Provided Best Services</p>
                    </div>
                    <Row xs={1} md={3} className="g-4">
                        {
                            services.slice(0, 6).map(service => <ServiceForHome
                                key={service.key}
                                service={service}
                            ></ServiceForHome>)
                        }
                    </Row>
                    <Link to="/services"><button className='btn-regular mt-3'>See More Services</button></Link>
                </div>
                <Doctors></Doctors>
                <Department></Department>
                <Contact></Contact>
                <Footer></Footer>
            </div>

        </>

    );
};

export default Home;