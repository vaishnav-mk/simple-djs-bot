const {
    owners
} = require("../config"); //getting the array of owners from config
module.exports = {
    data: {
        name: 'deploy',
        description: 'deploy slash commands!',
        aliases: ["dep"]
    },
    async execute(msg, args, client) {
        if (!owners.includes(msg.author.id)) return; //only letting the authorized owners execute it
        const commands = [...client.interactions.values()].map(i => i.data) //getting all the data objects from each command
        await client.application.commands.set(commands); //deploying commands
        await msg.reply({
            content: `Successfully loaded \`${commands.length}\` slash commands: [${commands.map(i => `\`${i.name}\``).join(", ")}]`
        }) //replying to the message
    }
};
