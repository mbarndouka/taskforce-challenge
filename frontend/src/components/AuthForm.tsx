"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { fakeAuth } from "../services/fakeAuth";
interface AuthFormProps {
  type: "signin" | "signup";
}

const AuthForm: React.FC<AuthFormProps> = ({ type }) => {
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
      const response = await fakeAuth.signUp(email, password);
      if (response.success) {
        router.push("/");
      } else {
        setError("Sign up failed");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-sm mx-auto">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Email:
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
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
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          required
        />
      </div>

      {error && <p className="text-red-600">{error}</p>}

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
      >
        {type === "signin" ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
};

export default AuthForm;
