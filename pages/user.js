import { useEffect } from "react";
import { useRouter } from "next/router";
import GameList from "../components/GamesList";

export default function UserPage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) { 
      router.push("/login");
    }
  }, []);

  return (
    <div>
      <h1>Welcome User</h1>
      <GameList />
    </div>
  );
}
