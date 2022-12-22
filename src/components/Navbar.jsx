 import { Link } from 'react-router-dom';
import '../NavBar.css'

function Navbar() {
    return (
    <nav>
        <a href="" className="logo">Hims</a>
        <ul className="nav-menu">
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/about"}>About Me</Link></li>
            <li><Link to={"/profile"}>Portofolio</Link></li>
            <li><Link to={"/blog"}>Block</Link></li>
        </ul>
    </nav>
    );
};

export default Navbar;