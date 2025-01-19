import { useState } from "react";

interface TransactionFormProps {
  addTransaction: (transaction: any) => void;
}

const TransactionForm: React.FC<TransactionFormProps> = ({
  addTransaction,
}) => {
  const [formData, setFormData] = useState({
    type: "income",
    amount: "",
    account: "",
    category: "",
    date: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTransaction(formData);
    setFormData({
      type: "income",
      amount: "",
      account: "",
      category: "",
      date: "",
      description: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Type:</label>
        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Amount:
        </label>
        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Account:
        </label>
        <input
          type="text"
          name="account"
          value={formData.account}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Category:
        </label>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Date:</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Description:
        </label>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
      >
        Add Transaction
      </button>
    </form>
  );
};

export default TransactionForm;
