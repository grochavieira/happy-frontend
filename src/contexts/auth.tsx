import { AsyncLocalStorage } from "async_hooks";
import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../services/api";

interface AuthContextData {
  signed: boolean;
  user: object | null;
  signIn({ email, password }: any): Promise<boolean>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<object | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    async function loadStoragedData() {
      const storagedUser = localStorage.getItem("@happy-user");
      const storagedToken = localStorage.getItem("@happy-token");

      if (storagedUser && storagedToken) {
        console.log(storagedUser);
        console.log(storagedToken);

        api.defaults.headers.Authorization = `Bearer ${JSON.parse(
          storagedToken
        )}`;

        setUser(JSON.parse(storagedUser));
        setUser(JSON.parse(storagedToken));
      }
    }

    loadStoragedData();
  }, []);

  async function signIn({ email, password }: any) {
    console.log({ email, password });
    const { data } = await api.post("/tokens", { email, password });

    console.log(data);
    if (data.error) {
      toast.warn(data.error);
      return false;
    } else {
      toast.success("Login efetuado com sucesso!");
      setUser(data.user);
      setToken(data.token);

      api.defaults.headers.Authorization = `Bearer ${data.token}`;

      localStorage.setItem("@happy-user", JSON.stringify(data.user));
      localStorage.setItem("@happy-token", JSON.stringify(data.token));
      return true;
    }
  }

  async function signOut() {
    setUser(null);
    setToken(null);
    localStorage.removeItem("@happy-user");
    localStorage.removeItem("@happy-token");
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user: {}, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
