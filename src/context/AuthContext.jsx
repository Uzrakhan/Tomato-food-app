import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('token'));

    useEffect(() => {
        const fetchUserProfile = async () => {
            if (token) {
                try {
                    const response = await axios.get('http://localhost:5000/api/me', {
                        headers: { Authorization: `Bearer ${token}` },
                    });
                    setUser(response.data);
                } catch (err) {
                    console.error('Failed to fetch user profile:', err);
                }
            }
        };

        fetchUserProfile();
    }, [token]);

    const login = async (email, password) => {
        try {
            const response = await axios.post('http://localhost:5000/api/login', { email, password });
            localStorage.setItem('token', response.data.token);
            setToken(response.data.token);
            setUser(response.data)
        } catch (err) {
            throw new Error('Login failed');
        }
    };

    const register = async (name, email, password) => {
        try {
            await axios.post('http://localhost:5000/api/register', { name, email, password });
        } catch (err) {
            throw new Error('Registration failed');
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setToken(null);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, token, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
