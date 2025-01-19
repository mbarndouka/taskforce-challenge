import Head from "next/head";
import Link from "next/link";

const Dashboard = () => {
  return (
    <div className="flex flex-col">
      <Head>
        <title>Task Force Pro Wallet</title>
        <meta
          name="description"
          content="Manage your transactions and budget with ease."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex-grow  mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          Welcome to Task Force Pro Wallet
        </h1>

        <p className="text-lg text-center mb-12">
          Track your income and expenses, set budgets, and generate reports.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link
            href="/dashboard/transactions"
            className="p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-2">Transactions &rarr;</h2>
            <p className="text-gray-600">Add and manage your transactions.</p>
          </Link>

          <Link
            href="/dashboard/budget"
            className="p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-2">Budget &rarr;</h2>
            <p className="text-gray-600">Set and track your budget.</p>
          </Link>

          <Link
            href="/dashboard/reports"
            className="p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-2">Reports &rarr;</h2>
            <p className="text-gray-600">Generate detailed reports.</p>
          </Link>

          <Link
            href="/dashboard/categories"
            className="p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-2">Categories &rarr;</h2>
            <p className="text-gray-600">
              Manage your categories and subcategories.
            </p>
          </Link>

          <Link
            href="/dashboard/visualization"
            className="p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-2">
              Visualization &rarr;
            </h2>
            <p className="text-gray-600">
              View your transactions in charts and graphs.
            </p>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
