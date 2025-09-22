import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-white shadow-lg flex flex-col p-6">
      <h2 className="text-2xl font-bold text-purple-600 mb-10">ExpenseWise</h2>
      <nav className="flex flex-col space-y-6 text-gray-700 font-semibold">
        <Link to="/dashboard">🏠 Home</Link>
        <Link to="/split">🔀 Split Expense</Link>
        <Link to="/account">👤 Account</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
