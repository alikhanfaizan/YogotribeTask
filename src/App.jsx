// src/App.jsx
import { useState } from "react";

function App() {
  // State to store the cat fact
  const [fact, setFact] = useState("");

  // State to track loading status
  const [isLoading, setIsLoading] = useState(false);

  // Async function to fetch a random cat fact
  const fetchCatFact = async () => {
    setIsLoading(true); // Show loading spinner
    setFact(""); // Clear previous fact while loading

    try {
      // Fetch data from the public API
      const res = await fetch("https://catfact.ninja/fact");
      const data = await res.json();
      setFact(data.fact); // Update the fact state
    } catch (error) {
      // In case of error, show fallback message
      setFact("Failed to fetch a fact. Please try again.");
    } finally {
      setIsLoading(false); // Stop loading spinner
    }
  };

  return (
    <div
      // Full-screen centered layout with a dark gradient background
      className="min-h-screen flex items-center justify-center
                 bg-gradient-to-tr from-gray-900 via-purple-900 to-indigo-900 p-6"
    >
      <div
        // Stylish card container with gradient, blur, rounded corners, borders, shadows, and animations
        className="bg-gradient-to-r from-[#fddb92] to-[#d1fdff] bg-opacity-10 backdrop-blur-md
                   rounded-tl-3xl rounded-br-3xl rounded-tr-lg rounded-bl-lg
                   border border-indigo-700
                   shadow-2xl shadow-indigo-700/50
                   max-w-md w-full p-10
                   transform transition duration-500
                   hover:scale-[1.05] hover:rotate-1
                   hover:shadow-4xl hover:shadow-indigo-700/70
                   animate-slide-in"
      >
        <h1
          className="text-4xl font-extrabold mb-8 text-center
                     text-transparent bg-clip-text
                     bg-gradient-to-r from-black via-[#E84393] to-[#130F40]
                     animate-text-glow"
        >
          Cat Fact Generator !
        </h1>

        
        <button
          onClick={fetchCatFact} // Trigger fetch on click
          disabled={isLoading} // Disable button when loading
          aria-label="Get a random cat fact"
          className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500
                     text-white text-lg font-medium
                     px-6 py-3 rounded-xl shadow-lg
                     transform transition duration-300 ease-in-out
                     hover:scale-105 hover:-translate-y-1 hover:shadow-2xl
                     active:scale-95 w-full
                     disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            // Loading spinner and text
            <div className="flex items-center justify-center gap-2">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Loading...</span>
            </div>
          ) : (
            // Default button text
            "Get Random Cat Fact"
          )}
        </button>

        {fact && !isLoading && (
          <p
            className="mt-8 max-w-xl mx-auto text-center
                       text-gray-700 text-lg font-semibold
                       leading-relaxed tracking-wide italic
                       shadow-sm animate-fade-in"
          >
            {fact}
          </p>
        )}
      </div>
    </div>
  );
}

export default App;