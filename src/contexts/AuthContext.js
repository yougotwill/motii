import React, { useState, useEffect, useContext } from 'react';
import { auth, db } from '../shared/firebase';
import { useConfig } from './ConfigContext';

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const { loadAppData } = useConfig();
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  const signup = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const logout = () => {
    return auth.signOut();
  };

  const resetPassword = (email) => {
    return auth.sendPasswordResetEmail(email);
  };

  const updateEmail = (email) => {
    return currentUser.updateEmail(email);
  };

  const updatePassword = (password) => {
    return currentUser.updatePassword(password);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    async function fetchUserData() {
      if (currentUser) {
        const snapshot = await db.collection('users').where('email', '==', currentUser.email).get();
        if (snapshot.docs.length > 0) {
          const userData = snapshot.docs[0].data();
          const { theme, hideIntro, positivity, habit, data } = userData;
          const userConfig = { theme, hideIntro, positivity, habit, data };
          loadAppData(userConfig);
          // TODO need to deal with logging out
          // localStorage.setItem('config', JSON.stringify(userConfig));
          console.log('Loaded user data');
        } else {
          console.error('Failed to fetch user data');
        }
      }
    }

    fetchUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

