import { CometChat } from "@cometchat-pro/chat";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Loading = () => {
  const navigate = useNavigate();

  let user = localStorage.getItem("token");

  console.log(user);

  useEffect(() => {
    let appID: string = "239194f57909aab0",
      region: string = "us",
      appSetting: CometChat.AppSettings = new CometChat.AppSettingsBuilder()
        .subscribePresenceForAllUsers()
        .setRegion(region)
        .autoEstablishSocketConnection(true)
        .build();
    setTimeout(() => {
      CometChat.init(appID, appSetting).then(
        (initialized: boolean) => {
          CometChat.login(
            user,
            "72167c415f6a148abb87684c7647da2bc5856f7b"
          ).then((user) => {
            if (user) {
              navigate("/Dashboard");
            } else {
              navigate("/Register");
            }
          });
          console.log("Initialization completed successfully", initialized);
        },
        (error: CometChat.CometChatException) => {
          console.log("Initialization failed with error:", error);
        }
      );
    }, 250);
  }, []);

  return <span>Loading</span>;
};

export default Loading;
