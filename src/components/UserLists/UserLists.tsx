import { CometChat } from "@cometchat-pro/chat";
import { useState, useEffect } from "react";

const UsersList = ({ selectChat }: any) => {
  const [chats, setChats] = useState<CometChat.User[]>([]);

  useEffect(() => {
    CometChat.getLoggedinUser().then((user) => {
      const limit = 30;
      const usersRequest = new CometChat.UsersRequestBuilder()
        .setLimit(limit)
        .build();

      Promise.all([usersRequest.fetchNext()])
        .then(([userList]) => {
          console.log("Chats list fetched successfully:", [...userList]);
          setChats([...userList]);
        })
        .catch((error) => {
          console.log("Error fetching chats list:", error);
        });
    });
  }, []);

  return (
    <div>
      {chats.map((item: any) => {
        return <div onClick={() => selectChat(item)}>{item?.name}</div>;
      })}
    </div>
  );
};

export default UsersList;
