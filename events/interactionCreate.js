module.exports = {
    name: 'interactionCreate',
    async execute(interaction, client) {
        //registering the "interactionCreate" event emitted by interactions (buttons, selects, slash commands, modals etc)
        if (!interaction.isCommand()) return; //ignoring everything except slash commands
        const command = client.interactions.get(interaction.commandName); //getting the slash command from cache
        if (!command) return; //dropping it if it's not a valid command
        try {
            await command.execute(interaction, client); //executing the command
        }
        catch (error) {
            console.error(error); //the command execution has resulted in an error (logs it to the console)
            await interaction.reply({
                content: 'This command has resulted in an error! please report it to the devs',
                ephemeral: true
            }); //it replies to the interaction with an ephemeral message (message that can only be seen by the author)
        }
    }
};
