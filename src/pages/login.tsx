import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5003/login', {
                username,
                password,
            });
            if (response.status === 200) {
                alert('Login successful!');
                //TODO: Redirect to the home page or other desired page

                if (isLoginSuccessful) {
                    navigate("/home"); 
                }
            } else {
                alert('Login failed.');
            }
        } catch (error) {
            console.error('Error connecting to the server:', error);
        }
    }




    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </label>
            <label>
                Password:
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
