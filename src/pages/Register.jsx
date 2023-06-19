import { Link } from "react-router-dom"
import { useForm } from 'react-hook-form'
import Navbar from "./Navbar"
import Footer from "./Footer"

const Resgister = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = async data => {
        const register_user = {
            username: data.username,
            email: data.email,
            password: data.password
        }
        console.log(data);
        try {
            const response = await fetch(`https://dairy-post-api.onrender.com/api/user/signup`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(register_user)
            })

            // eslint-disable-next-line
            const body = await response.text()

            if (response.ok) {
                reset({ username: "", email: "", password: "" });
                console.log("Successfully Registered....")
            }

        } catch (err) {
            console.log(err);
        }


    }

    return (
        <>
            <Navbar />
            <div className="container">
                <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center">
                    <div className="container" style={{ marginTop: "5rem", marginBottom: "3rem" }}>
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

                                {/* <div className="d-flex justify-content-center py-4">
                                <a href="index.html" className="logo d-flex align-items-center w-auto">
                                    <img src="assets/img/logo.png" alt="" />
                                    <span className="d-none d-lg-block">NiceAdmin</span>
                                </a>
                            </div> */}

                                <div className="card">

                                    <div className="card-body">

                                        <div className="pt-1">
                                            <h5 className="card-title text-center pb-0 fs-4">Create an Account</h5>
                                            <p className="text-center small">Enter your personal details to create account</p>
                                        </div>

                                        <form className="row g-3 needs-validation" onSubmit={handleSubmit(onSubmit)}>

                                            <div className="col-12">
                                                <label htmlFor="yourUsername" className="form-label">Username</label>
                                                <div className="input-group has-validation">
                                                    <input type="text"
                                                        autoComplete="off"
                                                        {...register("username", { required: 'required field' })}
                                                        className="form-control" id="yourUsername" />
                                                    <p>{errors.username?.message}</p>
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <label htmlFor="yourEmail" className="form-label">Your Email</label>
                                                <input type="email"
                                                    {...register("email", { required: 'required field' })}
                                                    className="form-control" id="yourEmail" />
                                                <p>{errors.email?.message}</p>
                                            </div>


                                            <div className="col-12">
                                                <label htmlFor="yourPassword" className="form-label">Password</label>
                                                <input type="password"
                                                    autoComplete="off"
                                                    {...register("password", { required: 'required field' })}
                                                    className="form-control" id="yourPassword" />
                                                <p>{errors.password?.message}</p>
                                            </div>

                                            {/* <div className="col-12">
                                            <div className="form-check">
                                                <input className="form-check-input" name="terms" type="checkbox" value="" id="acceptTerms" required />
                                                    <label className="form-check-label" for="acceptTerms">I agree and accept the <a href="#">terms and
                                                        conditions</a></label>
                                                    <div className="invalid-feedback">You must agree before submitting.</div>
                                            </div>
                                        </div> */}

                                            <div className="col-12">
                                                <button className="btn btn-primary w-100" type="submit">Create Account</button>
                                            </div>
                                            <div className="col-12">
                                                <p className="small mb-0">Already have an account? <Link to="/api/login">Log in</Link></p>
                                            </div>
                                        </form>

                                    </div>
                                </div>
                                {/* 
                                <div className="credits">
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

export default Resgister