const { UserNotInVoiceChannel, BotNotInVoiceChannel } = require('../../strings.json');
const { Command, CommandoMessage } = require('discord.js-commando');
const Discord = require('discord.js');
const path = require('path');
const { botimage, botname} = require('../../config.js');
const cooldown = new Set()

module.exports = class SounboardCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'soundboard',
            aliases: ['sb'],
            group: 'divers',
            memberName: 'soundboard',
            description: "La commande soundboard permet d'utiliser une soundboard dans un salon vocal",
            examples: ["soundboard <nom>"],
            args: [
                {
                    key: 'term',
                    prompt: 'il faut mettre une muqisue',
                    default: 'list',
                    type: 'string'
                }
            ]

        });
    }

    async run(message, { term }) {
        const { voice } = message.member
        const voicechannel = message.member.voice.channel;

        if (!message.client.voice.connections.first()) {
            return message.say(BotNotInVoiceChannel);
        }

        if (!voicechannel) {
            return message.say(UserNotInVoiceChannel);
        }

        if(cooldown.has(message.author.id)) {
            message.say(":x: veuillez attendre 5 secondes avant d'éxécuter a nouveaux cette command !")

        } else {

            if (term === 'oof') {
                voice.channel.join().then((connection) => {
                    connection.play(path.join(__dirname, '../../assets/sound/oof.mp3'))
                })
            }
    
            if (term === "uwu") {
                voice.channel.join().then((connection) => {
                    connection.play(path.join(__dirname, '../../assets/sound/uwu.mp3'));
                })
            }
    
            if (term === "tuturu") {
                voice.channel.join().then((connection) => {
                    connection.play(path.join(__dirname, '../../assets/sound/tuturu.mp3'))
                })
            }
    
            if (term === "yamete kudasai") {
                voice.channel.join().then((connection) => {
                    connection.play(path.join(__dirname, '../../assets/sound/yamete-kudasai.mp3'))
                })
            }
    
            if (term === "discord call") {
                voice.channel.join().then((connection) => {
                    connection.play(path.join(__dirname, '../../assets/sound/discord-call.mp3'))
                })
            }
    
            if (term === "bruh") {
                voice.channel.join().then((connection) => {
                    connection.play(path.join(__dirname, '../../assets/sound/bruh.mp3'))
                })
            }
    
            if (term === "ph") {
                voice.channel.join().then((connection) => {
                    connection.play(path.join(__dirname, '../../assets/sound/ph.mp3'))
                })
            }
    
            if (term === "poi") {
                voice.channel.join().then((connection) => {
                    connection.play(path.join(__dirname, '../../assets/sound/poi.mp3'))
                })
            }
    
            if (term === "c'est honteux") {
                voice.channel.join().then((connection) => {
                    connection.play(path.join(__dirname, '../../assets/sound/cesthonteux.mp3'))
                })
            }
    
            if (term === "meme final") {
                voice.channel.join().then((connection) => {
                    connection.play(path.join(__dirname, '../../assets/sound/meme final.mp3'))
                })
            }
    
            if (term === "tk tg") {
                voice.channel.join().then((connection) => {
                    connection.play(path.join(__dirname, '../../assets/sound/tg.mp3'))
                })
            }
    
            if (term === "tg le chat") {
                voice.channel.join().then((connection) => {
                    connection.play(path.join(__dirname, '../../assets/sound/tglechat.mp3'))
                })
            }
    
            if (term === "sexy song") {
                voice.channel.join().then((connection) => {
                    connection.play(path.join(__dirname, '../../assets/sound/sexy.mp3'))
                })
            }
    
            if (term === "nani") {
                voice.channel.join().then((connection) => {
                    connection.play(path.join(__dirname, '../../assets/sound/nani.mp3'))
                })
            }
    
            if (term === "coucou") {
                voice.channel.join().then((connection) => {
                    connection.play(path.join(__dirname, '../../assets/sound/coucou.mp3'))
                })
            }
    
            if (term === "je marche sur le sable") {
                voice.channel.join().then((connection) => {
                    connection.play(path.join(__dirname, '../../assets/sound/bob-leponge-je-marche-sur-le-sable.mp3'))
                })
            }
    
    
            if (term === 'list') {
                const embed = new Discord.MessageEmbed()
                .setTitle(`Liste des Soundboard d'${botname}`)
                .setColor('GREEN')
                .setDescription('Utilisation: ' + "`" + ">soundboard <text>" + "` \n Aliases: " + "`" + ">sb <text>" + "`")
                .setThumbnail('https://i.ibb.co/ZgNT9vT/logo-kinoko.png')
                .addField(":notes: LISTE:", "`" + "oof" + "`, " + "`" + "uwu" + "`, " + "`" + "tuturu" + "`, "+ "`" + "yamate kudasai" + "`, " + "`" + "discord call" + "`, \n"+ "`" + "bruh" + "`, " + "`" + "ph" + "`, " + "`" + "poi" + "`, " + "`" + "c'est honteux" + "`, " + "`" + "meme final" + "`, \n" + "`" + "tk tg" + "`, " + "`" + "tg le chat" + "`, " + "`" + "sexy song" + "`, " + "`" + "nani" + "`, " + "`" + "coucou" + "`, \n" + "`" + "je marche sur le sable" + "`")
                .setTimestamp()
    
                embed.setFooter(botname,botimage);
    
                message.say(embed);
            }

            cooldown.add(message.author.id)
            setTimeout(() => {
                cooldown.delete(message.author.id)
            }, 5000);
        }
    }
}
