// Navbar.js
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <Link to="/AddCity">Add City</Link> | 
            <Link to="/CityList">City List</Link>
        </div>
    );
}

export default Navbar;
