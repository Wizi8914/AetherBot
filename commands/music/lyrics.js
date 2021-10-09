const { MessageEmbed } = require('discord.js');
const { Command } = require('discord.js-commando');

const { UserNotInVoiceChannel, BotNotInVoiceChannel} = require('../../strings.json')
const { botimage, botname} = require('../../config.js');
const lyricsFinder = require('lyrics-finder')

module.exports = class LyricsCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'lyrics',
            group: 'music',
            memberName: 'lyrics',
            description: "La commande lyrics permet d'afficher les paroles de la musique qui est actuellement entrain d'ètre jouer",
            examples: ["lyrics"]
        });
    }

    /**
     * 
     * @param {CommandoMessage} message 
     */

    async run(message) {

        if (!message.member.voice.channel) {
            return message.say(UserNotInVoiceChannel);
        }

        if (!message.client.voice.connections.first()) {
            return message.say(BotNotInVoiceChannel);
        }

        const server = message.client.server;

        let i = server.currentVideo.title.substring(0, 19)

        let lyrics = await lyricsFinder(i)

        if(!lyrics) {
            return message.say(':x: Aucune parole trouvée !')
        } else {
            if(lyrics.length <= 1000) {
                const l1 = lyrics.substring(0, 1000)
    
                const embed = new MessageEmbed()
                    .setColor('GREEN')
                    .setTitle(server.currentVideo.title)
                    .setDescription(l1)
                    .setFooter(botname,botimage)
                    .setTimestamp()
    
                message.say(embed);
    
            } else if(lyrics.length <= 2000) {
                const l1 = lyrics.substring(0, 1000)
                const l2 = lyrics.substring(1000, 2000)
    
                const embed = new MessageEmbed()
                    .setColor('GREEN')
                    .setTitle(server.currentVideo.title)
                    .setDescription(l1 + l2)
                    .setFooter(botname,botimage)
                    .setTimestamp()
    
                message.say(embed);
    
            } else if(lyrics.length <= 3000) {
                const l1 = lyrics.substring(0, 1000)
                const l2 = lyrics.substring(1000, 2000)
                const l3 = lyrics.substring(2000, 3000)
    
                const embed = new MessageEmbed()
                    .setColor('GREEN')
                    .setTitle(server.currentVideo.title)
                    .setDescription(l1 + l2)
                    .addField('-', l3)
                    .setFooter(botname,botimage)
                    .setTimestamp()
    
                message.say(embed);
    
            } else if(lyrics.length <= 4000) {
                const l1 = lyrics.substring(0, 1000)
                const l2 = lyrics.substring(1000, 2000)
                const l3 = lyrics.substring(2000, 3000)
                const l4 = lyrics.substring(3000, 4000)
    
                const embed = new MessageEmbed()
                    .setColor('GREEN')
                    .setTitle(server.currentVideo.title)
                    .setDescription(l1 + l2)
                    .addField('-', l3)
                    .addField('-', l4)
                    .setFooter(botname,botimage)
                    .setTimestamp()
    
                message.say(embed);
    
            } else if(lyrics.length <= 5000) {
                const l1 = lyrics.substring(0, 1000)
                const l2 = lyrics.substring(1000, 2000)
                const l3 = lyrics.substring(2000, 3000)
                const l4 = lyrics.substring(3000, 4000)
                const l5 = lyrics.substring(4000, 5000)
    
                const embed = new MessageEmbed()
                    .setColor('GREEN')
                    .setTitle(server.currentVideo.title)
                    .setDescription(l1 + l2)
                    .addField('-', l3)
                    .addField('-', l4)
                    .addField('-', l5)
                    .setFooter(botname,botimage)
                    .setTimestamp()
    
                message.say(embed);
    
            } else if(lyrics.length <= 6000) {
                const l1 = lyrics.substring(0, 1000)
                const l2 = lyrics.substring(1000, 2000)
                const l3 = lyrics.substring(2000, 3000)
                const l4 = lyrics.substring(3000, 4000)
                const l5 = lyrics.substring(4000, 5000)
                const l6 = lyrics.substring(5000, 6000)
    
                const embed = new MessageEmbed()
                    .setColor('GREEN')
                    .setTitle(server.currentVideo.title)
                    .setDescription(l1 + l2)
                    .addField('-', l3)
                    .addField('-', l4)
                    .addField('-', l5)
                    .addField('-', l6)
                    .setFooter(botname,botimage)
                    .setTimestamp()
    
                message.say(embed);
    
            } else if(lyrics.length <= 7000) {
                const l1 = lyrics.substring(0, 1000)
                const l2 = lyrics.substring(1000, 2000)
                const l3 = lyrics.substring(2000, 3000)
                const l4 = lyrics.substring(3000, 4000)
                const l5 = lyrics.substring(4000, 5000)
                const l6 = lyrics.substring(5000, 6000)
                const l7 = lyrics.substring(6000, 7000)
    
                const embed = new MessageEmbed()
                    .setColor('GREEN')
                    .setTitle(server.currentVideo.title)
                    .setDescription(l1 + l2)
                    .addField('-', l3)
                    .addField('-', l4)
                    .addField('-', l5)
                    .addField('-', l6)
                    .addField('-', l7)
                    .setFooter(botname,botimage)
                    .setTimestamp()
    
                message.say(embed);
    
            } else if(lyrics.length <= 8000) {
                const l1 = lyrics.substring(0, 1000)
                const l2 = lyrics.substring(1000, 2000)
                const l3 = lyrics.substring(2000, 3000)
                const l4 = lyrics.substring(3000, 4000)
                const l5 = lyrics.substring(4000, 5000)
                const l6 = lyrics.substring(5000, 6000)
                const l7 = lyrics.substring(6000, 7000)
                const l8 = lyrics.substring(7000, 8000)
    
                const embed = new MessageEmbed()
                    .setColor('GREEN')
                    .setTitle(server.currentVideo.title)
                    .setDescription(l1 + l2)
                    .addField('-', l3)
                    .addField('-', l4)
                    .addField('-', l5)
                    .addField('-', l6)
                    .addField('-', l7)
                    .addField('-', l8)
                    .setFooter(botname,botimage)
                    .setTimestamp()
    
                message.say(embed);
    
            } else if(lyrics.length <= 9000) {
                const l1 = lyrics.substring(0, 1000)
                const l2 = lyrics.substring(1000, 2000)
                const l3 = lyrics.substring(2000, 3000)
                const l4 = lyrics.substring(3000, 4000)
                const l5 = lyrics.substring(4000, 5000)
                const l6 = lyrics.substring(5000, 6000)
                const l7 = lyrics.substring(6000, 7000)
                const l8 = lyrics.substring(7000, 8000)
                const l9 = lyrics.substring(8000, 9000)
    
                const embed = new MessageEmbed()
                    .setColor('GREEN')
                    .setTitle(server.currentVideo.title)
                    .setDescription(l1 + l2)
                    .addField('-', l3)
                    .addField('-', l4)
                    .addField('-', l5)
                    .addField('-', l6)
                    .addField('-', l7)
                    .addField('-', l8)
                    .addField('-', l9)
                    .setFooter(botname,botimage)
                    .setTimestamp()
    
                message.say(embed);
    
            } else if(lyrics.length <= 10000) {
                const l1 = lyrics.substring(0, 1000)
                const l2 = lyrics.substring(1000, 2000)
                const l3 = lyrics.substring(2000, 3000)
                const l4 = lyrics.substring(3000, 4000)
                const l5 = lyrics.substring(4000, 5000)
                const l6 = lyrics.substring(5000, 6000)
                const l7 = lyrics.substring(6000, 7000)
                const l8 = lyrics.substring(7000, 8000)
                const l9 = lyrics.substring(8000, 9000)
                const l10 = lyrics.substring(9000, 10000)
    
                const embed = new MessageEmbed()
                    .setColor('GREEN')
                    .setTitle(server.currentVideo.title)
                    .setDescription(l1 + l2)
                    .addField('-', l3)
                    .addField('-', l4)
                    .addField('-', l5)
                    .addField('-', l6)
                    .addField('-', l7)
                    .addField('-', l8)
                    .addField('-', l9)
                    .addField('-', l10)
                    .setFooter(botname,botimage)
                    .setTimestamp()
    
                message.say(embed);
    
            }
        }

    }
}