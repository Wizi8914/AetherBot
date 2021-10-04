const { Command } = require('discord.js-commando');
const { UserMissingPermision } = require('../../strings.json')

module.exports = class KickCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'kick',
            group: 'moderation',
            memberName: 'kick',
            description: 'kick un joueur'
        });
    }

    async run(message, args) {

        if(!message.member.hasPermission("ADMINISTRATOR")) return message.say(UserMissingPermision);

        if(!args) return message.say(":x: Il faut mettre le nom d'un utilisateur !");

        if(!args[1].startsWith('@')) {

            const victim = message.guild.members.cache.get(args);

            victim.kick();
            message.say(`:white_check_mark: <@${args}> (${args}) a été kick !`);
            
        } else {
            const member = message.mentions.users.first();
            const victim = message.guild.members.cache.get(member.id);

            victim.kick();
            message.say(`:white_check_mark: ${victim} (${member.id}) a été kick !`);

        }
    }
}
