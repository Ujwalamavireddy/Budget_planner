import React from "react";

const ExpenseCard = ({ expense }) => {
  return (
    <div className="p-3 bg-gray-100 rounded-lg shadow">
      <h3 className="font-bold text-purple-600">{expense.title}</h3>
      <p>Amount: ₹{expense.amount}</p>
      <p>Date: {new Date(expense.date).toLocaleDateString()}</p>
      <p className="text-sm text-gray-600">
        {expense.description || "No description"}
      </p>
    </div>
  );
};

export default ExpenseCard;
