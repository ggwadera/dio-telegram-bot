const TelegramBot = require("node-telegram-bot-api")
const df = require("./dialogflow")
const yt = require("./youtube")
const { token } = require("./telegram")

const bot = new TelegramBot(token, { polling: true })

bot.on("message", async (message) => {
  const id = message.chat.id
  const dfResponse = await df.sendMessage(id.toString(), message.text)
  bot.sendMessage(id, dfResponse.text)
  if (dfResponse.intent === "Exercise Request") {
    video = await yt.searchVideo(dfResponse.fields.bodypart.stringValue)
    if (video) {
      bot.sendMessage(id, video)
    } else {
      bot.sendMessage(id, "Desculpa, não achei nenhum vídeo :(")
    }
  }
})
