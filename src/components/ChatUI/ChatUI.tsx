import { CometChat } from "@cometchat-pro/chat";
import { useState, useEffect } from "react";
import "./ChatUI.css";
const ChatUI = (props: any) => {
  const [messages, setMessages] = useState<
    CometChat.MediaMessage[] | CometChat.TextMessage[] | CometChat.BaseMessage[]
  >([]);

  useEffect(() => {
    // Fetch the previous messages
    const messagesRequest = new CometChat.MessagesRequestBuilder()
      .setLimit(50)
      .setUID(props.chat?.uid || "287382738273")
      .setTypes([
        CometChat.MESSAGE_TYPE.TEXT,
        CometChat.MESSAGE_TYPE.IMAGE,
        CometChat.MESSAGE_TYPE.VIDEO,
      ])
      .build();

    messagesRequest.fetchPrevious().then(
      (messages) => {
        console.log("Message list fetched successfully:", messages);
        // Set the messages state variable with the fetched list of messages
        setMessages(messages);
      },
      (error) => {
        console.log("Error fetching messages:", error);
      }
    );
  }, [props.chat]);

  const handleSendMessage = (message: any, messageType: any) => {
    let mediaMessage;

    if (messageType === "image") {
      // Create a media message for the image
      mediaMessage = new CometChat.MediaMessage(
        props.chat.uid,
        message,
        CometChat.MESSAGE_TYPE.IMAGE,
        CometChat.RECEIVER_TYPE.USER
      );
    } else if (messageType === "video") {
      // Create a media message for the video
      mediaMessage = new CometChat.MediaMessage(
        props.chat.uid,
        message,
        CometChat.MESSAGE_TYPE.VIDEO,
        CometChat.RECEIVER_TYPE.USER
      );
    } else {
      // Create a text message
      mediaMessage = new CometChat.TextMessage(
        props.chat.uid,
        message,
        CometChat.MESSAGE_TYPE.TEXT
      );
    }

    // Send the message
    CometChat.sendMessage(mediaMessage).then(
      (message) => {
        console.log("Message sent successfully:", message);
        // Add the sent message to the messages state variable
        setMessages([...messages, message]);
      },
      (error) => {
        console.log("Error sending message:", error);
      }
    );
  };
  return <div className="container">h</div>;
};

export default ChatUI;
