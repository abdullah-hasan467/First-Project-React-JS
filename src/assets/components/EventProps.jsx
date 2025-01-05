import "./netflex.css";

export const EventProps = () => {
  const HandleWelcome = (user) => {
    alert(`Hey, ${user} Welcome to the Project`);
  };

  const HandleHover = () => {
    alert("Hey, Welcome Here");
  };

  return (
    <>
      <WelcomeUser
        onClick={() => HandleWelcome("Hasan")}
        onMouseEnter={HandleHover}
      />
    </>
  );
};

const WelcomeUser = (props) => {
  const { onClick, onMouseEnter } = props;  // Corrected destructuring

  const HandleGreetings = () => {
    alert('Hey Good Morning');
    // Ensure to invoke the onClick passed as prop
    if (onClick) {
      onClick();
    }
  };

  return (
    <>
      <button className="btn" onClick={onClick}>Click</button>
      <button className="btn" onMouseEnter={onMouseEnter}>Hover Me</button>
      <button className="btn" onClick={HandleGreetings}>Greetings Me!</button>
    </>
  );
};
