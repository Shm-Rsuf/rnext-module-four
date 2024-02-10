import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(true);

  const handleOnline = () => {
    setIsOnline(true);
  };

  const handleOfline = () => {
    setIsOnline(false);
  };

  useEffect(() => {
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOfline);

    //clean up
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOfline);
    };
  }, []);

  return isOnline;
};

export default useOnlineStatus;
