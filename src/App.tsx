import ExpenseList from "./expense_tracker/ExpenseList";
import ExpenseFilter from "./expense_tracker/EpenseFilter";
import { useState } from "react";
import ExpenseForm from "./expense_tracker/ExpenseForm";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 0, Description: "Milk", Amount: 20, Category: "Grocery" },
    { id: 1, Description: "Vegetable", Amount: 20, Category: "Grocery" },
    { id: 2, Description: "Yogurt", Amount: 20, Category: "Grocery" },
    { id: 3, Description: "Bread", Amount: 20, Category: "Grocery" },
    { id: 4, Description: "Tea", Amount: 20, Category: "Grocery" },
    { id: 5, Description: "Coffee", Amount: 20, Category: "Grocery" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.Category === selectedCategory)
    : expenses;

  return (
    <>
      <ExpenseForm />
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) =>
          setExpenses(expenses.filter((expense) => expense.id !== id))
        }
      />
    </>
  );
}

export default App;
