module.exports = {
    data: {
        name: 'ping',
        description: 'check if the bot is alive!',
        aliases: ["health"]
    },
    async execute(msg, args, client) {
        msg.reply("pong!");
    }
};
