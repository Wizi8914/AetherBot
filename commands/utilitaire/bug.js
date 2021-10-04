const { MessageEmbed, User } = require('discord.js');
const { Command } = require('discord.js-commando');
const { CommandoMessage } = require('discord.js-commando');
const { botname, botimage } = require('../../config');
 
module.exports = class bugcommand extends Command {
    constructor(client) {
        super(client, {
            name: 'bug',
            group: 'divers',
            memberName: 'bug',
            description: 'report un bug'
        });
    }

    /**
     * 
     * @param {CommandoMessage} message 
     */
 
    async run(message, args) {

        if(!args) {
            return message.say(':x: Il faut citer la description du bug trouver pour aider au developeur a le regler ! ')
        }

        const embed = new MessageEmbed()
            .setColor('BLUE')
            .setTitle(':white_check_mark: **Votre Bug a bien été reporter !**')
            .setDescription(`\`Bug reporter par\`: ${message.author}`)
            .addField('Description du bug:', "`" + args + "`")
            .addField('Salon:', "`" + message.channel.name + "`")
            .setFooter(botname, botimage)
            .setTimestamp()


        message.say(embed)
        message.say(':white_check_mark: **Merci pour votre collaboration, un développeur réglera ce bug dans les prochains jours.**')


        const report = message.guild.members.cache.get('505762041789808641')


        const embed1 = new MessageEmbed()
            .setColor('BLUE')
            .setTitle(':warning: **Un bug à été reporter !**')
            .setDescription(`\`Bug reporter par\`: ${message.author}\n \`id\`: ${message.member.id}`)
            .addField('Description du bug:', "`" + args + "`")
            .addField('Salon:', "`" + message.channel.name + "`")
            .setFooter(botname, botimage)
            .setTimestamp()
        report.send(embed1)
    }
}