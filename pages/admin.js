import { useEffect } from "react";
import { useRouter } from "next/router";

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
    </div>
  );
}
