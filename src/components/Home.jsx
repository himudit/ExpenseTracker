import React, { useState } from 'react';

function Home() {
  const [budget, setBudget] = useState("Enter Budget First");
  const [expenses, setExpenses] = useState(0);

  // budget
  const enterBudget = (e) => {
    setBudget(e.target.value);
  };
  const handleFocus = () => {
    if (budget === "Enter Budget First") {
      setBudget("");
    }
  };

  // expenses


  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-gray-100">
      {/* expenses */}
      <div className="flex w-full space-x-4 p-4">
        <div className="bg-white p-6 rounded-lg shadow-md flex-1">
          Total revenue
          <span className="mr-2">$</span>
          <input
            type="text"
            value={budget}
            onChange={enterBudget}
            onFocus={handleFocus}
            placeholder="Enter Budget"
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex-1">
          Total expense
          <span className="mr-2">$</span>
          <input
            type="text"
            value={expenses}
            placeholder=""
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
      </div>
      <div className="bg-white p-10 rounded-lg shadow-md flex-grow w-full m-4">
        Large Box
      </div>
    </div>
  );
}

export default Home;
