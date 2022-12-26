import { useState } from "react";
import { deleteYourPost, displayPosts, submitMessage } from "../utilities/api";

const SinglePost = ( data ) => {
    const [message, setMessage] = useState('');
    const [sentMessage, setSentMessage] = useState('');
    async function sendMessage(event) {
        event.preventDefault();
        await submitMessage(message, data.token, data.id);
        setMessage('');
        setSentMessage('Message sent!')
        console.log(message);
    }

    async function deletePost(event) {
        event.preventDefault();
        await deleteYourPost(data.id, data.token);
        const results = await displayPosts(data.token);
        data.setPosts(results);
    }

    return (
        <div className="singlePost" key={data._id}>
        <h3> {data.title} </h3>
        <p> {data.description} </p>
        <p> Price: {data.price} </p>
        <p> Location: {data.location} </p>
        {data.willDeliver ? <p>Delivery Available</p> : <p>Delivery Not Available</p>}
        {data.token && !data.isAuthor && 
            <form onSubmit={sendMessage} >
                <input 
                type="text" 
                value={message} 
                onChange={(event) => setMessage(event.target.value)}
                />
                <button type="submit">Send Message</button>
                <p>{sentMessage}</p>
            </form>}                            
        {data.isAuthor && <button onClick={(event) => deletePost(event)} >Delete Post</button>}
    </div>
    )
}

export default SinglePost;