const OpenAI = require('openai');
let chatController = {
  // view chat layout.
  view: async (req, res) => {
    try {
      const userMessage = "";
      const chatbotResponse = "";
      return res.render("chat/chat", { userMessage, chatbotResponse });
    } catch (error) {
      req.flash("error_msg", "something went wrong");
    }
  },
// post chat to the ai and get the chat response
  postChat: async (req, res) => {
    const userMessage = req.body.message;
    const apiKey = process.env.API_SECRET_KEY;
    try {

      const openai = new OpenAI({
        apiKey: apiKey,
      });
      const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: userMessage }],
        model: 'gpt-3.5-turbo',
      });
      const chatbotResponse = chatCompletion.choices[0].message.content;
      res.render('chat/chat', { userMessage, chatbotResponse });
    } catch (error) {
      req.flash("error_msg", "something went wrong");
    }
  },
};

module.exports = chatController;
