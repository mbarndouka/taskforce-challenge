// Simulate a fake API with delays
const simulateDelay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

// Fake data for transactions
let transactions: any[] = [];

// Fake data for budget
let budget: number = 0;

export const fakeApi = {
  // ================== Transactions API ==================
  // Fetch all transactions
  getTransactions: async () => {
    await simulateDelay(500); // Simulate network delay
    return transactions;
  },

  // Add a new transaction
  addTransaction: async (transaction: any) => {
    await simulateDelay(500); // Simulate network delay
    transactions.push(transaction);
    return transaction;
  },

  // Delete a transaction by ID
  deleteTransaction: async (id: string) => {
    await simulateDelay(500); // Simulate network delay
    transactions = transactions.filter((t) => t.id !== id);
    return { success: true };
  },

  // Update a transaction by ID
  updateTransaction: async (id: string, updatedTransaction: any) => {
    await simulateDelay(500); // Simulate network delay
    transactions = transactions.map((t) =>
      t.id === id ? { ...t, ...updatedTransaction } : t
    );
    return { success: true };
  },

  // ================== Budget API ==================
  // Fetch the current budget
  getBudget: async () => {
    await simulateDelay(500); // Simulate network delay
    return budget;
  },

  // Set a new budget
  setBudget: async (amount: number) => {
    await simulateDelay(500); // Simulate network delay
    budget = amount;
    return budget;
  },

  // Update the budget (add or subtract)
  updateBudget: async (amount: number) => {
    await simulateDelay(500); // Simulate network delay
    budget += amount;
    return budget;
  },
};
