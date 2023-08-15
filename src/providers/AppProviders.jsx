import { createContext, useState } from 'react';
import { config } from '../config/config';

export const AuthContext = createContext({});

export const AppProviders = ({ children }) => {
  const [session, setSession] = useState({
    username: null,
    password: null,
    firstname: null,
    lastname: null,
    profilePictureUrl: config.ui.profilePictureDefault,
  });

  return (
    <AuthContext.Provider value={{ session, setSession }}>
      {children}
    </AuthContext.Provider>
  );
};
