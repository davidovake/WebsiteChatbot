import React, { useCallback, useEffect, useState } from "react";
import { Launcher } from "react-chat-window";
import { useHistory } from "react-router-dom";
import io from "socket.io-client";
import { Root } from "./Chatbot.styles";

const socket = io("http://localhost:3000");

export const Chatbot = () => {
  const history = useHistory();

  const onRedirectClick = (newPath) => () => history.push(newPath);
  const [messageList, setMessageList] = useState([
    {
      author: "them",
      type: "text",
      data: { text: "Hey there !" },
    },
  ]);

  const onMessageWasSent = useCallback(
    async (message) => {
      await setMessageList((messageList) => [...messageList, message]);

      socket.emit("new-msg", {
        msg: message.data.text,
        room: "user1",
      });

      message.data.text === "1"
        ? history.push("/guideline/Frontend")
        : message.data.text === "2"
        ? history.push("/guideline/Backend")
        : message.data.text === "3"
        ? history.push("/guideline/FullStack")
        : console.log();
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
    <Root id="chatbox" className="chatbox">
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
    </Root>
  );
};
