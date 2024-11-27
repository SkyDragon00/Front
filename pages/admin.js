import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";


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
          <li><Link href="/admin/add-game">Add Game</Link></li>
          {/* Otros enlaces del panel */}
        </ul>
      </nav>
    </div>
  );
}
