const { Command } = require('discord.js-commando');
const { EmptyMessage } = require('../../strings.json')

module.exports = class SayCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'say',
            group: 'divers',
            memberName: 'say',
            description: 'La commande say permet de faire répéter ce que vous voulez aux bot',
            examples: ["say <text>"]
        });
    }

    async run(message, args) {

        if(!args) {
             return message.say(EmptyMessage)
        }

        message.say(args);
    }
}