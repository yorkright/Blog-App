// import { Link } from 'react-router-dom';
import '../Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <a href='/' className="navbar-logo">
                <h1>Infra<span>B</span>log</h1>
            </a>
            <ul className="navbar-links">
                <li><a href="/home">Blogs</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Posts</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;