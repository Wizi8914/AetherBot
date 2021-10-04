const { Command } = require('discord.js-commando');
const fetch = require('node-fetch');
const { MessageEmbed } = require("discord.js");
const { botimage, botname } = require('../../config');
 
module.exports = class dogCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'dog',
            group: 'divers',
            memberName: 'dog',
            description: 'giv dog image'
        });
    }
 
    async run(message, args) {
        let url = await fetch('https://random.dog/woof.json?ref=apilist.fun');
        let responce = await url.json();
       
        const embed = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Image / Gif / Vidéo aleatoire de chien')
            .setURL(responce.url)
            .setImage(responce.url)
            .setDescription("Si L'`image` le `gif` ou la `vidéo` ne charge pas clicker sur le **titre**")
            .setFooter(botname, botimage)
            .setTimestamp()

        message.say(embed)
    }
}