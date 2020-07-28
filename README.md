# dio-telegram-bot

Project made available by [Digital Innovation One](https://web.digitalinnovation.one/) where a bot for Telegram that sends videos of training and exercises requested by the user is developed using Node.js and [DialogFlow](https://dialogflow.cloud.google.com/) from Google for natural language processing.

## How to use

1. Clone this repository

```sh
git clone https://github.com/ggwadera/dio-telegram-bot.git
cd dio-telegram-bot
```

2. Install the npm packages

```sh
npm install
```

3. Configure your API keys for Telegram, Youtube and DialogFlow

  - For Telegram, save a file in the root directory named `token.json`with the following contents:
  
  ```json
  {
    "token": "YOUR-TELEGRAM-TOKEN-HERE"
  }
  ```
  
  - For Youtube, save a file in the root directory named `youtube-key.json`with the following contents:
  
  ```json
  {
    "key": "YOUR-YOUTUBE-API-KEY-HERE"
  }
  ```
  
  - For DialogFlow, download the key file for your project as JSON in your Google Cloud Platform [service accounts](https://console.cloud.google.com/projectselector2/iam-admin/serviceaccounts) and save it in the root directory with the name `dialogflow-config.js`
