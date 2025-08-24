import React, { useState } from "react";

const App: React.FC = () => {
  const [tab, setTab] = useState<"expenses" | "goals" | "stats">("expenses");

  return (
    <div className="min-h-screen p-4 flex flex-col">
      <h1 className="text-2xl font-bold mb-4">Expense & Goals Manager</h1>
      
      <div className="flex space-x-2 mb-4">
        <button onClick={() => setTab("expenses")}>Expenses</button>
        <button onClick={() => setTab("goals")}>Goals</button>
        <button onClick={() => setTab("stats")}>Statistics</button>
      </div>

      {tab === "expenses" && <div>💸 Expense tracking UI here</div>}
      {tab === "goals" && <div>🎯 Goals (Daily & Target) UI here</div>}
      {tab === "stats" && <div>📊 Statistics UI here</div>}
    </div>
  );
};

export default App;