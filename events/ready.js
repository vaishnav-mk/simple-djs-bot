module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
        // the event that gets fired when your bot becomes ready (https://discordjs.guide/creating-your-bot/event-handling.html#individual-event-files)
        console.log(`Ready! Logged in as ${client.user.tag}`);
    }
};
