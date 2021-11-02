import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import googleIcon from '../../images/google.png'
import homeIcon from '../../images/homeIcon.png'
import './Login.css';

const Login = () => {
    const { signInGoogle, handleEmailLogin, handleEmailChange, handlePasswordChange, user, error } = useAuth();
    const location = useLocation();
    const history = useHistory()
    const redirect_uri = location.state?.from || '/home';
    const handleGoogleLogin = () => {
        signInGoogle()
            .then((result) => {
                history.push(redirect_uri)
            })
    }

    if (user.email) {
        history.push(redirect_uri)
    }
    return (
        <div className='text-center mt-5'>
            <p>{user.email}</p>
            <h1>Please Login Here 👎 </h1>
            <p className='text-danger'>{error}</p>
            <div className="login-from mt-3 mb-5 mx-5">
                <form onSubmit={handleEmailLogin}>
                    <div className="row mb-3">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3" required />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Log in</button>
                </form>
            </div>
            <button className='btn-regular me-2' onClick={handleGoogleLogin}>
                <img className='style-icon' src={googleIcon} alt="" />
                Sign In with Google
            </button>
            <Link to='/home'><button className='btn-regular'>
                <img className='style-icon' src={homeIcon} alt="" />
                Back To Home
            </button></Link>
        </div>
    );
};

export default Login;