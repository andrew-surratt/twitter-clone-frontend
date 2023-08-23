import React, { createContext, ReactElement, useState } from 'react';
import { AppProvidersProps, AuthContextValue, Session } from './types';

export const AuthContext: React.Context<AuthContextValue> =
  createContext<AuthContextValue>({
    session: null,
    setSession: null,
  });

export const AppProviders: React.FC<AppProvidersProps> = ({
  children,
}): ReactElement => {
  const [session, setSession] = useState<Session | null>(null);

  return (
    <AuthContext.Provider value={{ session, setSession }}>
      {children}
    </AuthContext.Provider>
  );
};
