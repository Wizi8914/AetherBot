const { MessageEmbed } = require('discord.js');
const { Command } = require('discord.js-commando');
const { botimage, botname} = require('../../config.js')

module.exports = class AvatarCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'avatar',
            group: 'divers',
            memberName: 'avatar',
            description: 'pp dun joueur'
        });
    }

    async run(message, args) {

        if(!args) {
            return message.say(":x: Vous devez citer le nom d'un utilisateur !")
        }

        let member = message.mentions.users.first();

        if(!args[1].startsWith('@')) {
            return message.say(':x: Il faut mentioner une personne et non écrire son pseudonime !')
        }

        let avatar = member.displayAvatarURL({size: 1024})

        const embed = new MessageEmbed()
            .setColor('BLUE')
            .setTitle(`Avatar de ${member.username}`)
            .setImage(avatar)
            .setFooter(botname,botimage)
            .setTimestamp()

        message.say(embed)
    }
}