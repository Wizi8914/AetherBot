const { Command } = require('discord.js-commando');
const { EmptyMessage } = require('../../strings.json')

module.exports = class SayCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'say',
            group: 'divers',
            memberName: 'say',
            description: 'dit ce que tu veut aux bot '
        });
    }

    async run(message, args) {

        if(!args) {
             return message.say(EmptyMessage)
        }

        message.say(args);
    }
}