import { useState } from "react";
import ChatRoom from "./components/ChatRoom";

export default function App() {
  const [roomId, setRoomId] = useState("general");
  const [show, setShow] = useState(false);
  const [serverUrl, setServerUrl] = useState("https://localhost:1234");
  return (
    <>
      <label>
        <input
          type='text'
          value={serverUrl}
          onChange={(evt) => setServerUrl(evt.target.value)}
        />
      </label>
      <label>
        Choose the chat room:{" "}
        <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
          <option value='general'>general</option>
          <option value='travel'>travel</option>
          <option value='music'>music</option>
        </select>
      </label>
      <button onClick={() => setShow(!show)}>
        {show ? "Close chat" : "Open chat"}
      </button>
      {show && <hr />}
      {show && <ChatRoom roomId={roomId} serverUrl={serverUrl} />}
    </>
  );
}
