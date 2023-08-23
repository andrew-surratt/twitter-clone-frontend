import React, { ReactNode } from 'react';

export interface Session {
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  profilePictureUrl: string;
}

export interface AuthContextValue {
  session: Session | null;
  setSession: React.Dispatch<React.SetStateAction<Session | null>> | null;
}

export interface AppProvidersProps {
  children: ReactNode;
}
