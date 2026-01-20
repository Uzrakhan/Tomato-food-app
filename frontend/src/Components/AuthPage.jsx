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
    <div className="min-h-screen flex items-center justify-center bg-[#f8f9fa] p-8">
      <div className='bg-white p-10 rounded-2xl shadow-lg w-full max-w-[400px]'>
        <h1 className='text-center mb-8'>Welcome to Tomato Food App</h1>
      <h2>{isLogin ? 'Login' : 'Register'}</h2>
      
      <form onSubmit={handleSubmit} className='mb-6'>
        {!isLogin && (
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className='w-full px-4 py-3 border border-[#e0e0e0] rounded-lg text-base transition duration-300 focus:outline-none focus:border-[#EF4F5F] focus:ring-2 focus:ring-[#EF4F5F]/20'
          />
        )}
        
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className='w-full px-4 py-3 border border-[#e0e0e0] rounded-lg text-base transition duration-300 focus:outline-none focus:border-[#EF4F5F] focus:ring-2 focus:ring-[#EF4F5F]/20'
        />
        
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className='w-full px-4 py-3 border border-[#e0e0e0] rounded-lg text-base transition duration-300 focus:outline-none focus:border-[#EF4F5F] focus:ring-2 focus:ring-[#EF4F5F]/20'
        />
        
        <button type="submit" className='w-full py-3 bg-[#EF4F5F] text-white rounded-lg text-base font-medium flex items-center justify-center gap-2 cursor-pointer transition hover:bg-[#ed384a] disabled:bg-gray-400 disabled:cursor-not-allowed'>
          {isLogin ? 'Login' : 'Register'}
        </button>
      </form>

      <button 
        onClick={() => setIsLogin(!isLogin)}
        className="bg-none border-none text-[#EF4F5F] font-medium cursor-pointer p-1 hover:underline"
      >
        {isLogin ? 
          'Need an account? Register' : 
          'Already have an account? Login'}
      </button>

      </div>
    </div>
  );
}