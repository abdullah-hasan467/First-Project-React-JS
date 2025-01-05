import { useState } from "react";
import "../EV.css";


export const Sate = () => {
  const [count, setCount] = useState(0);

  const HandleButtonClick = () => {
    setCount(count => count  + 1);  // Use the previous state value to increment
  };

  const HandleButtonClickDecrement = () =>{
    setCount (count => count - 1)
  }

   const reset = () =>{
    setCount (count => 0)
  }

  return (
    <>
      <h1 className="text-[120px] ml-20 flex justify-center mb-10">
        {count}
      </h1>

      <button onClick={HandleButtonClick} className="btn text-9xl ml-20 bg-green-600 rounded-lg p-10 hover:border-black">
        Increment
      </button>
<button onClick={HandleButtonClickDecrement} className="btn text-9xl ml-20 bg-yellow-400 rounded-lg p-10 hover:border-black">
        Decrement
      </button>

      <button onClick={reset} className="btn text-9xl ml-20  bg-red-400 rounded-lg p-10 hover:border-black">
        Reset
      </button>

    </>
  );
};
