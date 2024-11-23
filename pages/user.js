import { useEffect } from "react";
import { useRouter } from "next/router";

export default function UserPage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) { // Asegúrate de que el valor coincide con USER_ROLE
      router.push("/login"); // Redirige si no es usuario
    }
  }, []);

  return (
    <div>
      <h1>Welcome User</h1>
    </div>
  );
}
