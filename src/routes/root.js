import { useState } from 'react';
import { Outlet, Link } from "react-router-dom";

export default function Root() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  function logout() {
    localStorage.removeItem('token');
    setToken('');
  }
  return (
    <div>
        <header>
          <h3 className='strangersTitle'>Stranger's Things</h3>
            <ul>
            <nav>
                <Link to="posts">Posts</Link>
                {token ? <Link to="profile">Profile</Link>: ''}
                {!token ? <Link to="register">Register</Link>: ''}
                {!token ? <Link to="login">Login</Link>: ''}
                {token ? <button onClick={logout}>Logout</button>: ''}
            </nav>
            </ul>
        </header>
        <main>
            <Outlet context ={[token, setToken]}/>
          </main>
        <footer>Copyright 2023</footer>
    </div>
  );
}
