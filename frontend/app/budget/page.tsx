"use client";
import BudgetNotification from "@/src/components/BudgeNotification";
import BudgetForm from "@/src/components/BudgetForm";
import Footer from "@/src/components/Footer";

import Header from "@/src/components/Header";
import { fakeApi } from "@/src/services/fakeApi";
import { useEffect, useState } from "react";

export default function Budget() {
  const [budget, setBudget] = useState<number>(0);
  const [expenses, setExpenses] = useState<number>(0);

  useEffect(() => {
    const fetchBudget = async () => {
      const data = await fakeApi.getBudget();
      setBudget(data);
    };
    fetchBudget();
  }, []);

  const addBudget = async (amount: number) => {
    const newBudget = await fakeApi.setBudget(amount);
    setBudget(newBudget);
  };
  const handleUpdateBudget = async (amount: number) => {
    const updatedBudget = await fakeApi.updateBudget(amount);
    setBudget(updatedBudget);
  };
  return (
    <>
      <Header />
      <h1 className="text-2xl font-bold text-center my-6">Budget</h1>
      <div className="container mx-auto px-4">
        <BudgetForm addBudget={addBudget} />
        <BudgetNotification
          budget={budget}
          onUpdateBudget={handleUpdateBudget}
          expenses={expenses}
        />
      </div>
      <Footer />
    </>
  );
}
