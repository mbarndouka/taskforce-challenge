import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          Welcome to Task Force Pro Wallet
        </h1>

        <p className="text-lg text-center mb-12">
          Track your income and expenses, set budgets, and generate reports.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <a
            href="/transactions"
            className="p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-2">Transactions &rarr;</h2>
            <p className="text-gray-600">Add and manage your transactions.</p>
          </a>

          <a
            href="/budget"
            className="p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-2">Budget &rarr;</h2>
            <p className="text-gray-600">Set and track your budget.</p>
          </a>

          <a
            href="/reports"
            className="p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-2">Reports &rarr;</h2>
            <p className="text-gray-600">Generate detailed reports.</p>
          </a>

          <a
            href="/categories"
            className="p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-2">Categories &rarr;</h2>
            <p className="text-gray-600">
              Manage your categories and subcategories.
            </p>
          </a>

          <a
            href="/visualization"
            className="p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-2">
              Visualization &rarr;
            </h2>
            <p className="text-gray-600">
              View your transactions in charts and graphs.
            </p>
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
