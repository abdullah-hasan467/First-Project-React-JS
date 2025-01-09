import { useEffect, useState } from "react";
import "./cleanup.css";

export const Cleanup = () => {
  // Initialize count state by reading from localStorage or setting to 0 if not found
  const initialCount = localStorage.getItem("count")
    ? parseInt(localStorage.getItem("count"), 10)
    : 0;
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    // Set up the interval to increment the counter
    const interval = setInterval(() => {
      setCount(prevCount => {
        const newCount = prevCount + 1;
        // Save the updated count to localStorage
        localStorage.setItem("count", newCount);
        return newCount;
      });
    }, 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

useEffect(
  () => {
    document.title = `Crazy ~~ Hasan`;
  },
  [count]
);




  return (
    <div className="container">
      <div className="counter">
        <p>My Subscriber on Youtube</p>
        <div className="odometer" id="odometer">
          {count}
        </div>
        <h3 className="title">
          Subscriber <br />
          Realtime Counter
        </h3>
      </div>
    </div>
  );
};
