import ExpenseList from "./expense_tracker/ExpenseList";

function App() {
  const expenses = [
    { id: 0, Description: "Milk", Amount: 20, Category: "Grocery" },
    { id: 1, Description: "Vegetable", Amount: 20, Category: "Grocery" },
    { id: 2, Description: "Yogurt", Amount: 20, Category: "Grocery" },
    { id: 3, Description: "Bread", Amount: 20, Category: "Grocery" },
    { id: 4, Description: "Tea", Amount: 20, Category: "Grocery" },
    { id: 5, Description: "Coffee", Amount: 20, Category: "Grocery" },
  ];
  return (
    <>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => console.log("Delete", id)}
      />
    </>
  );
}

export default App;
