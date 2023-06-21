import React from "react";
import { Link } from "react-router-dom";
import { format } from 'date-fns'
import { usePostsContext } from "../hooks/usePostsContext.js";
import './PostDetails.css'
import { useAuthContext } from "../hooks/useAuthContext.js";
import swal from "sweetalert";

const PostDetails = ({ post }) => {
    // console.log(post);
    const { user } = useAuthContext();
    const { dispatch } = usePostsContext();


    const handleDelete = async (event) => {
        event.preventDefault();
        try {
            // const response = await fetch(`http://localhost:8000/api/posts/${post._id}`, {
            const response = await fetch(`https://dairy-post-api.onrender.com/api/posts/${post._id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            });

            const json = await response.json();

            if (response.ok) {
                dispatch({ type: 'DELETE_POST', payload: json })
                swal("Success!", "Post Deleted successfully...", "success");
            } else {
                swal.fire("Oops!", json.error, "error");
            }

        } catch (err) {
            console.log(err);
        }
    }

    return (
        // <li className="mt-3" style={{ maxWidth: '18rem' }}>
        <>
            <div className="col-lg-3 col-md-6 col-sm-12 mt-3 mb-2">
                <Link to={`/api/posts/${post._id}`} className="card" style={{ maxWidth: '20rem', textDecoration: "none", margin: 'auto' }}>
                    <div className="card-body card-colour">
                        <h5 className="card-title" style={{ color: 'black', textAlign: "center" }}>{post.title}</h5>
                        <h6 className="card-text p-1" style={{ color: 'rgba(0, 0, 0, 0.5)', whiteSpace: "pre-wrap" }}>
                            {post.content.substring(0, 150) + "..."}
                        </h6>
                        {/* <button className="m-1 btn-outline-success" onClick={`/api/posts/${post._id}`}><i className="fa-solid fa-pen-to-square p-1"></i></button> */}
                        <button className="m-1 btn-outline-danger" onClick={handleDelete}><i className="fa-sharp fa-solid fa-trash p-1"></i></button>

                        <hr style={{ color: 'rgba(0, 0, 0, 0.5)' }} />
                        <h6 className="card-text mt-1" style={{ color: 'rgba(0, 0, 0, 0.5)' }}>{format(new Date(post.date), 'd MMMM, y')}</h6>
                    </div>
                </Link>
            </div>

        </>
    )
}

export default PostDetails




/*
 {
                                setContentFull === "NO"
                                    ?
                                    post.content.substring(0, 50) + "..."
                                    :
                                    post.content

                            }
*/