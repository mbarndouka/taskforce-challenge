"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { fakeAuth } from "../services/fakeAuth";

const AuthForm: React.FC = () => {
  const [type, setType] = useState<"signin" | "signup">("signin");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (type === "signin") {
      const response = await fakeAuth.signIn(email, password);
      if (response.success) {
        router.push("/");
      } else {
        setError(response.message || "Sign in failed");
      }
    } else if (type === "signup") {
      const response = await fakeAuth.signUp(name, email, password);
      if (response.success) {
        router.push("/");
      } else {
        setError("Sign up failed");
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl p-8 bg-white shadow-md rounded-lg">
        <div className="flex justify-center mb-6">
          <button
            className={`px-6 py-2 rounded-l-lg ${
              type === "signin" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
            onClick={() => setType("signin")}
          >
            Sign In
          </button>
          <button
            className={`px-6 py-2 rounded-r-lg ${
              type === "signup" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
            onClick={() => setType("signup")}
          >
            Sign Up
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          {type === "signup" && (
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name:
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email:
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password:
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {error && <p className="text-red-600 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {type === "signin" ? "Sign In" : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
