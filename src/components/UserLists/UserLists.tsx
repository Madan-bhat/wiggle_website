import { CometChat } from "@cometchat-pro/chat";
import { useState, useEffect } from "react";

const UsersList = ({ selectChat }: any) => {
  const [chats, setChats] = useState<CometChat.User[]>([]);

  return (
    <div>
      {chats.map((item: any) => {
        return <div onClick={() => selectChat(item)}>{item?.name}</div>;
      })}
    </div>
  );
};

export default UsersList;
