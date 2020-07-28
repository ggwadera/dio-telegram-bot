const dialogflow = require("dialogflow")
const configs = require("./dialogflow-config")

const sessionClient = new dialogflow.SessionsClient({
  projectId: configs.project_id,
  credentials: {
    private_key: configs.private_key,
    client_email: configs.client_email
  }
})

async function sendMessage(chatId, message) {
  // Create a new session
  const sessionPath = sessionClient.sessionPath(configs.project_id, chatId)

  // The text query request.
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        // The query to send to the dialogflow agent
        text: message,
        // The language used by the client
        languageCode: "pt-BR"
      }
    }
  }
  const responses = await sessionClient.detectIntent(request)
  console.log("Detected intent")
  const result = responses[0].queryResult
  console.log(`  Query: ${result.queryText}`)
  console.log(`  Response: ${result.fulfillmentText}`)
  if (result.intent) {
    console.log(`  Intent: ${result.intent.displayName}`)
  } else {
    console.log(`  No intent matched.`)
  }
  return {
    text: result.fulfillmentText,
    intent: result.intent.displayName,
    fields: result.parameters.fields
  }
}

module.exports = {
  sendMessage
}
