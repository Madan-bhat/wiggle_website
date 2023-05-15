import { CometChat } from "@cometchat-pro/chat";
import { useState, useEffect } from "react";
import { getUsers } from "../utils/firebase.methods";
import { firestore } from "../utils/firebase";
const useUsers = () => {
  const [users, setUsers] = useState<any>([]);
  const [error, setError] = useState<any>(null);
  const getUsers = async () => {
    try {
      const usersList:
        | ((prevState: never[]) => never[])
        | {
            uid: any;
            username: any;
            userimg: any;
            bio: any;
            email: any;
            createdAt: any;
            chats: any;
            groups: any;
            requests: any;
          }[] = [];
      const users = await firestore.collection("users").get();
      users.forEach((data) => {
        const {
          uid,
          username,
          userimg,
          bio,
          email,
          createdAt,
          chats,
          groups,
          requests,
        } = data.data();
        usersList.push({
          uid,
          username,
          userimg,
          bio,
          email,
          createdAt,
          chats,
          groups,
          requests,
        });
      });
    } catch (error) {
      setError(error);
    }
  };
  useEffect(() => {
    getUsers();
  }, [users]);

  return [users, error];
};

export default useUsers;
