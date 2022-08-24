const { NlpManager } = require("node-nlp");
const manager = new NlpManager({ languages: ["en"] });
// 1 - Train the IA
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

    // Train also the NLG
    manager.addAnswer("en", "greetings.bye", "Till next time");
    manager.addAnswer("en", "greetings.bye", "see you soon!");
    manager.addAnswer(
      "en",
      "greetings.hello",
      "What do you want to learn today? Pick from the following options: \n1.Frontend\n2.Backend\n3.Full stack"
    );

    // manager.addAnswer("en", "greetings.hello", "Hey there!");
    // manager.addAnswer("en", "greetings.hello", "Greetings!");
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
async function generateResponseAI(qsm) {
  // Train and save the mode
  return new Promise(async (resolve, reject) => {
    response = await manager.process("en", qsm);
    resolve(response);
  });
}
const connectWebSocket = (io) => {
  io.on("connection", function (socket) {
    socket.on("join", (userId) => {
      socket.join(userId);
      console.log("New user joined!");
    });
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
