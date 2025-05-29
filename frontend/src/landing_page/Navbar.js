import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="container-fluid p-0">
            <nav className="navbar navbar-expand-lg border-bottom" style={{ backgroundColor: '#fff' }}>
                <div className="container-fluid">

                    {/* Logo */}
                    <Link className="navbar-brand" to="/">
                        <img src="media/images/logo.svg" alt="logo" style={{ width: "120px" }} />
                    </Link>

                    {/* Sidebar Menu Icon for Small Screens */}
                    <button className="btn d-lg-none" type="button">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Nav Links */}
                    <div className="collapse navbar-collapse justify-content-end" id="navbarContent">
                        <ul className="navbar-nav gap-4 align-items-center">
                            <li className="nav-item">
                                <Link className="nav-link text-dark" to="/signup">Signup</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-dark" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-dark" to="/products">Products</Link>  {/* plural */}
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-dark" to="/pricing">Pricing</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-dark" to="/support">Support</Link>
                            </li>

                            {/* Sidebar Icon for Desktop */}
                            <li className="nav-item d-none d-lg-block">
                                <button className="btn p-0">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
