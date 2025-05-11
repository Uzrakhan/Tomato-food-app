import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword,updateProfile } from "firebase/auth";

const SignUp = ()  => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState("");
    const { signup } = useAuth();
    const navigate = useNavigate();


    // In your SignUp component
        const handleSubmit = async (e) => {
        e.preventDefault();
            try {
                await signup(email, password, name); // Pass name as third argument
                navigate('/home');
            } catch (error) {
                setError(error.message);
            }
        };
    return(
        <div>
            <h2>Sign Up</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <input 
                 type="text"
                 placeholder="Name"
                 value={name}
                 onChange={(e) => setName(e.target.value)}
                 required
                 minLength={2}
                />
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
                 minLength={6}
                />
                <button type="submit">Create Account</button>
            </form>
        </div>
    )
};

export default SignUp;