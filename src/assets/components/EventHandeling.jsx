import "../components/netflex.css";

export const EventHandling = () =>{

 const handleButtonClick=()=>{
    alert ('I am Clicked')
}

const HandleWalcome = (users) =>{
    alert(`Hey ${users} Welcome`)
}
    return(
        <>
        <button onClick={handleButtonClick} >Click Me</button>
<button onClick={ () => HandleWalcome("Hasan")} > Click Me 2 </button>
        
        </>
    );
}