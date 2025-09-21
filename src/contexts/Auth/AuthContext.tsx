import { createContext, useState, type ReactNode, useEffect } from 'react';
import User from '../../types/user';

type AuthContextType = {
  user: User | null;
  login: (token: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => { },
  logout: () => { }
});

function decodeToken(token: string): User {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
  const user: User = JSON.parse(jsonPayload);
  return user;
}

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/users/me`,
          {
            method: "GET",
            credentials: "include",
          }
        );
        if (response.ok) {
          const data = await response.json();
          setUser(data);
        } else {
          setUser(null);
        }
    } catch (err) {
        alert("Erro ao autenticar usuário \r \n" + err);
        setUser(null);
      }
    };
    fetchUser();
  }, [setUser]);

  const login = (token: string) => {
    const userData = decodeToken(token);
    setUser(userData);
  };
  const logout = () => {
    setUser(null);
  };
  const value = { user, login, logout };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthProvider, AuthContext, AuthContextType };