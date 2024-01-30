import { useState } from "react";
import ChatRoom from "./components/ChatRoom";

export default function App() {
  const [show, setShow] = useState(true);
  return (
    <div>
      <button onClick={() => setShow((s) => !s)}>
        {show ? "Hide" : "Show"}
      </button>
      {show && <ChatRoom />}
    </div>
  );
}
