import { useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";
import { myProfile } from "../utilities/api";
import jwt_decode from 'jwt-decode';

const Profile = () => {
    const [token] = useOutletContext();
    const { username } = jwt_decode(token);
    const [posts, setPosts] = useState([]);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        async function displayMyProfile() {
            const results = await myProfile(token);
            setPosts(results.posts);
            setMessages(results.messages);
        }
        displayMyProfile();
    }, [token]);

    return (
        <div className="profileDiv">
            <h1 className="welcome">Welcome { username }!</h1>
            <h2>Active Posts</h2>
            <section className="postsSection">
                {posts.map((data) => {
                    return(
                        <div className="userPost" key={data._id}>
                            { data.active && <h3> {data.title} </h3> }
                            { data.active && <h5> {data.price} </h5> }
                            { data.active && <h5> {data.description} </h5> }
                        </div>
                    )
                })}
            </section>
            <h2>Messages</h2>
            <section className="messagesSection">
                {messages.map((data) => {
                    return(
                        <div className="userMessages" key={data._id}>
                            <h4> From: {data.fromUser.username} </h4>
                            <h4> Regarding: {data.post.title} </h4>
                            <h4> Message: {data.content} </h4>
                        </div>
                    )
                })}
            </section>
        </div>
    );
}
export default Profile;