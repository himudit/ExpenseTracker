import React, { useState } from 'react';
import { auth, db } from "../firebase/firebase"
import { doc, setDoc, collection,addDoc } from "firebase/firestore";

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

  const storeIntegerInFirestore = async (collectionName, documentId, integerValue) => {
    try {
      // Reference to the document
      const docRef = doc(db, collectionName, documentId);

      // Store the integer value in the specified document
      await setDoc(docRef, {
        value: integerValue
      });

      console.log("Integer successfully stored!");
    } catch (error) {
      console.error("Error storing integer: ", error);
    }
  };

  const handleStoreInteger = () => {
    console.log(42);
    storeIntegerInFirestore('numbers', 'myNumber', budget);
  };

  const createSubcollectionEntry = async (collectionName, documentId, subcollectionName, data) => {
    try {
      // Reference to the parent document
      const parentDocRef = doc(db, collectionName, documentId);

      // Reference to the subcollection
      const subcollectionRef = collection(parentDocRef, subcollectionName);

      // Add a new document to the subcollection
      const newDocRef = await addDoc(subcollectionRef, data);

      console.log("New subcollection document created with ID: ", newDocRef.id);
    } catch (error) {
      console.error("Error creating subcollection document: ", error);
    }
  };

  const handleCreateSubcollection = () => {
    const data = {
      itemName: "Example Item",
      price: 25
    };
    createSubcollectionEntry('users', 'userId1', 'orders', data);
  };
  // expenses


  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-gray-100">
      {/* expenses */}
      <div className='caret-white'>Dashboard</div>
      {/* logic for profile and good morining */}
      <div className='caret-white'>Good Morining Jane Cooper</div>
      <div className="flex w-full space-x-4 p-4">
        <div className="bg-blue-200 p-6 rounded-lg shadow-md flex-1">
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
          <button type='submit' onClick={handleCreateSubcollection}>Click Me</button>
        </div>
        <div className="bg-purple-200 p-6 rounded-lg shadow-md flex-1">
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
