import { useRef } from "react";
import useFadeInAnimation from "../hooks/useFadeInAnimation";

const Welcome = () => {
  const ref = useRef(null);

  useFadeInAnimation(ref, 300);

  return (
    <h1 className='welcome' ref={ref}>
      Welcome
    </h1>
  );
};

export default Welcome;
