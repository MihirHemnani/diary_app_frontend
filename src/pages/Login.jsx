import { Link } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"

const Login = () => {
    return (
        <>
            <Navbar />
            <div className="container">

                <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

                                {/* <div className="d-flex justify-content-center py-4">
                                    <a href="index.html" className="logo d-flex align-items-center w-auto">
                                        <span className="d-none d-lg-block">NiceAdmin</span>
                                    </a>
                                </div> */}

                                <div className="card">

                                    <div className="card-body" style={{ textDecoration: 'none' }}>

                                        <div className="pt-4 pb-2">
                                            <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                                        </div>

                                        <form className="row g-3 needs-validation" novalidate>

                                            <div className="col-12">
                                                <label for="yourUsername" className="form-label">Username</label>
                                                <div className="input-group has-validation">
                                                    <span className="input-group-text" id="inputGroupPrepend">@</span>
                                                    <input type="text" name="username" className="form-control" id="yourUsername" required />
                                                    <div className="invalid-feedback">Please enter your username.</div>
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <label for="yourPassword" className="form-label">Password</label>
                                                <input type="password" name="password" className="form-control" id="yourPassword" required />
                                                <div className="invalid-feedback">Please enter your password!</div>
                                            </div>


                                            <div className="col-12">
                                                <button className="btn btn-primary w-100" type="submit">Login</button>
                                            </div>
                                            <div className="col-12">
                                                <p className="small mb-0">Don't have account? <Link to="/register">Create an account</Link></p>
                                            </div>
                                        </form>

                                    </div>
                                </div>

                                {/* <div className="credits">
                                    Designed by Mihir
                                </div> */}

                            </div>
                        </div>
                    </div>

                </section>

            </div>
            <Footer />
        </>
    )
}

export default Login