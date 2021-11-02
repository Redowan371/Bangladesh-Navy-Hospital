import React from 'react';
import aboutImg from '../../images/about.jpg';
import './About.css';

const About = () => {
    return (

        <div id='about' className='mt-3 mb-5'>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <img className='w-100' src={aboutImg} alt="" />
                    </div>
                    <div className="col-md-8">
                        <div className="about-tex-1">
                            <h1>ABOUT US</h1>
                            <h4>What we are and our history</h4>
                            <p>BSH has all the characteristics of a world-class hospital with wide range of services and specialists, equipments and technology, ambience and service quality. The hospital is a showcase of synergy of medical technology and advances in ICT Division through paperless medical records.</p>
                            <button className='btn-regular'>Read More</button>
                        </div>
                        <div className="about-text-2">
                            <h1>VISION & MISSION</h1>
                            <h4>Our goal and thoughts</h4>
                            <p>"TO BE A RENOWNED ORGANIZATION AT THE LEADING EDGE OF MEDICINE, PROVIDING QUALITY HEALTHCARE TO MEET OUR NATION'S ASPIRATIONS."</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;