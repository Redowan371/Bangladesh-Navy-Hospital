import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import './Footer.css'
import logo from '../../../images/logo .png'
import footerNews1 from '../../../images/footer-post-1.jpeg'
import footerNews2 from '../../../images/footer-post-2.jpeg'
import footerNews3 from '../../../images/footer-post-1.jpeg'
import googleMap from '../../../images/google-maps-satellite.png'

const Footer = () => {
    return (
        <div className='bg-dark footer-text'>
            <div className="container pt-3 pb-3">
                <div className="row">
                    <div className="col-md-3">
                        <img src={logo} alt="" />
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>
                        <div className="footer-icon d-flex">
                            <i> <FaFacebookF /></i>
                            <p className='ms-3'>PO Box 16122 Collins Street' West Victoria 8007 Australia</p>
                        </div>
                        <div className="footer-icon d-flex">
                            <i> <FaFacebookF /></i>
                            <p className='ms-3'>+880153625892</p>
                        </div>
                        <div className="footer-icon d-flex">
                            <i> <FaFacebookF /></i>
                            <p className='ms-3'>bdtask@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-md-3 ps-5 pt-3">
                        <div className="footer-news d-flex mb-3">
                            <img className='w-25' src={footerNews1} alt="" />
                            <div className="footer-news-text align-items-center ps-3">
                                <p>Healthy Lifestyle Tips</p>
                                <small>Oct 6, 2016</small>
                            </div>
                        </div>
                        <div className="footer-news d-flex mb-3">
                            <img className='w-25' src={footerNews2} alt="" />
                            <div className="footer-news-text align-items-center ps-3">
                                <p>Child Care</p>
                                <small>Oct 6, 2016</small>
                            </div>
                        </div>
                        <div className="footer-news d-flex">
                            <img className='w-25' src={footerNews3} alt="" />
                            <div className="footer-news-text align-items-center ps-3">
                                <p>Daily Exercise Is..</p>
                                <small>Oct 6, 2016</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 pt-3">
                        <h3>Latest Tweets</h3>
                        <div className="tweets-details d-flex">
                            <i> <FaFacebookF /></i>
                            <p className='ps-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, non.</p>
                        </div>
                        <div className="tweets-details d-flex">
                            <i> <FaFacebookF /></i>
                            <p className='ps-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, non.</p>
                        </div>
                    </div>
                    <div className="col-md-3 map pt-3">
                        <h3>Google Map</h3>
                        <img className='w-100 ' src={googleMap} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;