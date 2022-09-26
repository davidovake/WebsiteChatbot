import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Launcher } from "react-chat-window";
import { useHistory } from "react-router-dom";
import io from "socket.io-client";
import { Root } from "./Chatbot.styles";

const URL =
  !process.env.NODE_ENV || process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://stemio-guidleine.herokuapp.com";

const socket = io(URL);

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const Chatbot = () => {
  const history = useHistory();

  const [messageList, setMessageList] = useState([
    {
      author: "them",
      type: "text",
      data: { text: "Hey there !" },
    },
  ]);

  const sendEmail = async (email) => {
    console.log("Gets in the email sender: ", email);

    await axios({
      method: "POST",
      url: `${URL}/api/newsletter`,
      data: JSON.stringify({ email: email }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const onMessageWasSent = useCallback(
    async (message) => {
      await setMessageList((messageList) => [
        ...messageList,
        message,
        {
          author: "them",
          type: "text",
          data: { text: "••••" },
        },
      ]);

      socket.emit("new-msg", {
        msg: message.data.text,
        room: "user1",
      });

      validateEmail(message.data.text)
        ? sendEmail(message.data.text)
        : message.data.text === "1"
        ? history.push("/guideline/Frontend")
        : message.data.text === "2"
        ? history.push("/guideline/Backend")
        : message.data.text === "3"
        ? history.push("/guideline/FullStack")
        : console.log("Non specific text: ", message.data.text);
    },
    [history]
  );

  useEffect(() => {
    // setup();
    socket.on("connect", () => {
      console.log("connected");
      socket.emit("join", "user1");
    });

    socket.on("send-msg-response", async (msg) => {
      console.log("Test: ", msg);

      setMessageList((messageList) => {
        messageList.pop();

        return [
          ...messageList,
          {
            author: "them",
            type: "text",
            data: { text: msg },
          },
        ];
      });
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
