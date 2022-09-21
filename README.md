# Barebones DJS Bot
Super simple to use DJS to interact with the discord api targeted at completely new users (im looking at you, person who forced to make this)

### Basic Requirements
- `git` command line // or any way for you to clone the repository
- `node` version 16+

### Intents
- Read more on that [here](https://discordjs.guide/popular-topics/intents.html#privileged-intents)

### Setting up the bot
1. Clone the repo using `git clone https://github.com/Nance-the-First/barebones-djs-bot` through the cli
2. Run `cd barebones-djs-bot` to get into the folder
4. Create a `.env` file and add your discord token. If you have no idea how to create a discord bot, read [this](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot)
```
token = YOUR-TOKEN
```
6. Add your prefix in the `config.js` file and the array of owners as well. If you don't know how to get a user's ID, read [this](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-)

### Starting the bot up
1. Go to the directory
2. Execute `node .`
3. The bot should start up and emit the [`Ready`](https://discord.com/developers/docs/topics/gateway#ready) event

### Creating commands
#### Prefixed commands
1. create a file under the `prefixed` folder with the name of the command, `ping.js` as an example for a `ping` command.
2. Pretty much reuse the following piece of code until you understand how js works
```js
module.exports = {
    data: {
        name: 'ping',
        description: 'ping the bot!',
        aliases: ["pong", "work"]
    },
    async execute(msg, args, client) {
      msg.reply("pong!")
    }
};
```
#### Slash commands
1. create a file under the `interactions` folder with the name of the command, `ping.js` as an example for a `ping` command.
2. Pretty much reuse the following piece of code until you understand how js works
3. To find out how you can add options and stuff, go through [this](https://discordjs.guide/interactions/slash-commands.html#registering-slash-commands)
4. `Extra:` DJS has builders for slash commands, embeds, buttons, etc. but I'd recommend that you stick to [raw discord objects](https://discord.com/developers/docs/interactions/application-commands#slash-commands-example-slash-command)
```js
module.exports = {
    data: {
        name: 'ping',
        description: 'ping the bot!'
    },
    async execute(msg, args, client) {
      msg.reply("pong!")
    }
};
```
##### Deploying slash commands
1. Once you're done with everything, run `!deploy` and it should [register the commands for you](https://discord.com/developers/docs/interactions/application-commands#registering-a-command) [*the default prefix is `!`*]
2. If you are a man and use raw discord objects but have no idea how it works, I gotcha. Check out rauf's [`Slash command generator`](https://rauf.wtf/slash)

### Creating events
1. 1. create a file under the `events` directory with the name of the command, `ready.js` as an example for registering the [`Ready`](https://discord.com/developers/docs/topics/gateway#ready) event
2. Pretty much reuse the following piece of code until you understand how js works
3. The ready event only gets dispatched once when your bot connects to the gateway
```js
module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
        console.log(`Ready! Logged in as ${client.user.tag}`);
    }
};
```

### Additional Info
* [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor) is the bible for JS
* Go through the DJS [Guide](https://discordjs.guide) to see how djs works

### A word of advice
* Once you get decently better at JS, ditch the godforsaken wrapper that's djs and use [Eris](https://abal.moe/Eris/) or [Detritus](https://detritusjs.com/) [*Can vouch for detritus*]
