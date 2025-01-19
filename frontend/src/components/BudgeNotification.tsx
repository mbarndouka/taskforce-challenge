interface BudgetNotificationProps {
  budget: number;
  expenses: number;
  onUpdateBudget: (amount: number) => void;
}

const BudgetNotification: React.FC<BudgetNotificationProps> = ({
  budget,
  expenses,
  onUpdateBudget,
}) => {
  const isOverBudget = expenses > budget;

  return (
    <div className="p-4 border rounded-lg shadow-sm">
      <h2 className="text-xl font-bold mb-2">Budget Status</h2>
      <p>
        <strong>Budget:</strong> {budget}
      </p>
      <p>
        <strong>Expenses:</strong> {expenses}
      </p>
      {isOverBudget && (
        <p className="text-red-600 font-semibold mt-2">
          You have exceeded your budget!
        </p>
      )}
      <button
        onClick={() => onUpdateBudget(-100)} // Subtract 100 from the budget
        className="mt-2 bg-blue-600 text-white py-1 px-3 rounded-md hover:bg-blue-700"
      >
        Update Budget (-100)
      </button>
    </div>
  );
};

export default BudgetNotification;
