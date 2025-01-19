import { useState } from "react";

interface CategoryFormProps {
  addCategory: (category: string) => void;
}

const CategoryForm: React.FC<CategoryFormProps> = ({ addCategory }) => {
  const [category, setCategory] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addCategory(category);
    setCategory("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Category:
        </label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
      >
        Add Category
      </button>
    </form>
  );
};

export default CategoryForm;
