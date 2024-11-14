import ExpenseList from "./expense_tracker/ExpenseList";
import ExpenseFilter from "./expense_tracker/EpenseFilter";
import { useState } from "react";
import ExpenseForm from "./expense_tracker/ExpenseForm";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 0, Description: "Milk", Amount: 20, Category: "Groceries" },
    { id: 1, Description: "Vegetable", Amount: 20, Category: "Groceries" },
    { id: 2, Description: "Yogurt", Amount: 20, Category: "Groceries" },
    { id: 3, Description: "Bread", Amount: 20, Category: "Groceries" },
    { id: 4, Description: "Tea", Amount: 20, Category: "Groceries" },
    { id: 5, Description: "Coffee", Amount: 20, Category: "Groceries" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.Category === selectedCategory)
    : expenses;

  return (
    <>
      <div className="p-5">
        <div className="mb-3">
          <div className="mb-5">
            <ExpenseForm
              onSubmit={(expense) =>
                setExpenses([
                  ...expenses,
                  { ...expense, id: expenses.length + 1 },
                ])
              }
            />
          </div>
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
      </div>
    </>
  );
}

export default App;
