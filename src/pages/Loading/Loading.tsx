import { CometChat } from "@cometchat-pro/chat";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../utils/firebase";

const Loading = () => {
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        navigate("/Dashboard");
      } else {
        navigate("/Register");
      }
    });
  }, []);

  return <span>Loading</span>;
};

export default Loading;
