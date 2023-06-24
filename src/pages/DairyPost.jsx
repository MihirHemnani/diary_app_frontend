import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Spinner } from "../components/Spinner";
import { useAuthContext } from "../hooks/useAuthContext";
import { SinglePost } from "../components/SinglePost";
import swal from "sweetalert";

const DairyPost = () => {
    const { user } = useAuthContext();
    const { id } = useParams();
    const [post, setPost] = useState(null);
    useEffect(() => {
        const fetchPost = async () => {
            // fetch
            try {
                const response = await fetch(`https://dairy-post-api.onrender.com/api/posts/${id}`, {
                    // const response = await fetch(`http://localhost:8000/api/posts/${id}`, {
                    headers: {
                        'Authorization': `Bearer ${user.token}`
                    }
                });
                const json = await response.json()
                if (response.ok) {
                    setPost(json);
                }
            } catch (err) {
                swal("Oops!", "Something went wrong...", "error");
                console.log(err);
            }
        }
        fetchPost()
    }, [user, id])

    return (
        <>
            <Navbar />
            {
                post === null
                    ?
                    <Spinner />
                    :
                    <SinglePost key={post._id} post={post} />
            }
            <Footer />
        </>
    )
}

export default DairyPost