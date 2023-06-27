import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";

const Navbar = () => {
    const { user } = useAuthContext()

    const { logout } = useLogout();
    const handleLogout = () => {
        logout()
    }
    // console.log(user)

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark fixed-top" style={{ borderRadius: "2rem", marginTop: '1rem' }}>
                <div className="container-fluid" style={{ textAlign: 'center' }}>
                    <Link to='/' className="navbar-brand"><img style={{ width: '2.5rem', height: '2.5rem' }}
                        src="https://w7.pngwing.com/pngs/436/218/png-transparent-diary-illustration-diary-diary-and-pen-pencil-text-happy-birthday-vector-images.png" alt="dairy_logo" /></Link>
                    <Link to='/' className="navbar-brand"><h2 style={{ marginLeft: "1rem" }}>Dairy</h2></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-auto">

                        </ul>
                        <ul className="navbar-nav mt-1">
                            {user ?
                                (

                                    <>
                                        <li className="nav-item">
                                            <Link to='/' className="nav-link" aria-current="page">Home</Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link to='/api/createpost' className="nav-link" aria-current="page">Create</Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link to='/api/user' className="nav-link" aria-current="page">User</Link>
                                        </li>

                                        <li className="nav-item">
                                            <button type="button" className="btn btn-danger" onClick={handleLogout} style={{ marginRight: '1rem', marginLeft: '1rem' }}>Logout</button>
                                        </li>
                                    </>

                                ) :
                                (
                                    <>
                                        <li className="nav-item">
                                            <Link to='/api/login' className="nav-link">Login</Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link to='/api/register' className="nav-link">Register</Link>
                                        </li>

                                    </>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar