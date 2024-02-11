import { useRef } from "react";
import useFadeInAnimation from "../hooks/useFadeInAnimation";

const Hello = () => {
  const ref = useRef(null);

  useFadeInAnimation(ref, 3500);

  return (
    <h1 className='welcome' ref={ref}>
      Hello
    </h1>
  );
};

export default Hello;
