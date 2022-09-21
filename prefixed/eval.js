const {
    owners
} = require("../config"); //getting the array of owners from config
const axios = require("axios")
function clean(text) {
    if (typeof text === " string") {
        return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    } else {
        return text;
    }
}
module.exports = {
    data: {
        name: 'eval',
        description: 'eval the shit out of this bot!',
        aliases: ["ev", "ex", "execute"]
    },
    async execute(msg, args, client) {
        if (!owners.includes(msg.author.id)) return; //only letting the authorized owners execute it
        let result; //creating a "result" variable
        try {
            result = require("util").inspect(await Promise.resolve(eval(args.join(""))), {
                depth: 0
            }) //evaluating the piece of code you want to eval
        } catch (error) {
            console.dir(error, {
                depth: null
            }) //this evaluation has resulted in an error
            result = error ? error.stack || error.message : error;
        }
        return msg.reply({
            content: ['```js',
                clean(result), '```'
            ].join("\n")
        }) //return the result/error
    }
};
