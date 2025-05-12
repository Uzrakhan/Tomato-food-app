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
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
                    Welcome Back
                </h2>
                
                {error && (
                    <div className="flex items-center bg-red-100 text-red-700 px-4 py-3 rounded mb-4">
                        <svg 
                            className="w-5 h-5 mr-2" 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                        >
                            <path
                                fillRule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <span className="text-sm">{error}</span>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label 
                            htmlFor="email" 
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-200"
                            required
                        />
                    </div>

                    <div>
                        <label 
                            htmlFor="password" 
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-200"
                            required
                        />
                    </div>

                    <button 
                        type="submit" 
                        className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Log In
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                        Don't have an account?{" "}
                        <Link 
                            to="/signup" 
                            className="text-blue-600 hover:text-blue-800 font-medium underline underline-offset-2"
                        >
                            Sign up here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
};

export default Login;