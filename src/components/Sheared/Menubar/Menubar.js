import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo .png'
import './Menubar.css'

const Menubar = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='px-3'>
                <Navbar.Brand href="home"><img className='w-75 logo-img' src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Link className='link-item' to="/home">Home</Link>
                        <Link className='link-item' to="/about">About</Link>
                        <Link className='link-item' to="/services">Services</Link>
                        <Link className='link-item' to="/appointments">Appointments</Link>
                        <Link className='link-item' to="/doctors">Doctors</Link>
                        <Link className='link-item' to="/department">Department</Link>
                        <Link className='link-item' to="/contact">Contact||</Link>
                        {user?.email ?
                            <Link className='link-item' to='/home'><button className='log-btn me-3' onClick={logOut} variant="light">Log Out</button></Link>
                            :
                            <Link className='link-item' to='/login'><button className='log-btn' variant="light">Log In</button></Link>
                        }

                    </Nav>
                    <Navbar.Text>

                        <div className="user-information d-flex align-items-center">
                            <div className="user-email">
                                {
                                    user?.displayName ? <p></p> : <p className=''>{user.email}</p>
                                }
                            </div>
                            <p className='user-name'>{user.displayName}</p>

                            {
                                user?.photoURL ? < img className='user-img' src={user?.photoURL} alt="" />
                                    : <p></p>
                            }
                        </div>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>


        </>
    );
};

export default Menubar;
