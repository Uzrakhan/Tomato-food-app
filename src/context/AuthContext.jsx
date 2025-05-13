import { createContext, useContext, useEffect, useState } from "react";
import { auth, googleProvider } from "../firebase"; // Import auth from your firebase config
import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Added error state

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in
        console.log("Logged in user:", user.displayName);
      } else {
        // User is signed out
        console.log("No user");
      }
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  // Google Sign-In (Popup method)
  const googleSignIn = async () => {
    try {
      setError("");
     const result = await signInWithPopup(auth, googleProvider);

     //clear any cached credentials
     if(window.CredentialMediationRequirements) {
      await navigator.credentials.preventSilentAccess()
     };

     return result.user;
    } catch (err) {
      console.error('Google Sign-In Error:', err);
      handleGoogleError(err);
      throw err;
    }
  };

  const handleGoogleError = (err) => {
      switch (err.code) {
        case 'auth/popup-closed-by-user':
          setError('Sign-in popup was closed');
          break;
        case 'auth/account-exists-with-different-credential':
          setError('Account exists with different login method');
          break;
        default:
          setError('Failed to sign in with Google');
      }
  }
  // Enhanced signup with display name
  const signup = async (email, password, displayName) => {
    try {
      setError("");
      const userCredential = await createUserWithEmailAndPassword(
        auth, 
        email, 
        password
      );
      
      await updateProfile(userCredential.user, {
        displayName
      });

      // Refresh user data
      await userCredential.user.reload();
      return userCredential;
    } catch (error) {
      setError(error.message);
      throw error;
    }
  };

  const login = async (email, password) => {
    try {
      setError("");
      return await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setError(error.message);
      throw error;
    }
  };

  const logout = async () => {
    try {
      setError("");
      await signOut(auth);
    } catch (error) {
      setError(error.message);
      throw error;
    }
  };

  const value = {
    currentUser,
    login,
    signup,
    logout,
    googleSignIn,
    error,
    setError,
    loading
  }
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext)
};