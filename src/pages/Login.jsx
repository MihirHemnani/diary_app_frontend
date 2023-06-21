import { Link } from "react-router-dom"
import { useForm } from 'react-hook-form'
import { useLogin } from '../hooks/useLogin';
import Navbar from "./Navbar"
import Footer from "./Footer"

const Login = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    // eslint-disable-next-line
    const { login } = useLogin();

    const onSubmit = async (data) => {
        // console.log(data)
        await login(data.email, data.password)
        reset({ email: '', password: '' })
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
                                            <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
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
                                                <label htmlFor="yourPassword" className="form-label">Password</label>
                                                <div className="input-group has-validation">
                                                    <input type="password"
                                                        autoComplete="off"
                                                        {...register("password", { required: 'required field' })}
                                                        className="form-control" id="yourPassword" />
                                                </div>
                                                <p>{errors.password?.message}</p>
                                            </div>


                                            <div className="col-12">
                                                <button className="btn btn-primary w-100" type="submit">Login</button>
                                            </div>
                                            <div className="col-12">
                                                <p className="small mb-0">Don't have account? <Link to="/api/register">Create an account</Link></p>
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
