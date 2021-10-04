const { Command } = require('discord.js-commando');
const { botname, botimage } = require('../../config');
const { MessageEmbed } = require('discord.js')

 
module.exports = class piCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'pi',
            group: 'divers',
            memberName: 'pi',
            description: 'give pi'
        });
    }
 
    async run(message, args) {
        
        const embed = new MessageEmbed()
            .setColor('BLUE')
            .setTitle('Valeur de PI')
            .addField('Liste des 15 premiers nombres:', `\`\`\`css\n${Math.PI}\`\`\``)
            .setFooter(botname, botimage)
            .setTimestamp();

        message.say(embed)
    }
}