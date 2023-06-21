import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";

const Navbar = () => {
    const { user } = useAuthContext()

    const { logout } = useLogout();
    const handleLogout = () => logout();
    // console.log(user)

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark fixed-top" style={{ borderRadius: "2rem", marginTop: '1rem' }}>
                <div className="container-fluid" style={{ textAlign: 'center' }}>
                    <Link to='/' className="navbar-brand"><h2 style={{ marginLeft: "1rem" }}>Dairy</h2></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-auto">
                            {user &&
                                <li className="nav-item">
                                    <Link to='/api/createpost' className="nav-link mt-1" aria-current="page">Create</Link>
                                </li>
                            }

                        </ul>
                        {user ?
                            (
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <p className="navbar-text mt-2" style={{ marginRight: '1rem' }}>
                                            {user.email}
                                            {/* {console.log(user)} */}
                                        </p>
                                    </li>

                                    <li className="nav-item">
                                        <button type="button" className="btn btn-danger mt-2" onClick={handleLogout} style={{ marginRight: '1rem' }}>Logout</button>
                                    </li>

                                </ul>

                            ) :
                            (
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link to='/api/login' className="nav-link">Login</Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link to='/api/register' className="nav-link">Register</Link>
                                    </li>

                                </ul>
                            )
                        }
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar