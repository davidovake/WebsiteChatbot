import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Launcher } from "react-chat-window";
import { useHistory } from "react-router-dom";
import io from "socket.io-client";
import { Root } from "./Chatbot.styles";

/**
 * This is the variable that stores the current URL used within the application context
 */
const URL =
  !process.env.NODE_ENV || process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://stemio-guidleine.herokuapp.com";

/**
 * The frontend side of the socket that connects to the backend
 */
const socket = io(URL);

/**
 *
 * @param {string} email
 * @returns if the entered string qualifies as an email
 */
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

/**
 * This is the component responsbile for creating the chatbot visual interface between the client and the server
 * @returns The react-chat-window Chatbot Launcher
 */
export const Chatbot = () => {
  /**
   * useHistory is the hook responsbile for navigation
   */
  const history = useHistory();

  /**
   * useState is the hook used to manipulate the chatbot messageList
   */
  const [messageList, setMessageList] = useState([
    {
      author: "them",
      type: "text",
      data: { text: "Hey there !" },
    },
  ]);

  /**
   * This method accepts an email as a string and sends a post request to the backend
   * @param {string} email
   */
  const sendEmail = async (email) => {
    await axios({
      method: "POST",
      url: `${URL}/api/newsletter`,
      data: JSON.stringify({ email: email }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  /**
   * This is the method used to send messages to the chatbot through the websocket
   * It utilises the useCallback hook to optimize the run of the function
   */
  const onMessageWasSent = useCallback(
    async (message) => {
      /**
       * Method used to add the current inputted message into the messageList array
       */
      await setMessageList((messageList) => [
        ...messageList,
        message,
        {
          author: "them",
          type: "text",
          data: { text: "••••" },
        },
      ]);

      /**
       * Method responsible for sending data through the socket from the frontend side
       */
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

  /**
   * This is the hook responsbile for listening for the websocket events received from the backend
   */
  useEffect(() => {
    /**
     * This is the event triggered when the frontend connects with the backend through the websocket
     */
    socket.on("connect", () => {
      console.log("connected");
      socket.emit("join", "user1");
    });

    /**
     * Event triggered when the backend is sending a reply back to the frontend
     */
    socket.on("send-msg-response", async (msg) => {
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

    /**
     * This return block is responsbile for clearing the event listeners
     */
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
