import React from 'react'
import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function Register() {
    const [name,setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { register } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();

        try{
            await register(name,email,password);
            navigate('/');
        } catch(err) {
            alert(err.message)
        }
    }
  return (
    <div className='auth-form'>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
            <input 
             type='name'
             placeholder='Name'
             value={name}
             onChange={(e) => setName(e.target.value)}
             required
            />
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
            <button type='submit'>Register</button>
        </form>
    </div>
  )
}

