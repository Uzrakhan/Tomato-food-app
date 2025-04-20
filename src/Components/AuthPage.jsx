// src/components/AuthPage.js
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const { login, register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await login(email, password);
      } else {
        await register(name, email, password);
      }
      navigate('/home');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="auth-container">
      <div className='auth-card'>
        <h1 className='auth-header'>Welcome to Tomato Food App</h1>
      <h2>{isLogin ? 'Login' : 'Register'}</h2>
      
      <form onSubmit={handleSubmit} className='form-group'>
        {!isLogin && (
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        )}
        
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        
        <button type="submit" className='auth-button'>
          {isLogin ? 'Login' : 'Register'}
        </button>
      </form>

      <button 
        onClick={() => setIsLogin(!isLogin)}
        className="toggle-auth"
      >
        {isLogin ? 
          'Need an account? Register' : 
          'Already have an account? Login'}
      </button>

      </div>
    </div>
  );
}