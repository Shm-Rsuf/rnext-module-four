
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { createConnection, visitLog } from "../utils/chat";

// const serverUrl = "https://localhost:1234";
export default function ChatRoom({ roomId, serverUrl }) {
  console.log(location.pathname);
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId, serverUrl]);

  useEffect(() => {
    visitLog(roomId);
  }, [roomId]);

  return <h1>Welcome to the {roomId} room!</h1>;
}
