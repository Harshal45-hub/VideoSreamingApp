import { createContext } from 'react';
import { User } from '../types/user.types';

export type UserContextType = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

export const AuthContext = createContext<UserContextType | null>(null);