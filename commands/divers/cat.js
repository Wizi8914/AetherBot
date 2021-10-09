const { MessageEmbed } = require('discord.js');
const { Command } = require('discord.js-commando');
const fetch = require('node-fetch');
const { botname, botimage } = require('../../config');
 
module.exports = class catCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'cat',
            group: 'divers',
            memberName: 'cat',
            description: 'La commande cat donne une image aléatoire de chat',
            examples: ["cat"]
        });
    }
 
    async run(message, args) {
        let http = await fetch('https://api.thecatapi.com/v1/images/search');
        let responce = await http.json();

        const embed = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Image aléatoire de chat')
            .setURL(responce[0].url)
            .setImage(responce[0].url)
            .setDescription("Si L'`image` ne charge pas clicker sur le **titre**")
            .setFooter(botname, botimage)
            .setTimestamp()

        message.say(embed)
    }
}