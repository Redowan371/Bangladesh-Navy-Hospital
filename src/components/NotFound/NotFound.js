import React from 'react';
import { Link } from 'react-router-dom';
import errorImg from '../../images/error404-404.gif'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='text-center'>
            <div className="row error">
                <div className="col-md-12 d-flex align-items-center justify-content-center">
                    <img className='w-50' src={errorImg} alt="" />
                </div>
            </div>
            <Link to='/home'><button className='btn-regular mt-3'>Back To Home</button></Link>
        </div>
    );
};

export default NotFound;