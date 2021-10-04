const { MessageEmbed } = require('discord.js');
const { Command } = require('discord.js-commando');
const minecraftPlayer = require('minecraft-player');
var og = require('open-graph');
const { botimage, botname} = require('../../config.js');

module.exports = class SBCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'sbstats',
            aliases: ['skyblockstats'],
            group: 'divers',
            memberName: 'sbstats',
            description: 'dit ce que tu veut aux bot '
        });
    }

    async run(message, args) {

        if(!args) {
            message.say(":x: Vous devez citer le nom d'un joueur !")
        }

        try {
            var { uuid } = await minecraftPlayer(args)
        } catch (error) {
            return message.say(":x: Nous n'avon pas trouver votre pseudonime, Retaper le !")
        }

        const { username } = await minecraftPlayer(uuid)

        const mcskin = `https://crafatar.com/renders/body/${uuid}?size=32&overlay`
        const url = `https://sky.shiiyu.moe/stats/${username}`

        try {
            og(url, function(err, meta) {
                const embed = new MessageEmbed()
                    .setTitle('Information de ' + meta.title)
                    .setURL(url)
                    .setColor('GREEN')
                    .setImage(mcskin)
                    .setDescription(meta.description)
                    .setFooter(botname, botimage)
                    .setTimestamp()
    
                message.say(embed)
            })
        } catch (error) {
            return message.say(":x: Nous n'avon pas trouver votre pseudonime ! retaper le")
        }
    }
}