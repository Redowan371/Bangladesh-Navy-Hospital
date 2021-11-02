import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Doctors.css'
import doctors1 from '../../images/doctor_1.png'
import doctors2 from '../../images/doctor_2.png'
import doctors3 from '../../images/doctor_3.png'
import doctors4 from '../../images/doctor_4.png'

const Doctors = () => {
    return (
        <div className='text-center mt-5 mb-5'>
            <h3>OUR DOCTOR'S</h3>
            <p>Our department & special service</p>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-3">
                        <div className="doctor-details">
                            <div className="doctor-img">
                                <img className='w-100' src={doctors1} alt="" />
                                <div className="doctors-icon">
                                    <i> <FaFacebookF /></i>
                                    <i> <FaLinkedinIn /></i>
                                    <i> <FaTwitter /></i>
                                    <i> <FaInstagram /></i>
                                </div>
                            </div>
                        </div>
                        <div className="doctor-text">
                            <h4>Dr. David Moniky</h4>
                            <p>Huntington's</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="doctor-details">
                            <div className="doctor-img">
                                <img className='w-100' src={doctors2} alt="" />
                                <div className="doctors-icon">
                                    <i> <FaFacebookF /></i>
                                    <i> <FaLinkedinIn /></i>
                                    <i> <FaTwitter /></i>
                                    <i> <FaInstagram /></i>
                                </div>
                            </div>
                        </div>
                        <div className="doctor-text">
                            <h4>Dr. Naeem Khan</h4>
                            <p>Ophthalmology</p>
                        </div>

                    </div>
                    <div className="col-md-3">
                        <div className="doctor-details">
                            <div className="doctor-img">
                                <img className='w-100' src={doctors3} alt="" />
                                <div className="doctors-icon">
                                    <i> <FaFacebookF /></i>
                                    <i> <FaLinkedinIn /></i>
                                    <i> <FaTwitter /></i>
                                    <i> <FaInstagram /></i>
                                </div>
                            </div>
                        </div>
                        <div className="doctor-text">
                            <h4>Dr. Tanjil Ahmed</h4>
                            <p>Dental</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="doctor-details">
                            <div className="doctor-img">
                                <img className='w-100' src={doctors4} alt="" />
                                <div className="doctors-icon">
                                    <i> <FaFacebookF /></i>
                                    <i> <FaLinkedinIn /></i>
                                    <i> <FaTwitter /></i>
                                    <i> <FaInstagram /></i>
                                </div>
                            </div>
                        </div>
                        <div className="doctor-text">
                            <h4>Dr. Tuhin Sorker</h4>
                            <p>Heart disease</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctors;