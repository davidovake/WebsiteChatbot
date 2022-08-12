import React from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";
import { Launcher } from "react-chat-window";
import io from "socket.io-client";

const socket = io("http://localhost:3000");

export const Chatbot = () => {
  const [messageList, setMessageList] = useState([
    {
      author: "them",
      type: "text",
      data: { text: "Hey there !" },
    },
  ]);

  const onMessageWasSent = useCallback(
    async (message) => {
      console.log("Message frontend", message);

      console.log("Message list", messageList);

      await setMessageList((messageList) => [...messageList, message]);

      socket.emit("new-msg", {
        msg: message.data.text,
        room: "user1",
      });
    },
    [messageList]
  );

  useEffect(() => {
    // setup();
    socket.on("connect", () => {
      console.log("connected");
      socket.emit("join", "user1");
    });

    socket.on("send-msg-response", async (msg) => {
      console.log("Test: ", msg);

      setMessageList((messageList) => [
        ...messageList,
        {
          author: "them",
          type: "text",
          data: { text: msg },
        },
      ]);
    });

    return () => {
      socket.off("connect");
      socket.off("join");
      socket.off("send-msg-response");
    };
  }, []);

  return (
    <div id="chatbox" className="chatbox">
      <Launcher
        agentProfile={{
          teamName: "Guideline chatbot",
          imageUrl:
            "https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png",
        }}
        // @ts-ignore
        onMessageWasSent={onMessageWasSent}
        // @ts-ignore
        messageList={messageList}
        showEmoji
        newMessagesCount
      />
    </div>
  );
};
