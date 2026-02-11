/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "../api/mock-authentication";
import type { AuthContextType } from "../types/types";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [accType, setAccType] = useState<boolean | null>(null);

  const { data: user, isLoading } = useQuery({
    queryKey: ["user", accType],
    queryFn: function () {
      return fetchUser(accType as boolean);
    },
    enabled: accType !== null,
  });

  function login(isPremium: boolean) {
    setAccType(isPremium);
  }

  function logout() {
    setAccType(null);
  }

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
