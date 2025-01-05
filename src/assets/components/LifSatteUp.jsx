import { useState } from "react";

export const LifitngState = () => {
  const [inputValue, setInputValue] = useState("Hasan");

  return (
    <>
      <InputComponent inputValue={inputValue} setInputValue={setInputValue} />
      <DisplayComponent inputValue={inputValue} />
    </>
  );
};

const InputComponent = ({ inputValue, setInputValue }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Enter Your Name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} // Update state on input change
      />
    </>
  );
};

const DisplayComponent = ({ inputValue }) => {
  return <p>The Current Input value is: {inputValue}</p>;
};
