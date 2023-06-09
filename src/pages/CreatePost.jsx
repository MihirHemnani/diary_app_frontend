import { useForm } from 'react-hook-form'
import { usePostsContext } from '../hooks/usePostsContext';
import Navbar from "./Navbar"
import Footer from './Footer';
import { useAuthContext } from '../hooks/useAuthContext';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
    const navigate = useNavigate();
    const { dispatch } = usePostsContext();
    const { user } = useAuthContext();
    // eslint-disable-next-line
    const { register, handleSubmit, setError, reset, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        const post = {
            date: data.date,
            title: data.title,
            content: data.content
        }

        try {
            // const response = await fetch(`http://localhost:8000/api/posts`, {
            const response = await fetch(`https://dairy-post-api.onrender.com/api/posts`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                },
                body: JSON.stringify(post)
            });

            const newPost = await response.json()

            if (response.ok) {
                reset({ title: "", date: new Date().toISOString().slice(0, 10), content: "" });
                dispatch({ type: 'CREATE_POST', payload: newPost })
                swal("Success!", "Post Created Successfully", "success").then(() => {
                    navigate(`/api/posts/${newPost._id}`);
                })
            } else {
                swal("Oops!", newPost.error, "error");

            }

        } catch (err) {
            swal("Oops!", "Something went wrong...", "error");
            console.log(err.message);
        }
    }

    return (
        <>
            <Navbar />
            <div className="card min-vh-100 mt-5">
                <h5 className="card-title mt-5 p-3 m-auto">Create New Post</h5>
                <div className="card-body m-auto">

                    {/* floating form */}
                    <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
                        <div className="col-md-12">
                            <div className="form-floating">
                                <input type="text"
                                    {...register("title", { required: 'required field' })}
                                    className="form-control" id="floatingName" />
                                <label htmlFor="floatingName">Title</label>
                                <p>{errors.title?.message}</p>
                            </div>
                        </div>

                        <div className="col-md-12">
                            <div className="col-md-12">
                                <div className="form-floating">
                                    <input type="date" className="form-control" id="floatingCity"
                                        {...register("date", { required: 'required field' })}
                                        defaultValue={new Date().toISOString().slice(0, 10)}
                                        readOnly
                                    />
                                    <label htmlFor="floatingCity">Date</label>
                                </div>
                                <p>{errors.date?.message}</p>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="form">
                                <textarea className="form-control" placeholder='Write something here......' id="floatingTextarea"
                                    style={{ height: "300px", maxHeight: "300px", minHeight: "300px", resize: "none" }}
                                    {...register("content", { required: 'required field' })}
                                ></textarea>
                                <p>{errors.content?.message}</p>
                            </div>
                        </div>

                        <div className="text-center">
                            <button type="submit" value="submit" className="btn btn-primary">POST</button>
                        </div>
                    </form>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default CreatePost