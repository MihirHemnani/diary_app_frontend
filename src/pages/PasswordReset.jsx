import React, { useEffect } from 'react'
import { Link, useNavigate, useParams } from "react-router-dom"
import { useForm } from 'react-hook-form'
import swal from 'sweetalert';

const PasswordReset = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    // eslint-disable-next-line
    const history = useNavigate();
    const { id, token } = useParams();

    const userValid = async () => {
        // const response = await fetch(`http://localhost:8000/api/user/${id}/${token}`, {
        const response = await fetch(`https://dairy-post-api.onrender.com/api/user/${id}/${token}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })

        const data = await response.json();

        if (response.ok) {
            console.log(data);
        } else {
            history("*")
        }
    }

    useEffect(() => {
        userValid()
    }, [])

    const onSubmit = async (data) => {
        // console.log(data)
        const { newpassword, confirmpassword } = data;
        if (newpassword === confirmpassword) {
            try {
                const response = await fetch(`https://dairy-post-api.onrender.com/api/user/${id}/${token}`, {
                    // const response = await fetch(`http://localhost:8000/api/user/${id}/${token}`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ newpassword })
                })

                // eslint-disable-next-line
                const json = await response.json()
                if (response.ok) {
                    reset({ newpassword: "", confirmpassword: "" });
                    swal("Success!", "Password Changed...", "success");

                } else {
                    swal("Warning!", json.message, "warning");
                }
            } catch (err) {
                swal("Oops!", "err", "error");
                console.log(err);
            }
        } else {
            swal("Warning!", "The new password and confirm password do not match.\nPlease make sure you enter the same password in both fields.", "warning");
        }
    }
    return (
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
                                        <h5 className="card-title text-center pb-0 fs-4">Reset Password</h5>
                                    </div>

                                    <form className="row g-3 needs-validation" onSubmit={handleSubmit(onSubmit)}>

                                        <div className="col-12">
                                            <label htmlFor="yourEmail" className="form-label">New Password</label>
                                            <div className="input-group has-validation">
                                                <input type="text"
                                                    autoComplete="off"
                                                    {...register("newpassword", { required: 'required field' })}
                                                    className="form-control" id="yourEmail" />
                                            </div>
                                            <p>{errors.newpassword?.message}</p>
                                        </div>

                                        <div className="col-12">
                                            <label htmlFor="yourPassword" className="form-label">Confirm Password</label>
                                            <div className="input-group has-validation">
                                                <input type="password"
                                                    autoComplete="off"
                                                    {...register("confirmpassword", { required: 'required field' })}
                                                    className="form-control" id="yourPassword" />
                                            </div>
                                            <p>{errors.confirmpassword?.message}</p>
                                        </div>

                                        <div className="col-12">
                                            <button className="btn btn-success w-100" type="submit">Submit</button>
                                        </div>

                                        <div className="col-12">
                                            <Link to="/" className='btn btn-primary w-100'>Go Back to Login</Link>
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
    )
}

export default PasswordReset