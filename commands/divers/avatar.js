const { MessageEmbed } = require('discord.js');
const { Command } = require('discord.js-commando');
const { botimage, botname} = require('../../config.js')

module.exports = class AvatarCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'avatar',
            group: 'divers',
            memberName: 'avatar',
            description: "La commande avatar permet d'afficher la photo de profile de la personne mentionner",
            examples: ["avatar <mention>"]
        });
    }

    async run(message, args) {

        if(!args) {
            return message.say(":x: Vous devez citer le nom d'un utilisateur !")
        }

        let member = message.mentions.users.first();

        if(!args[1].startsWith('@')) {
            return message.say(':x: Il faut mentionner une personne et non écrire son pseudonime !')
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