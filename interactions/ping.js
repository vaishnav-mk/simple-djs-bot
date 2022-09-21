module.exports = {
    data: {
        name: "ping",
        description: "checking if the bot's alive!"
    },
    async execute(interaction) {
        await interaction.reply('Pong!');
    },
};
