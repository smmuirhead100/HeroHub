const { Configuration, OpenAIApi } = require('openai')
const config = require('dotenv').config()
const readline = require('readline')


const configuration = new Configuration({
    apiKey: process.env.OPEN_AI_KEY
})

const openai = new OpenAIApi(configuration)


const getResponse = async (character, text) => {
  let curr
  const response = await openai
    .createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{role: "system", content: `Respond as if you are ${character}. If not prompted anything to do, suggest playing a game.`},
                {role: "user", content: text }],
    })
    .then((res) => {
      curr = (res.data.choices[0].message.content)
    })
    .catch((e) => {
      console.log(e);
    });
  return curr;
}


module.exports = getResponse