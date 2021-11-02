import React from 'react';
import './Contact.css'
import contactImg from '../../images/contact.png'

const Contact = () => {
    return (
        <div className='text-center mt-5 mb-5'>
            <h3>GET IN TOUCH</h3>
            <p>Contact us to Know any information.</p>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img className='w-100 p-5' src={contactImg} alt="" />
                    </div>
                    <div className="col-md-6">
                        <div className="contract-form pt-5 p-3">
                            <input className='w-100' type="text" placeholder='Enter your Name' /> <br /> <br />
                            <input className='w-100' type="email" placeholder='Enter your Email' /> <br /> <br />
                            <input className='w-100' type="number" name="" id="" placeholder='Enter your Phone' /> <br /> <br />
                            <textarea className='w-100' name="" id="" rows="4"></textarea>
                        </div>
                        <button className='btn-regular'>Submit Massage</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;