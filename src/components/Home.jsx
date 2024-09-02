import React, { useState } from 'react';

function Home() {
  const [budget, setBudget] = useState("Enter Budget First");
  const [expenses, setExpenses] = useState(0);

  const enterBudget = (e) => {
    setBudget(e.target.value);
  };

  const handleFocus = () => {
    if (budget === "Enter Budget First") {
      setBudget("");
    }
  };

  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-gray-100">
      <div className="flex w-full space-x-4 p-4">
        <div className="bg-white p-6 rounded-lg shadow-md flex-1">
          <input 
            type="text" 
            value={budget} 
            onChange={enterBudget} 
            onFocus={handleFocus}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex-1">
          {expenses}
        </div>
      </div>
      <div className="bg-white p-10 rounded-lg shadow-md flex-grow w-full m-4">
        Large Box
      </div>
    </div>
  );
}

export default Home;
