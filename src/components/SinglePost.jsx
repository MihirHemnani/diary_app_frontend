import { useState } from "react";
import React from "react";
import { format } from 'date-fns'
import { usePostsContext } from "../hooks/usePostsContext.js";
import './PostDetails.css'
import { useAuthContext } from "../hooks/useAuthContext.js";
import { useForm } from "react-hook-form";
import swal from "sweetalert";

export const SinglePost = ({ post }) => {
    const { user } = useAuthContext();
    const { dispatch } = usePostsContext();
    const [contentEdit, setContent] = useState(false);
    // eslint-disable-next-line
    const { register, handleSubmit, setError, reset, formState: { errors } } = useForm();

    const [singlepost, setSinglePost] = useState(
        {
            postTitle: post.title,
            postDate: post.date,
            postContent: post.content
        }
    )

    const handleEdit = async (event) => {
        event.preventDefault();
        setContent(true);
    }

    const onSubmit = async (data) => {
        const postEdit = {
            date: data.date,
            title: data.title,
            content: data.content
        }

        try {
            // const response = await fetch(`http://localhost:8000/api/posts/${post._id}`, {
            const response = await fetch(`https://dairy-post-api.onrender.com/api/posts/${post._id}`, {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                },
                body: JSON.stringify(postEdit)
            });

            const newPost = await response.json()

            if (response.ok) {
                dispatch({ type: 'EDIT_POST', payload: newPost })
                setContent(false)
                swal("Information", "Editted Successfully...", "info");
            } else {
                swal("Warning!", "Edit Unsuccessfull...", "error");
            }

        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <>
            {
                !contentEdit
                    ?
                    (
                        <div className="min-vh-100" style={{ position: "relative", marginTop: '8rem' }}>
                            <div className="card-body" style={{ maxWidth: "50rem", textDecoration: "none", margin: 'auto', marginTop: "2rem", textAlign: "justify" }}>
                                <h2 className="card-title mb-3" style={{ color: 'grey', textAlign: "center" }}><strong>{singlepost.postTitle}</strong></h2>
                                <p className="card-text p-1" style={{ maxWidth: "100%", whiteSpace: 'pre-wrap', overflowX: "auto" }}>
                                    {singlepost.postContent}
                                </p>
                                <button className="m-1 btn-outline-success" onClick={handleEdit}><i className="fa-solid fa-pen-to-square p-1"></i></button>
                                {/* <button className="m-1 btn-outline-danger" onClick={handleDelete}><i className="fa-sharp fa-solid fa-trash p-1"></i></button> */}
                                <hr />
                                <h6 className="card-text mt-1" >{format(new Date(singlepost.postDate), 'd MMMM, y')}</h6>
                            </div>
                        </div >
                    )

                    :
                    (
                        < div className="card min-vh-100 mt-5">
                            <h4 className="card-title mt-5 p-3 m-auto">Edit Post</h4>
                            <div className="card-body m-auto">

                                {/* floating form */}
                                <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
                                    <div className="col-md-12">
                                        <div className="form-floating">
                                            <input type="text"
                                                value={singlepost.postTitle}
                                                {...register("title", { required: 'required field' })}
                                                className="form-control" id="floatingName"
                                                onChange={(e) => setSinglePost({ ...singlepost, postTitle: e.target.value })}
                                            />
                                            <label htmlFor="floatingName">Title</label>
                                            <p>{errors.title?.message}</p>
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="col-md-12">
                                            <div className="form-floating">
                                                <input type="date"
                                                    value={singlepost.postDate}
                                                    className="form-control" id="floatingCity"
                                                    {...register("date", { required: 'required field' })}
                                                    onChange={(e) => setSinglePost({ ...singlepost, postDate: e.target.value })}
                                                />
                                                <label htmlFor="floatingCity">Date</label>
                                            </div>
                                            <p>{errors.date?.message}</p>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="form">
                                            <textarea className="form-control" placeholder='Write something here......' id="floatingTextarea"
                                                value={singlepost.postContent}
                                                style={{ height: "300px", maxHeight: "300px", minHeight: "300px", resize: "none" }}
                                                {...register("content", { required: 'required field' })}
                                                onChange={(e) => setSinglePost({ ...singlepost, postContent: e.target.value })}
                                            ></textarea>
                                            <p>{errors.content?.message}</p>
                                        </div>
                                    </div>

                                    <div className="text-center">
                                        <button type="submit" value="submit" className="btn btn-primary">SAVE</button>
                                    </div>
                                </form>

                            </div>
                        </div >
                    )
            }
        </>
    )
}