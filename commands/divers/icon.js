const { MessageEmbed } = require('discord.js');
const { Command } = require('discord.js-commando');
const { botimage, botname } = require('../../config.js')


module.exports = class IconCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'icon',
            group: 'divers',
            memberName: 'icon',
            description: "La commande icon permet d'afficher l'image de profile du bot",
            examples:  ["icon"]
        });
    }

    async run(message) {
        const embed = new MessageEmbed()
            .setColor('GREEN')
            .setTitle(`Icon de \`${botname}\``)
            .setImage(botimage)
            .setFooter(botname, botimage)
            .setTimestamp()

        message.say(embed)
    }
}
