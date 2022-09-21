module.exports = {
    data: {
        name: "help",
        description: "get help with the bot!"
    },
    async execute(interaction, client) {
        const commands = new Map([...client.prefixed, ...client.interactions])
        await interaction.reply({
            content: `There are a total of (\`${commands.size}\`) commands:\n${[...commands.values()].map(i => `\`${i.data.name}\` - \`${i.data.description}\``).join("\n")}`
        });
    },
};
