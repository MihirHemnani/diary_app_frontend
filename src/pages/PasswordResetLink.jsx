import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import { useForm } from 'react-hook-form'
import Footer from './Footer'
import Navbar from './Navbar'
import swal from 'sweetalert'

const PasswordResetLink = () => {
    // eslint-disable-next-line
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const onSubmit = async (data) => {
        // console.log(data)
        const email = data.email;
        try {
            const response = await fetch(`https://dairy-post-api.onrender.com/api/user/sendresetlink`, {
                // const response = await fetch(`http://localhost:8000/api/user/sendresetlink`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email })
            })

            // eslint-disable-next-line
            const json = await response.json()
            // console.log(json)

            if (response.ok) {
                reset({ username: "", email: "", password: "" });
                swal("Success!", "Email Sent...", "success").then(() => {
                    navigate(`/api/password_otp/${json.id}/${json.token}`);
                })

            } else {
                swal("Warning!", json.error, "warning");
            }

        } catch (err) {
            swal("Oops!", "Something went wrong...", "error");
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
                            <div className="col-lg-4 col-md-6  d-flex flex-column align-items-center justify-content-center">

                                {/* <div className="d-flex justify-content-center py-4">
                                    <a href="index.html" className="logo d-flex align-items-center w-auto">
                                        <span className="d-none d-lg-block">NiceAdmin</span>
                                    </a>
                                </div> */}

                                <div className="card">

                                    <div className="card-body" style={{ textDecoration: 'none' }}>

                                        <div className="pt-4 pb-2">
                                            <h5 className="card-title text-center pb-0 fs-4">Password Reset</h5>
                                        </div>

                                        <form className="row g-3 needs-validation" onSubmit={handleSubmit(onSubmit)}>

                                            <div className="col-12">
                                                <label htmlFor="yourEmail" className="form-label">Email</label>
                                                <div className="input-group has-validation">
                                                    <input type="email"
                                                        autoComplete="off"
                                                        {...register("email", { required: 'required field' })}
                                                        className="form-control" id="yourEmail" />
                                                </div>
                                                <p>{errors.email?.message}</p>
                                            </div>

                                            <div className="col-12">
                                                <button className="btn btn-success w-100" type="submit">Submit</button>
                                            </div>
                                            <div className="col-12">
                                                <Link to="/" className='btn btn-primary w-100'>Go Back</Link>
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

export default PasswordResetLink