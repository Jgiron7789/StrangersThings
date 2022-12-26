import { useState, useEffect } from "react";
import { Outlet, useOutletContext, useNavigate } from "react-router-dom";
import { loginUser } from "../utilities/api";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [token, setToken] = useOutletContext();
    const navigate = useNavigate();

    useEffect(() => {
        if(token) {
            navigate('/posts');
        }
    }, [token, navigate])

    async function submitLogin(event) {
        event.preventDefault();
        if (!username) {
            setErrorMessage("Username is required!");
        } else if(password.length < 8) {
            setErrorMessage("Password needs to be a minimum of 8 characters!");
        } else {
            setErrorMessage("");
            const user = {
                user: {
                    username,
                    password
                }
            }
            const response = await loginUser(user);
            if(response.error) {
                setErrorMessage(response.error.message)
            } else {
                localStorage.setItem('token', response.data.token);
                setToken(response.data.token);
            }
        }
    }
    return (
        <section className="loginSection">
            <h1>Login To Your Account</h1>
            <form onSubmit={submitLogin} >
                <label>Username</label>
                <input 
                    type="text" 
                    value={username} 
                    onChange={(event) => setUsername(event.target.value)} 
                />
                <label>Password</label>
                <input 
                    type="password" 
                    value={password} 
                    onChange={(event) => setPassword(event.target.value)}
                />
                <button type="submit">Login</button>
                <p>{errorMessage}</p>
            </form>
            <Outlet />
        </section>
    );
}

export default Login;
