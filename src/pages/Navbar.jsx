import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark fixed-top p-2">
                <div className="container-fluid">
                    <Link to='/' className="navbar-brand">Dairy</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            {/* <li className="nav-item">
                                <Link to='/createpost' className="nav-link" aria-current="page">Create</Link>
                                <Link to='/' className="navbar-brand active">Dairy</Link>
                            </li> */}
                        </ul>
                        <form className="d-flex">
                            <ul className="navbar-nav">

                                <li className="nav-item">
                                    <Link to='/createpost' className="nav-link" aria-current="page">Create</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/login' className="nav-link">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/register' className="nav-link">Register</Link>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar