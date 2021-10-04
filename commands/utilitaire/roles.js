const { MessageEmbed } = require('discord.js');
const { Command } = require('discord.js-commando');
const { botimage, botname} = require('../../config.js');
const { UserMissingPermision } = require('../../strings.json');

module.exports = class RoolesCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'roles',
            group: 'utilitaire',
            memberName: 'icon',
            description: 'icon du serveur'
        });
    }

    async run(message) {

        if(!message.member.hasPermission("ADMINISTRATOR")) return message.say(UserMissingPermision);

        const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());

        const embed = new MessageEmbed()
            .setColor('BLUE')
            .setTitle(`Liste des roles de ${message.guild.name} (${roles.length - 1})`)
            .setDescription(roles.join(', '))

            .setFooter(botname,botimage)
            .setTimestamp()

        message.say(embed)

    }
}