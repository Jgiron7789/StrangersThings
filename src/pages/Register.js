import { useState, useEffect } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import { registerUser } from "../utilities/api";

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [token, setToken] = useOutletContext();
    const navigate = useNavigate();

    useEffect(() => {
        if(token) {
            navigate('/posts');
        }
    }, [token, navigate])

    async function submitRegistration(event) {
        event.preventDefault();
        if (!username) {
            setErrorMessage("Username is required!");
        } else if(password.length < 8) {
            setErrorMessage("Password needs to be a minimum of 8 characters!");
        } else if(password !== confirmPassword) {
            setErrorMessage("Passwords must match!");
        } else {
            setErrorMessage("");
            const user = {
                user: {
                    username,
                    password
                }
            }
            const response = await registerUser(user);
            if(response.error) {
                setErrorMessage(response.error.message)
            } else {
                localStorage.setItem('token', response.data.token);
                setToken(response.data.token);
            }
        }
    }
    return (
        <section className="registerSection">
            <h1>Create Account</h1>
            <form onSubmit={submitRegistration} >
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
                <label>Confirm Password</label>
                <input 
                    type="password" 
                    value={confirmPassword} 
                    onChange={(event) => setConfirmPassword(event.target.value)}
                />
                <button type="submit">Register</button>
                <p>{errorMessage}</p>
            </form>
        </section>
    )
};

export default Register;
