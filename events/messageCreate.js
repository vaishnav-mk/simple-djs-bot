const config = require("../config"); //imports your configuration from config.js
module.exports = {
    name: 'messageCreate',
    async execute(msg, client) {
        //registering the "messageCreate" event emitted by regular messages (!ping, !eval etc)
        if (msg.author.bot) return; //ignoring messages sent by bots
        const prefix = config.prefix; //getting the prefix from config
        if (!msg.content.startsWith(prefix)) return; //ignoring messages that dont start with the prefix
        const args = msg.content.slice(prefix.length).trim().split(/ +/); //creating arguments
        const name = args.shift().toLowerCase(); //getting the first argument (the name of the command)
        const command = client.prefixed.get(name) || client.prefixed.find(cmd => cmd.data.aliases && cmd.data.aliases.includes(name));; //getting the command from cache
        if (!command) return; //dropping it if it's not a valid command
        try {
            await command.execute(msg, args, client); //executing the command
        } catch (error) {
            console.error(error); //the command execution has resulted in an error (logs it to the console)
            await msg.reply({
                content: 'This command has resulted in an error! Please report it to the devs'
            }); //it replies to the msg with an error
        }
    }
};
