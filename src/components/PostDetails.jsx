import React, { useState } from "react";
import { Link } from "react-router-dom";
import './PostDetails.css'

const PostDetails = ({ post }) => {
    // console.log(post);

    const [deleteAlert, setAlert] = useState("NO");

    const handleDelete = async (event) => {
        event.preventDefault();
        const response = await fetch(`http://localhost:8000/api/posts/${post._id}`, {
            method: 'DELETE'
        });

        const body = await response.text();

        if (response.ok) setAlert("YES");
    }

    return (
        // <li className="mt-3" style={{ maxWidth: '18rem' }}>
        <>
            {
                deleteAlert === "YES" &&
                <div className="alert alert-primary" role="alert">
                    Post Deleted
                </div>
            }
            <div className="col-lg-3 col-md-6 col-sm-12 mt-3 mb-3">
                <Link to={`/api/posts/${post._id}`} className="card" style={{ maxWidth: '20rem', textDecoration: "none", margin: 'auto' }}>
                    <div className="card-body card-colour">
                        <h5 className="card-title" style={{ color: 'black' }}>{post.title}</h5>
                        <h6 className="card-text p-1" style={{ color: 'rgba(0, 0, 0, 0.5)' }}>{post.content.substring(0, 50) + "..."}</h6>
                        <button className="m-1 btn-outline-success" onClick={`/api/posts/${post._id}`}><i className="fa-solid fa-pen-to-square p-1"></i></button>
                        <button className="m-1 btn-outline-danger" onClick={handleDelete}><i className="fa-sharp fa-solid fa-trash p-1"></i></button>
                        <hr style={{ color: 'rgba(0, 0, 0, 0.5)' }} />
                        <h6 className="card-text mt-1" style={{ color: 'rgba(0, 0, 0, 0.5)' }}>{post.date}</h6>
                    </div>
                </Link>
            </div>

        </>
    )
}

export default PostDetails