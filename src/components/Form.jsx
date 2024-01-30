import { useRef } from "react";
import MyInput from "./MyInput";

export default function Form() {
  const inputRef = useRef(null);
  const handleClick=()=>{
    inputRef.current.focus();
  }

  return (
    <>
      <MyInput ref ={inputRef}/>
      <button onClick={handleClick}>Focus the input</button>
    </>
  );
}
