import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PostDetails from "../components/PostDetails";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Spinner } from "../components/Spinner";
import { useAuthContext } from "../hooks/useAuthContext";

const DairyPost = () => {
    const { user } = useAuthContext();
    const { id } = useParams();
    const [post, setPost] = useState(null);
    useEffect(() => {
        const fetchPost = async () => {
            // fetch
            try {
                const response = await fetch(`http://localhost:8000/api/posts/${id}`, {
                    headers: {
                        'Authorization': `Bearer ${user.token}`
                    }
                });
                const json = await response.json();
                // console.log(json);
                if (response.ok) {
                    setPost(json);
                }
            } catch (err) {
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
                    <PostDetails key={post._id} post={post} setContentFull="YES" />
            }
            <Footer />
        </>
    )
}

export default DairyPost