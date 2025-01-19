import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white py-4 fixed top-0 w-full z-10">
      <div className=" px-4 flex justify-between items-center">
        <Link href={"/dashboard"}>
          <h1 className="text-2xl font-bold">Task Force Wallet</h1>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/dashboard/transactions" className="hover:underline">
                Transactions
              </Link>
            </li>
            <li>
              <Link href="/dashboard/budget" className="hover:underline">
                Budget
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
