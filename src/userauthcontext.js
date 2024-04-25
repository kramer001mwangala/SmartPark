import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase.js'; 

const UserAuthContext = createContext();

export function useUserAuth() {
  return useContext(UserAuthContext);
}

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Handle user state changes on auth state changes (optional)
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    return unsubscribe; // Cleanup function to prevent memory leaks
  }, []);

  const login = async (email, password) => {
    try {
      const response = await auth.signInWithEmailAndPassword(email, password);
      setUser(response.user);
      localStorage.setItem('user', JSON.stringify(response.user)); // Persist user in local storage (optional)
      navigate('/dashboard'); // Replace with your desired redirect path
    } catch (error) {
      console.error('Login error:', error);
      // Handle login errors gracefully (e.g., display error message to user)
    }
  };

  const signup = async (name, email, password) => {
    try {
      const response = await auth.createUserWithEmailAndPassword(email, password);
      setUser(response.user);
      localStorage.setItem('user', JSON.stringify(response.user)); // Persist user in local storage (optional)
      navigate('/dashboard'); // Replace with your desired redirect path
    } catch (error) {
      console.error('Signup error:', error);
      // Handle signup errors gracefully (e.g., display error message to user)
    }
  };

  const logout = async () => {
    try {
      await auth.signOut();
      setUser(null);
      localStorage.removeItem('user');
      navigate('/'); // Redirect to home or login page after logout
    } catch (error) {
      console.error('Logout error:', error);
      // Handle logout errors gracefully (e.g., display error message to user)
    }
  };

  // Implement Google sign-in logic if needed (replace with your actual implementation)
  const googleSignIn = async () => {
    console.log('Google sign-in not implemented yet!');
    // ... Implement Google sign-in using a library like react-google-login
  };

  const value = { user, login, signup, logout, googleSignIn };

  return (
    <UserAuthContext.Provider value={value}>
      {children}
    </UserAuthContext.Provider>
  );
}
