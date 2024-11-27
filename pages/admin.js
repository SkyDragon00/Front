import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import DeleteGame from "../components/DeleteGame";


export default function AdminPage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login"); // Redirige al login si no hay token
    }
  }, []);

  return (
    <div>
      <h1>Welcome Admin</h1>
      <nav>
        <ul>
          <li><Link href="/admin/add-game">Add New Game</Link></li>
        </ul>
      </nav>
      <DeleteGame />
    </div>
  );
}
