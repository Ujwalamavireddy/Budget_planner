import Layout from "../components/layout";

function App() {
  return (
    <Layout>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "60vh",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            background: "linear-gradient(90deg, #ff416c, #ff4b2b, #ffcc70, #00c9ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animation: "colorFlow 5s infinite alternate",
          }}
        >
          Welcome to Budget Planner 🎉
        </h1>
        <p style={{ fontSize: "1.2rem", marginTop: "1rem", color: "#444" }}>
          Track your income and expenses with ease.
        </p>
      </div>
    </Layout>
  );
}

export default App;
