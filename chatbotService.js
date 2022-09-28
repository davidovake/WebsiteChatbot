const { NlpManager } = require("node-nlp");
const { Socket } = require("socket.io");
const manager = new NlpManager({ languages: ["en"] });
// 1 - Train the IA

/**
 * Method responsbile for training the chatbot
 * @returns the trained chatbot
 */
async function trainChatBotIA() {
  return new Promise(async (resolve, reject) => {
    // Adds the utterances and intents for the NLP
    // // Train also the NLG
    // Adds the utterances and intents for the NLP
    manager.addDocument("en", "goodbye for now", "greetings.bye");
    manager.addDocument("en", "bye bye take care", "greetings.bye");
    manager.addDocument("en", "okay see you later", "greetings.bye");
    manager.addDocument("en", "bye for now", "greetings.bye");
    manager.addDocument("en", "i must go", "greetings.bye");
    manager.addDocument("en", "hello", "greetings.hello");
    manager.addDocument("en", "hi", "greetings.hello");
    manager.addDocument("en", "howdy", "greetings.hello");
    manager.addDocument("en", "What is my name?", "greetings.myname");
    manager.addDocument("en", "1", "greetings.options");
    manager.addDocument("en", "2", "greetings.options");
    manager.addDocument("en", "3", "greetings.options");
    manager.addDocument(
      "en",
      "I want to subscribe to the newsletter",
      "greetings.subscribe"
    );
    manager.addDocument("en", "My mail is %email%", "email");
    manager.addDocument("en", "My email is %email%", "email");
    manager.addDocument("en", "Here you have my email: %email%", "email");
    manager.addAnswer(
      "en",
      "email",
      "Your email is {{email}} and has been added to the newsletter"
    );
    // Train also the NLG
    manager.addAnswer(
      "en",
      "greetings.subscribe",
      "Enter your email address please"
    );
    manager.addAnswer("en", "greetings.bye", "Till next time");
    manager.addAnswer("en", "greetings.bye", "see you soon!");
    manager.addAnswer(
      "en",
      "greetings.hello",
      "What do you want to learn today? Pick from the following options: \n1.Frontend\n2.Backend\n3.Full stack"
    );
    manager.addAnswer("en", "greetings.myname", "Your name is Hristiana!");
    manager.addAnswer(
      "en",
      "greetings.options",
      "You are being sent to the requested page"
    );
    await manager.train();
    manager.save();
    console.log("AI has been trainded");
    resolve(true);
  });
}

/**
 * Method responsbile for generating the chatbot response
 * @param {string} qsm
 * @returns generated response by the chatbot
 */
async function generateResponseAI(qsm) {
  // Train and save the mode
  return new Promise(async (resolve, reject) => {
    response = await manager.process("en", qsm);
    resolve(response);
  });
}

/**
 * Method responsible for creating the websocket handshake with the frontend
 * @param {Socket} io
 */
const connectWebSocket = (io) => {
  /**
   * Event triggered on the connection with the frontend
   */
  io.on("connection", function (socket) {
    /**
     * Event triggered on the join of a new user
     */
    socket.on("join", (userId) => {
      socket.join(userId);
      console.log("New user joined!");
    });

    /**
     * Event triggered on receiving a new message from the frontend
     */
    socket.on("new-msg", async function (data) {
      let response = await generateResponseAI(data.msg);
      console.log("Response", response);
      io.to(data.room).emit(
        "send-msg-response",
        response.answer !== undefined
          ? response.answer
          : "I am sorry, I don't understand :( "
      );
    });
  });
};
module.exports = {
  connectWebSocket,
  trainChatBotIA,
};
