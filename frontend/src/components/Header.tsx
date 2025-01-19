import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Task Force Pro Wallet</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/signin" className="hover:underline">
                Sign In
              </Link>
            </li>
            <li>
              <Link href="/signup" className="hover:underline">
                Sign Up
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
