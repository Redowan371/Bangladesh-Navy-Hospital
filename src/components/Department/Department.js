import React from 'react';
import './Department.css';
import dentalMain from '../../images/dentalMain.png'
import heart from '../../images/heart.png'
import liver from '../../images/liver.png'
import eye from '../../images/eye.png'
import ear from '../../images/ear.png'
import brain from '../../images/brain.png'
import dental from '../../images/dental.png'

const Department = () => {
    return (
        <div className='mb-5 mt-3'>
            <h4 className='text-center'>DEPARTMENT</h4>
            <p className='text-center'>Our department & special service</p>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="departMent-details">
                                    <img src={heart} alt="" />
                                    <h4>Heart disease</h4>
                                </div>
                                <div className="departMent-details">
                                    <img src={liver} alt="" />
                                    <h4>Hepatology</h4>
                                </div>
                                <div className="departMent-details">
                                    <img src={brain} alt="" />
                                    <h4>Huntington's</h4>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="departMent-details">
                                    <img src={eye} alt="" />
                                    <h4>Ophthalmo..</h4>
                                </div>
                                <div className="departMent-details">
                                    <img src={dental} alt="" />
                                    <h4>Dental</h4>
                                </div>
                                <div className="departMent-details">
                                    <img src={ear} alt="" />
                                    <h4>Otology</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-4 mt-3">
                                <img className='w-100' src={dentalMain} alt="" />
                            </div>
                            <div className="col-md-8 mt-5">
                                <h3>Dental</h3>
                                <div className="dental-text">
                                    <p>Bangladesh Specialized Hospital Oral and Maxillofacial Surgery Clinic are dedicated to ensuring individualized quality patient care and customized treatment planning. We provide the highest quality care using the safest, most effective treatments available in a setting where the patient is our most valuable asset. Our skilled team members have expertise in treating some of the most complicated and rare conditions. Our physician care for children and adolescents with all aspects of dental care.We treat several conditions include reconstructive oral cancer surgery, facial trauma management.</p>
                                    <button className='btn-regular'>Make Appointments</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Department;