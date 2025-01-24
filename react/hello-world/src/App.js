import { useState } from "react";
import "./App.css";
import Counter from "./Counter";

function App() {
  const [showB, setShowB] = useState(true);
  const [isFancy, setIsFancy] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  return (
    <>
      <div>
        <Counter />
        {showB && <Counter />}
        <label>
          <input
            type="checkbox"
            checked={showB}
            onChange={(e) => {
              setShowB(e.target.checked);
            }}
          />
          Render the second counter
        </label>
      </div>
      <div>
        {isPaused ? <p>See you later!</p> : <Counter />}
        <label>
          <input
            type="checkbox"
            checked={isPaused}
            onChange={(e) => {
              setIsPaused(e.target.checked);
            }}
          />
          Take a break
        </label>
      </div>
    </>
  );
}

export default App;
