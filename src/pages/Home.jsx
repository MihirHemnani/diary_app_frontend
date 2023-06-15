import { useEffect, useState } from "react"
import PostDetails from "../components/PostDetails";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Home = () => {
    const [posts, setposts] = useState([]);

    // use effect hook => so that when page is rendered first time data is being fetched 
    // this one time fetch is possible by passing an empty array as argument to use effect

    useEffect(() => {
        // async and await
        const fetchPosts = async () => {
            // fetch from api
            try {
                const response = await fetch("http://localhost:8000/api/posts");
                const json_form = await response.json()

                if (response.ok) {
                    setposts(json_form);
                }

            } catch (err) {
                console.log(err.message);
            }

        }

        // calling the function
        fetchPosts();
    }, [posts])

    if (posts.length === 0) {
        return (
            <div className="d-flex justify-content-center mt-5">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">No Posts</span>
                </div>
                <p style={{ marginLeft: "0.5rem" }}>Loading...</p>
            </div>
        )
    }

    return (
        <>
            <Navbar />
            <div className="min-vh-100" style={{ position: "relative", marginTop: '4rem' }}>
                <h1 className="p-2">Posts</h1>
                <div className="row" style={{ marginLeft: "0", marginRight: "0" }}>
                    {
                        posts.map((post) => (
                            <PostDetails key={post._id} post={post} />
                        ))
                    }
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Home