import { useState } from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";

export default function Dashboard() {
  const [income, setIncome] = useState("");
  const [expenses, setExpenses] = useState([]);
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [showChart, setShowChart] = useState(false);

  const totalExpenses = expenses.reduce((acc, exp) => acc + exp.amount, 0);
  const balance = income ? income - totalExpenses : 0;

  const addExpense = () => {
    if (category && amount) {
      setExpenses([...expenses, { category, amount: parseFloat(amount) }]);
      setCategory("");
      setAmount("");
    }
  };

  const data = {
    labels: expenses.map((e) => e.category),
    datasets: [
      {
        data: expenses.map((e) => e.amount),
        backgroundColor: [
          "#FF6B6B", // red
          "#4ECDC4", // teal
          "#FFD93D", // yellow
          "#1A535C", // dark teal
          "#FF9F1C", // orange
          "#9B5DE5", // purple
        ],
        hoverOffset: 8,
      },
    ],
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        color: "#fff",
        fontFamily: "Poppins, sans-serif",
        padding: "40px",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>💰 Budget Dashboard</h1>

      {/* Income Section */}
      <div
        style={{
          background: "#ffffff22",
          padding: "20px",
          borderRadius: "12px",
          marginBottom: "30px",
          display: "inline-block",
        }}
      >
        <h2>Enter Income</h2>
        <input
          type="number"
          placeholder="Enter income"
          value={income}
          onChange={(e) => setIncome(parseFloat(e.target.value))}
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "none",
            outline: "none",
            marginRight: "10px",
            width: "200px",
          }}
        />
      </div>

      {/* Expense Section */}
      <div
        style={{
          background: "#ffffff22",
          padding: "20px",
          borderRadius: "12px",
          marginBottom: "30px",
          display: "inline-block",
        }}
      >
        <h2>Add Expense</h2>
        <input
          type="text"
          placeholder="Category (e.g. Rent)"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "none",
            outline: "none",
            marginRight: "10px",
            width: "180px",
          }}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "none",
            outline: "none",
            marginRight: "10px",
            width: "120px",
          }}
        />
        <button
          onClick={addExpense}
          style={{
            padding: "10px 20px",
            border: "none",
            borderRadius: "8px",
            background: "#FF9F1C",
            color: "#fff",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          ➕ Add
        </button>
      </div>

      {/* Balance Cards */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            background: "#4ECDC4",
            padding: "20px",
            borderRadius: "12px",
            minWidth: "200px",
          }}
        >
          <h3>Total Income</h3>
          <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>₹{income || 0}</p>
        </div>
        <div
          style={{
            background: "#FF6B6B",
            padding: "20px",
            borderRadius: "12px",
            minWidth: "200px",
          }}
        >
          <h3>Total Expenses</h3>
          <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>₹{totalExpenses}</p>
        </div>
        <div
          style={{
            background: "#FFD93D",
            padding: "20px",
            borderRadius: "12px",
            minWidth: "200px",
          }}
        >
          <h3>Remaining Balance</h3>
          <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>₹{balance}</p>
        </div>
      </div>

      {/* Expenses List */}
      <div
        style={{
          margin: "30px auto",
          background: "#ffffff22",
          borderRadius: "12px",
          padding: "20px",
          width: "400px",
        }}
      >
        <h3>Expenses</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {expenses.map((exp, index) => (
            <li
              key={index}
              style={{
                background: "#ffffff33",
                margin: "8px 0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {exp.category}: ₹{exp.amount}
            </li>
          ))}
        </ul>
      </div>

      {/* Done Button */}
      <button
        onClick={() => setShowChart(true)}
        style={{
          marginTop: "20px",
          padding: "12px 24px",
          border: "none",
          borderRadius: "10px",
          background: "#36A2EB",
          color: "#fff",
          fontWeight: "bold",
          fontSize: "1rem",
          cursor: "pointer",
        }}
      >
        ✅ Done (Show Pie Chart)
      </button>

      {/* Pie Chart */}
      {showChart && (
        <div style={{ marginTop: "40px", width: "500px", margin: "auto" }}>
          <h2>Expense Distribution</h2>
          <Pie data={data} />
        </div>
      )}
    </div>
  );
}
