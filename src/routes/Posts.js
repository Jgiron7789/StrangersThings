import { useEffect, useState } from 'react';
// import { useOutletContext } from "react-router-dom";
import { getPosts } from '../utils/API';
const BASE_URL = 'https://strangers-things.herokuapp.com/api/2209-ftb-pt-web-pt';

const Posts = () => {
    const [posts, setPosts] = useState([]);

//  const [token] = useOutletContext();
    
    useEffect(() => {
        const getPosts= async () => {
            const response = await fetch(`${BASE_URL}/posts`);
            const data = await response.json();
            setPosts(data);
            };
            getPosts();
        }, []);
        console.log(posts.data);
            return (
            <h1>Posts</h1>
            // <>
            //     {posts.map(post => 
            //     <>{post.location}</>)}
            // </>
            //  { postData.map ((post) => (

            // ))}
            
            );
        // if (!posts.length) return <h3> Loading . . . </h3>;

        // return (
        //     <div>
        //         {posts.map((title, index) => (
        //             <h3>{posts.title}</h3>
        //             ))}
        //             console.log(posts.title);
        //     </div>
        // );
        // return 
        //     <h1>Posts</h1>
        //     {posts.map(post => <div key={post.id}>
        //             <h3>{post.title}</h3>
        //         </div>)
        //     }    
        };

export default Posts;