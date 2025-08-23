// CreateContext
// create ContextProvider function
// create contextProviderProps
// Call API
// Return Error, ApiData, LoadingStatus

import React, { createContext, ReactNode, useEffect, useState } from "react";
import { AppContextType, User } from "../models";
import { getUsers } from "../services/user/userAPI";

export const AppContext = createContext<AppContextType>({
  users: [],
  isLoading: false,
});

type AppContextProviderProps = {
  children: ReactNode;
  value: AppContextType;
};
export const AppContextProvider: React.FC<AppContextProviderProps> = ({
  children,
  value,
}) => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    console.log("AppContext :: useEffect : ");

    const fetchUsers = async () => {
      try {
        setLoading(true);
        const apiResult = await getUsers();
        setUsers(apiResult);
      } catch (err) {
        const errMessage = err instanceof Error ? err.message : String(err);
        setError(errMessage);
        throw new Error(errMessage);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const contextValue = {
    users,
    isLoading,
    error,
  };
  return (
    <AppContext.Provider value={contextValue}> {children} </AppContext.Provider>
  );
};
