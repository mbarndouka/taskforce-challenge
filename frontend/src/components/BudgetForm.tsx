import { useState } from "react";

interface BudgetFormProps {
  addBudget: (amount: number) => void;
}

const BudgetForm: React.FC<BudgetFormProps> = ({ addBudget }) => {
  const [amount, setAmount] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addBudget(Number(amount));
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Budget Amount:
        </label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
      >
        Set Budget
      </button>
    </form>
  );
};

export default BudgetForm;
