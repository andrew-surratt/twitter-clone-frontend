import {useState} from "react";

export const useSession = () => {
  const [session, setSession] = useState({
      jSessionId: null,
      username: null,
      userImage: '../logo192.png'
  });
  return [session, setSession];
}
