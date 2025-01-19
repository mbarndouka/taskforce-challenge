"use client";
import TransactionForm from "@/src/components/TransactionForm";
import TransactionList from "@/src/components/TransactionList";
import { fakeApi } from "@/src/services/fakeApi";
import { useEffect, useState } from "react";

export default function Transactions() {
  const [transactions, setTransactions] = useState<any[]>([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      const data = await fakeApi.getTransactions();
      setTransactions(data);
    };
    fetchTransactions();
  }, []);

  const addTransaction = async (transaction: any) => {
    const newTransaction = await fakeApi.addTransaction(transaction);
    setTransactions([...transactions, newTransaction]);
  };
  const handleDelete = async (id: string) => {
    await fakeApi.deleteTransaction(id);
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  return (
    <>
      <h1 className="text-2xl font-bold text-center my-6">Transactions</h1>
      <div className="container mx-auto px-4">
        <TransactionForm addTransaction={addTransaction} />
        <TransactionList transactions={transactions} onDelete={handleDelete} />
      </div>
    </>
  );
}
