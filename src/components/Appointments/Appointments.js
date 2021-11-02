import React from 'react';
import './Appointments.css'
import appointmentsImg from '../../images/appointment.png'
import { FaFileMedicalAlt, FaNotesMedical, FaHandHoldingMedical, FaPumpMedical } from 'react-icons/fa';

const Appointments = () => {
    return (
        <div className='mt-5 mb-5'>
            <div className="heading-text text-center">
                <h1>WHY CHOOSE US</h1>
                <p>Our department & special service</p>
            </div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-4">
                        <h3>Appointments Form</h3>
                        <div className="appoint-form">
                            <div className="appoint-form-details p-2">
                                <h6>Name and Surname</h6>
                                <input className='w-100' placeholder='Enter your Name' type="text" required /> <br /><br />
                                <h6>Email Address</h6>
                                <input className='w-100' type="email" placeholder='Enter Your Email@' required /> <br /> <br />
                                <h6>Phone Number</h6>
                                <input className='w-100' type="number" placeholder='Enter Your Phone number' required />
                                <div className="appoint-date d-flex mt-2">
                                    <div className="date-from">
                                        <h6>Date Form</h6>
                                        <input className='w-100' type="number" required />
                                    </div>
                                    <div className="date-to ps-2">
                                        <h6>Date To</h6>
                                        <input className='w-100' type="number" required />
                                    </div>
                                </div>
                                <br />
                                <div className="hourly-preference d-flex justify-content-between">
                                    <button className='btn-regular'>Morning</button>
                                    <button className='btn-regular'>Lunch</button>
                                    <button className='btn-regular'>Evening</button>
                                </div>
                            </div>
                            <hr />
                            <div className="appoint-footer d-flex align-items-center mb-2">
                                <input className='ms-2' type="checkbox" name="" id="" />
                                <p className='ps-2 mt-3'>Send me copy of message</p>
                                <button className='btn-regular ms-3'>Submit</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img className='w-100' src={appointmentsImg} alt="" />
                    </div>
                    <div className="col-md-4">
                        <div className="appointments-details d-flex">
                            <div className="appointments-icon">
                                <i><FaFileMedicalAlt /></i>
                            </div>
                            <div className="appointments-text ps-5 pt-3 text-justify">
                                <h3>Health Information</h3>
                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>
                            </div>
                        </div>
                        <div className="appointments-details d-flex">
                            <div className="appointments-icon">
                                <i><FaNotesMedical /></i>
                            </div>
                            <div className="appointments-text ps-5 text-justify">
                                <h3>Medical Education</h3>
                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>
                            </div>
                        </div>
                        <div className="appointments-details d-flex">
                            <div className="appointments-icon">
                                <i><FaHandHoldingMedical /></i>
                            </div>
                            <div className="appointments-text ps-5 text-justify">
                                <h3>Symptom Check</h3>
                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>
                            </div>
                        </div>
                        <div className="appointments-details d-flex">
                            <div className="appointments-icon">
                                <i><FaPumpMedical /></i>
                            </div>
                            <div className="appointments-text ps-5 text-justify">
                                <h3>Qualified Doctors</h3>
                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointments;