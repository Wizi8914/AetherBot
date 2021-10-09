const { MessageEmbed } = require('discord.js');
const { Command, CommandoMessage } = require('discord.js-commando');
const { botname, botimage } = require('../../config');
 
module.exports = class robohashCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'robohash',
            group: 'divers',
            memberName: 'robohash',
            description: "La commande robohash permet de donné le robohash de l'argument de la commande",
            examples: ["robohash <text>"]
        });
    }

    /**
     * 
     * @param {CommandoMessage} message
     */
 
    async run(message, args) {
        const image = `https://robohash.org/${args}.png`

        const embed = new MessageEmbed()
            .setTitle(`Robohash de ${args}`)
            .setColor('GREEN')
            .setImage(image)
            .setURL(image)
            .setFooter(botname, botimage)
            .setTimestamp()

        message.say(embed)
    }
}