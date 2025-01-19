interface TransactionListProps {
  transactions: any[];
  onDelete: (id: string) => void;
}

const TransactionList: React.FC<TransactionListProps> = ({
  transactions,
  onDelete,
}) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Transaction List</h2>
      <ul className="space-y-2">
        {transactions.map((transaction) => (
          <li key={transaction.id} className="p-4 border rounded-lg shadow-sm">
            <p>
              <strong>Type:</strong> {transaction.type}
            </p>
            <p>
              <strong>Amount:</strong> {transaction.amount}
            </p>
            <p>
              <strong>Account:</strong> {transaction.account}
            </p>
            <p>
              <strong>Category:</strong> {transaction.category}
            </p>
            <p>
              <strong>Date:</strong> {transaction.date}
            </p>
            <p>
              <strong>Description:</strong> {transaction.description}
            </p>
            <button
              onClick={() => onDelete(transaction.id)}
              className="mt-2 bg-red-600 text-white py-1 px-3 rounded-md hover:bg-red-700"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
