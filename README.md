![Shhhh!!!](/emoji/shush.png?raw=true)

### Installation
Clone the repo:

`git clone git@github.com:jeremy-green/shush.bot.git`

Change directories into the repo:

`cd shush.bot`

Install the Node dependencies:

`npm install`

Run it locally:

`node index.js`

Test a setup with Curl:

```bash
curl \
-H "Content-Type: application/x-www-form-urlencoded" \
-X POST \
-d "token=<TOKEN>&team_id=<TEAM_ID>&team_domain=<TEAM_DOMAIN>&channel_id=<CHANNEL_ID>&channel_name=directmessage&user_name=<USER_NAME>&user_id=<USER_ID>&command=/shush&text=@<USER_NAME>&response_url=<RESPONSE_URL>'" \
http://localhost:3000/shush
```

### Slack Setup
#### Slash Command Setup

In the browser, navigate to
https://your-slack-group.slack.com/apps/manage/custom-integrations.
Click on "Slash Commands".

![Slash Commands](/screenshots/Slash Commands.png?raw=true)

Click on "Add Configuration".

![Add Configuration](/screenshots/Add Configuration - Slash Command.png?raw=true)

Name your command and click "Add Slash Command Integration".

![Add Slash Command Integration](/screenshots/Add Slash Command Integration.png?raw=true)

Under "Integration Settings", add the path to your Express server.
Give the Bot a name. And upload an image (Shush emoji is provided).

![Integration Settings](/screenshots/Integration Settings - Slash Command.png?raw=true)

Fill in other fields if desired and click "Save Integration"

![Save Integration](/screenshots/Save Integration.png?raw=true)

#### Incoming WebHook Setup

In the browser, navigate to
https://your-slack-group.slack.com/apps/manage/custom-integrations.
Click on "Incoming WebHooks".

![Incoming WebHooks](/screenshots/Incoming WebHooks.png?raw=true)

Click on "Add Configuration".

![Add Configuration](/screenshots/Add Configuration - Incoming WebHook.png?raw=true)

In "Integration Settings", under "Post to Channel", select "@slackbot.
Copy the "Webhook URL".

![Integration Settings](/screenshots/Integration Settings - WebHooks Command.png?raw=true)

Paste the "Webhook URL" in the `shush.bot.js` file under the "routes" directory and start the Express server.

Assuming everything is configured correctly, there are no Node errors and I've
documented everything properly, then you should be able to anonymously shush
loud people in the office.

Test by `/shush @your-slack-username`.
