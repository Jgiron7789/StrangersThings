import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { displayPosts } from "../utilities/api";
import SinglePost from "../components/singlePost";

const Posts = () => {
    const [token] = useOutletContext();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function displayAllPosts() {
            const results = await displayPosts(token);
            setPosts(results);
        }
        displayAllPosts();
    }, [token]);

    return (
        <div className="postsDiv">
            <h1 className="posts">Posts</h1>
            <section>
                {posts.map((data) => {
                    return(
                        < SinglePost 
                            token={token}
                            key={data._id}
                            id={data._id}
                            title={data.title}
                            description={data.description}
                            price={data.price}
                            location={data.location}
                            isAuthor={data.isAuthor}
                            willDeliver={data.willDeliver}
                            setPosts={setPosts}                            
                        />
                    )
                })}
            </section>
        </div>
    )
}
export default Posts;