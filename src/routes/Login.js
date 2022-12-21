import { useState } from 'react';
import { loginUser } from '../utils/API';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    
    async function submitLogin(e) {
        e.preventDefault();
        if (!username) {
            setErrorMessage("Username is required");
        } else if (password.length < 8) {
            setErrorMessage("Password needs to be a minimum of 8 characters");
        } else if (password !== confirmPassword) {
            setErrorMessage("Password must match");
        } else {
            setErrorMessage("");
            const user = {
                user: {
                    username,
                    password
                }
            };
            const response = await loginUser(user);
            if(response.error) {
                setErrorMessage(response.error.message);
            } else {
                localStorage.setItem('token',response.data.token);
            }
        }
    }
    return (
        <section>
        <h1>Howdy Friend!</h1>
        <h2>Login</h2>
        <form onSubmit={submitLogin}>
            <label>Username</label>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
            <label>Password</label>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            <label>Confirm Password</label>
            <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                />
            <button type ="submit">Login</button>
            <p>{errorMessage}</p>
        </form>
    </section>
)
}

export default Login;