"use client";

import InstagramConnect from "@/components/InstagramConnect";
import Button from "@/components/ui/Button";
import { useUser } from "@/contexts/UserContext";
import { getCurrentUser, signOut } from "aws-amplify/auth";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaInstagram } from "react-icons/fa";

async function fetchInstagramStatus() {
  return {
    connected: true,
    stats: {
      posts: 120,
      followers: 845,
      following: 321,
    },
    lastSync: new Date().toLocaleString(),
  };
}

export default function Dashboard() {
  const router = useRouter();
  const [connected, setConnected] = useState(false);
  const [stats, setStats] = useState(null);
  const { user, loading, logout } = useUser();

  useEffect(() => {
    (async () => {
      try {
        console.log("user", user);
        setConnected(!!user?.instagramUserId);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [user]);

  // -------- LOADING VIEW --------
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-pepper">
        <p className="animate-pulse">Loading your dashboard...</p>
      </div>
    );
  }

  // -------- NOT CONNECTED VIEW --------
  if (!connected) {
    return (
      <div className="flex flex-col justify-center items-center p-2 min-h-screen bg-salt">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="p-8 w-full max-w-sm text-center bg-white rounded-xl shadow-md"
        >
          <FaInstagram className="mx-auto mb-4 text-6xl text-pink-500" />
          <h2 className="mb-2 text-2xl font-semibold">
            Connect your Instagram
          </h2>
          <p className="mb-6 text-muted">
            Link your account to unlock your personalized dashboard and stats.
          </p>
          <InstagramConnect />
        </motion.div>
      </div>
    );
  }

  // -------- CONNECTED VIEW --------
  return (
    <main className="p-8 min-h-screen bg-salt">
      <div className="flex flex-col gap-4 justify-between items-start mb-8 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-3xl font-bold text-pepper">
            👋 Welcome back, {user?.name}!
          </h1>
          <p className="mt-1 text-sm text-muted">
            Last synced: {stats?.lastSync}
          </p>
        </div>
        <Button
          onClick={logout}
          className="text-white bg-black hover:bg-black/80"
        >
          Sign out
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-4">
        <StatCard
          label="Total Posts"
          value={stats?.stats?.posts}
          description="All the posts you've shared so far."
          onClick={() => router.push("/dashboard/posts")}
        />
        <StatCard
          label="Followers"
          value={stats?.stats?.followers}
          description="People who follow your profile."
        />
        <StatCard
          label="Following"
          value={stats?.stats?.following}
          description="Accounts you're currently following."
        />
        <StatCard
          label="Automation"
          value="⚡"
          description="Manage and monitor automated actions."
          onClick={() => router.push("/dashboard/automation")}
        />
      </div>
    </main>
  );
}

function StatCard({ label, value, description, onClick }) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      className={`bg-white p-6 rounded-lg shadow-md text-center cursor-pointer transition ${
        onClick ? "hover:bg-gray-50" : ""
      }`}
    >
      <p className="text-4xl font-bold text-pepper">{value}</p>
      <p className="mt-2 font-medium text-muted">{label}</p>
      <p className="mt-1 text-xs text-gray-500">{description}</p>
    </motion.div>
  );
}
