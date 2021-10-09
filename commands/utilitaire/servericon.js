const { MessageEmbed } = require('discord.js');
const { Command, CommandoMessage } = require('discord.js-commando');
const { botname, botimage } = require('../../config');

 
module.exports = class Servericon extends Command {
    constructor(client) {
        super(client, {
            name: 'servericon',
            group: 'utilitaire',
            memberName: 'servericon',
            description: "La commande servericon permet de donné l'icon du server sur lequelle vous vous trouvez",
            examples: ["servericon"]
        });
    }
    
    /**
     * 
     * @param {CommandoMessage} message 
     */


    async run(message, args) {
        
        const embed = new MessageEmbed()
            .setColor('GREEN')
            .setTitle(`Icon de \`${message.guild.name}\``)
            .setImage(message.guild.iconURL({ size: 2048 }))
            .setFooter(botname, botimage)
            .setTimestamp()

        message.say(embed)
    }
}