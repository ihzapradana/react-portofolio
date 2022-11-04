import '../home.css' 

function Navbar() {
    return (
    <nav>
        <a href="" className="logo">Hims</a>
        <ul className="nav-menu">
            <li><a href="">Home</a></li>
            <li><a href="about/">About Me</a></li>
            <li><a href="profile/">Portofolio</a></li>
            <li><a href="block/">Block</a></li>
        </ul>
    </nav>
    );
};

export default Navbar;