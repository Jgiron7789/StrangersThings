import { useState } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import { newPost } from "../utilities/api";

const CreatePost = () => {
    const [token] = useOutletContext();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [willDeliver, setWillDeliver] = useState(false);
    const [location, setLocation] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    async function createNewPost(event) {
        event.preventDefault();
        if (!title) {
            setErrorMessage("Title required!");
        } else if(!description) {
            setErrorMessage("Please include a brief description.")
        } else {
            setErrorMessage("");
            const post = {
                post: {
                    title,
                    price,
                    description,
                    willDeliver,
                    location,
                }
            }
            const response = await newPost(post, token);
            console.log(response);
        }
        setTitle('');
        setDescription('');
        setPrice('');
        setWillDeliver(false);
        setLocation('');
        setErrorMessage('Post created!')
    }

    return (
        <div className="createPostDiv" >
            <h2>Create New Post</h2>
            <form onSubmit={createNewPost} >
                <label>Title</label>
                <input 
                    type="text" 
                    value={title} 
                    onChange={(event) => setTitle(event.target.value)} 
                />
                <label>Price</label>
                <input 
                    type="text" 
                    value={price} 
                    onChange={(event) => setPrice(event.target.value)}
                />
                <label>Description</label>
                <input 
                    type="text" 
                    value={description} 
                    onChange={(event) => setDescription(event.target.value)}
                />
                <label>Location</label>
                <input 
                    type="text" 
                    value={location} 
                    onChange={(event) => setLocation(event.target.value)}
                />
                <label>Will you deliver?</label>
                <input
                    type="checkbox"
                    checked={willDeliver}
                    onChange={() => willDeliver ? setWillDeliver(false) : setWillDeliver(true)}
                />
                <button type="submit">Submit</button>
                <p>{errorMessage}</p>
            </form>
            <Outlet />
        </div>
    )
}
export default CreatePost;