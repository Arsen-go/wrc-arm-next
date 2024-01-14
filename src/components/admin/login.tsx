import { AdminService } from "@/services/api/admin";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signIn, SignInResponse } from "next-auth/react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const res: SignInResponse | undefined = await signIn("credentials", {
        email,
        password,
        callbackUrl: process.env.ADMIN_CALLBACK_URL,
        redirect: false,
      });
      if (res?.ok && res.url) {
        router.push(res.url);
        router.refresh();
      } else {
      }
    } catch (error) {
      console.log("🚀 ~ handleLogin ~ error:", error);
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
