const discord = require("discord.js"); //imports the "discord.js" module
const fs = require('node:fs'); //imports the "fs"(file systems) module
const path = require('node:path');
const client = new discord.Client({
    intents: Object.keys(discord.Intents.FLAGS)
}); //creates a new client instance
client.prefixed = new discord.Collection(); //creates a map for storing prefixed commands (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
client.interactions = new discord.Collection(); //creates a map for storing slash commands
// this is going to go load both "interactions" and "prefixed" commands 
//arrays: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
//array.map(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
["interactions", "prefixed", "events"].map(ctx => {
    const dirPath = path.join(__dirname, ctx); //creating a path for the commands directory
    const commandFiles = fs.readdirSync(dirPath).filter(file => file.endsWith('.js')); //getting the contents from the commands directory
    for (const file of commandFiles) {
        const filePath = path.join(dirPath, file);
        const context = require(filePath); //importing the command/event
        if (ctx === "events") {
            context.once ? client.once(context.name, (...args) => context.execute(...args, client)) : client.on(context.name, (...args) => context.execute(...args, client))
            //executing the event once (ready) or multiple times (msg/interaction create)
            //https://discord.com/developers/docs/topics/gateway#commands-and-events-gateway-events
        } else {
            client[ctx]?.set(context.data.name, context); //setting the command (key: command name, value: command data)
            console.log(`loaded ${context.data.name} (${ctx} command)`)
        }
    }
})
client.login(process.env.token) //logging in
