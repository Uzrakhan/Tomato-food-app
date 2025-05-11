import { useEffect, useState } from "react"
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            await signInWithEmailAndPassword(auth,email,password);

            await auth.currentUser?.reload();
            navigate('/home');
        }catch(err){
            console.error('Login error:',err);
            switch(error.code) {
                case 'auth/invalid-email':
                setError('Invalid email address');
                break;
                case 'auth/user-disabled':
                setError('Account disabled');
                break;
                case 'auth/user-not-found':
                case 'auth/wrong-password':
                setError('Invalid email or password');
                break;
                default:
                setError('Failed to login. Please try again.');
            }
        }
    };

    return(
        <div className="auth-form">
            <h2>Login</h2>
            {error && <div className="error-message">{error}</div>}
            <form onSubmit={handleSubmit}>
                <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>

            <div>
                <p>Don't have an account?</p>
                <Link to="/signup">
                    Sign up here
                </Link>
            </div>
        </div>
    )
};

export default Login;