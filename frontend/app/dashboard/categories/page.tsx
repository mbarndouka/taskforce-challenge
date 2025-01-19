"use client";
import CategoryForm from "@/src/components/CategoryForm";
import { useState } from "react";

export default function Categories() {
  const [categories, setCategories] = useState<string[]>([]);

  const addCategory = (category: string) => {
    setCategories([...categories, category]);
  };

  return (
    <>
      <h1 className="text-2xl font-bold text-center my-6">Categories</h1>
      <div className="container mx-auto px-4">
        <CategoryForm addCategory={addCategory} />
        <ul className="mt-4">
          {categories.map((category, index) => (
            <li key={index} className="p-2 border-b">
              {category}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
