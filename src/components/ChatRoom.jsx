import { useEffect } from "react";
import { createConnection } from "../utils/chat";

export default function ChatRoom() {
  useEffect(() => {
    const connection = createConnection();
    connection.connect();

    //clean up here
    return () => {
      connection.disconnect();
    };
  }, []);
  return <h1>Welcome to the chat!</h1>;
}
