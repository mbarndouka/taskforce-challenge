import AuthForm from "../../src/components/AuthForm";

export default function SignIn() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold mb-6">Sign In</h1>
      <AuthForm type="signin" />
    </div>
  );
}
