import {Link} from 'react-router-dom';
import '../Styles/Navbar.css'
import logo from '../Assets/logo.jpg';

const Navbar = () => {
    return (
        <div className='navbar'>
            <img src={logo} alt ="The Common Room" />
            <div className="rightSide">
                <Link to='/'> Home </Link>
                <Link to='/Events'> Events </Link>
                <Link to='/Services'> Services </Link>
                <Link to='/About'> About </Link>
                <Link to='/Contactus'> Contact </Link>
                <Link to='/Register'> Register </Link>
            </div>
        </div>
    )
}
export default Navbar;
