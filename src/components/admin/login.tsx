import { AdminService } from "@/services/api/admin";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      // some validation for inputs
      console.log("🚀 ~ file: login.tsx:15 ~ handleLogin ~ data:", {
        password,
        email,
      });
      const data: any = await AdminService.login({
        password,
        email,
      });

      if (data.ok) {
        // If login is successful, redirect to the dashboard
        window.location.href = "/en/admin/dashboard";
      } else {
        // Handle login failure (e.g., display an error message)
        console.error("Login failed");
        window.location.href = "/en/admin/login";
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="container mx-auto mt-16 max-w-md p-6 bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-6">Login</h1>
      <form>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-600 text-sm font-medium"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-600 text-sm font-medium"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <button
          type="button"
          onClick={handleLogin}
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
