import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/Login/Login';
import About from './components/About/About';
import Appointments from './components/Appointments/Appointments';
import Menubar from './components/Sheared/Menubar/Menubar';
import Doctors from './components/Doctors/Doctors';
import Department from './components/Department/Department';
import Footer from './components/Sheared/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import Contact from './components/Contact/Contact';
import ServiceMain from './components/Home/ServicesMain/ServiceMain';
import ServiceDetails from './components/Home/ServiceDetails/ServiceDetails';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/about'>
            <Menubar></Menubar>
            <About></About>
            <Footer></Footer>
          </Route>
          <Route path='/services'>
            <Menubar></Menubar>
            <ServiceMain></ServiceMain>
            <Footer></Footer>
          </Route>
          <PrivateRoute path='/serviceDetails/:id'>
            <Menubar></Menubar>
            <ServiceDetails></ServiceDetails>
            <Footer></Footer>
          </PrivateRoute>
          <Route path='/appointments'>
            <Menubar></Menubar>
            <Appointments></Appointments>
            <Footer></Footer>
          </Route>
          <Route path='/doctors'>
            <Menubar></Menubar>
            <Doctors></Doctors>
            <Footer></Footer>
          </Route>
          <Route path='/department'>
            <Menubar></Menubar>
            <Department></Department>
            <Footer></Footer>
          </Route>
          <Route path='/contact'>
            <Menubar></Menubar>
            <Contact></Contact>
            <Footer></Footer>
          </Route>
          <Route path='/login'>
            <Menubar></Menubar>
            <Login></Login>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>


  );
}

export default App;
