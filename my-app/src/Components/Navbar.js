import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
return (
    <div>
<ul>
<li><Link to="/">Home</Link></li>
<li><Link to="/about">About</Link></li>
<li><Link to="/contact">Contact</Link></li>
<li><Link to="/user/123">User Profile</Link></li>
</ul>
</div>
);
}
export default Navbar;
