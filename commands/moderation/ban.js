const { Command } = require('discord.js-commando');
const { UserMissingPermision } = require('../../strings.json')

module.exports = class BanCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'ban',
            group: 'moderation',
            memberName: 'ban',
            description: 'La commande ban permet de ban la personne mentionner (Il faut ètre administrateur pour utiliser cette commande)',
            examples: ["ban <mention>"]
        });
    }

    async run(message, args) {

        if(!message.member.hasPermission("ADMINISTRATOR")) return message.say(UserMissingPermision);

        if(!args) return message.say(":x: Il faut mettre le nom d'un utilisateur !");

        if(!args[1].startsWith('@')) {

            const victim = message.guild.members.cache.get(args);

            victim.ban();
            message.say(`:white_check_mark: <@${args}> (${args}) a été banni !`);
            
        } else {
            const member = message.mentions.users.first();
            const victim = message.guild.members.cache.get(member.id);

            victim.ban();
            message.say(`:white_check_mark: ${victim} (${member.id}) a été banni !`);

        }
    }
}