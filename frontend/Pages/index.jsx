import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/login`, {
      email,
      password,
    });
    alert(res.data.success ? "Login Success!" : "Login Failed");
  };

  return (
    <div className="min-h-screen p-6 flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-4 text-blue-800">Global Trading Login</h1>
      <form onSubmit={handleLogin} className="space-y-4 bg-white p-6 rounded-xl shadow">
        <input
          className="p-2 border rounded w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          className="p-2 border rounded w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        />
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">
          Login
        </button>
      </form>
    </div>
  );
}
