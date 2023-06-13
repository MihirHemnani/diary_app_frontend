import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to='/' className="navbar-brand">Dairy</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='/' className="nav-link active" aria-current="page">Home</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <Link to='/login' className="btn btn-outline-success" style={{ marginRight: "1rem" }} >Login</Link>
                            <Link to='/register' className="btn btn-outline-success">Register</Link>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar