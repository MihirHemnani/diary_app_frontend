import { useEffect } from "react"
// using hook
import { usePostsContext } from "../hooks/usePostsContext.js"
import PostDetails from "../components/PostDetails";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Spinner } from "../components/Spinner.jsx";
import { useAuthContext } from "../hooks/useAuthContext.js";

const Home = () => {
    // don't use useState for global state management
    // const [posts, setposts] = useState([]);

    const { user } = useAuthContext();
    const { posts, dispatch } = usePostsContext();

    // use effect hook => so that when page is rendered first time data is being fetched 
    // this one time fetch is possible by passing an empty array as argument to use effect

    useEffect(() => {
        // async and await
        const fetchPosts = async () => {
            // fetch from api
            try {
                const response = await fetch("http://localhost:8000/api/posts", {
                    headers: {
                        'Authorization': `Bearer ${user.token}`
                    },
                });
                const json_form = await response.json()

                if (response.ok) {
                    // setposts(json_form);
                    dispatch({ type: 'SET_POSTS', payload: json_form })
                }

            } catch (err) {
                console.log(err);
            }

        }

        // calling the function
        fetchPosts();
    }, [user, dispatch])


    return (
        <>
            <Navbar />
            {posts === null
                ?
                <Spinner />
                :
                <div className="min-vh-100" style={{ position: "relative", marginTop: '5rem' }}>
                    <h1 className="p-2" style={{ textAlign: "center" }}>Posts</h1>
                    <div className="row mb-3" style={{ marginLeft: "0", marginRight: "0" }}>
                        {
                            posts.length === 0
                                ?
                                (
                                    <p style={{ textAlign: 'center' }}>No posts to display</p>
                                )
                                :
                                (
                                    posts.map((post) => (
                                        <PostDetails key={post._id} post={post} setContentFull="NO" />
                                    ))
                                )
                        }
                    </div>
                </div>
            }

            <Footer />
        </>
    )
}

export default Home