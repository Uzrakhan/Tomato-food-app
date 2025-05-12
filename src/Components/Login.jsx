import React from 'react'
import { useState } from 'react'
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function  Login() {
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            await login(email, password);
            navigate('/');
        } catch(err) {
            alert(err.message)
        }
    }
  return (
    <div className='bg-blue-500 w-screen h-screen'>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
            <input
             type='email'
             placeholder='Email'
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             required
            />
            <input 
             type='password'
             placeholder='Password'
             value={password}
             onChange={(e) => setPassword(e.target.value)}
             required
            />
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}
