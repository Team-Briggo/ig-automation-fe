"use client";

import { manageUserAPI } from "@/lib/apiHandler";
import { getCurrentUser, signOut } from "aws-amplify/auth";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const fetchAndSetUser = async (username) => {
    try {
      const res = await manageUserAPI("GET", {
        id: username,
      });

      if (res.success) {
        setUser(res.items[0]);
      } else {
        setUser(null);
      }
    } catch (err) {
      console.error("Error fetching user:", err);
      setUser(null);
    }
  };

  useEffect(() => {
    const loadUser = async () => {
      try {
        const currentUser = await getCurrentUser();
        if (!currentUser) {
          router.push("/auth/login");
          return;
        }
        await fetchAndSetUser(
          `${currentUser.username}::${currentUser.username}`
        );
      } catch (error) {
        console.warn("No authenticated user found");
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, []);

  const logout = async () => {
    try {
      await signOut();
      setUser(null);
      router.push("/auth/login");
    } catch (err) {
      console.error("Error signing out:", err);
    }
  };

  return (
    <UserContext.Provider
      value={{ user, loading, setUser, fetchAndSetUser, logout }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
