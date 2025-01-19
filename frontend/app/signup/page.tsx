import AuthForm from "../../src/components/AuthForm";

export default function SignUp() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold mb-6">Sign Up</h1>
      <AuthForm type="signup" />
    </div>
  );
}
