import { useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";

export default function Root() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem('token');
    setToken('');
    navigate('/posts');
}; 

  return (
    <div>
        <header>
            <nav> 
                <Link className="link" to="posts">Posts</Link>
                {token && <Link className="link" to="createPost">Create-Post</Link>}
                {token && <Link className="link" to="profile">Profile</Link>}
                {token && <button onClick={() => logout(token, setToken)} >Logout</button>}
                {!token && <Link className="link" to="login">Login</Link>}
                {!token && <Link className="link" to="register">Register</Link>}
            </nav>
        </header>
        <main className="mainPage">
            <h1>Stranger's Things</h1>
            <Outlet context={[token, setToken]} />
        </main>

        <footer>Stranger's Things 2022</footer>
    </div>
  );
}