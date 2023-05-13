import { CometChat } from "@cometchat-pro/chat";
import { useState, useEffect } from "react";

export const useGetUsersList = () => {
  const [users, setUsers] = useState<CometChat.User[]>([]);

  useEffect(() => {
    // Get information about the currently logged-in user
    CometChat.getLoggedinUser().then((loggedInUser: any) => {
      // Get a list of all the users in the app
      const usersRequest = new CometChat.UsersRequestBuilder()
        .setLimit(100)
        .build();
      usersRequest.fetchNext().then((userList) => {
        // Remove the currently logged-in user from the list
        const filteredUserList = userList.filter(
          (user: any) => user?.uid !== loggedInUser?.uid
        );
        setUsers(filteredUserList);
        console.log(filteredUserList);
      });
    });
  }, []);

  return users;
};
