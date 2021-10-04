const { Command } = require('discord.js-commando');
const { UserMissingPermision } = require("../../strings.json");
const Discord = require("discord.js");

module.exports = class ClearchatCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'clearchat',
            aliases: ['cc'],
            group: 'utilitaire',
            memberName: 'clearchat',
            description: 'clearchat',
        })
    }

    async run(message, args) {
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.say(UserMissingPermision);
        if(!args) return message.say(":x: **Il faut mettre un nombre !**");

        if(args >= 100) return message.say(':x: ** Il faut mettre un nombre entre 1 et 99 seulement !**')

        args ++;
        message.channel.bulkDelete(args).then(() => {
            args --;
            message.say(":white_check_mark:"+` ${args} messages ont été suprimées`).then(msg => msg.delete({ timeout: 5000 }));
        });
    }
}