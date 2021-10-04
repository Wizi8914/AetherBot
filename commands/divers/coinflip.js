const { Command } = require("discord.js-commando");
const { MessageEmbed } = require("discord.js");
const { botimage, botname} = require('../../config.js');

module.exports = class CFCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'coinflip',
            aliases: ['cf'],
            group: 'divers',
            memberName: 'coinflip',
            description: 'fait tourner une piuèce',
        })
    }

    async run(message, args) {
        const list = ['pile', 'face'];
        const choise = list[Math.floor(Math.random() * list.length)]

        const embed = new MessageEmbed()
            .setColor('GREEN')
            .setTitle('CoinFlip')
            .setDescription(`La pièce a atterri sur ` + "`" + `${choise}` + "`")
            .setFooter(botname,botimage)
            .setTimestamp()

        message.say(embed)


    }
}