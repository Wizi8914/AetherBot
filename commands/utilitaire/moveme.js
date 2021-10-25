const { Command, CommandoMessage } = require('discord.js-commando');
const { botname, botimage } = require('../../config');
const { MessageEmbed, VoiceChannel } = require('discord.js')
const { UserNotInVoiceChannel } = require('../../strings.json')

module.exports = class movemeCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'moveme',
            group: 'utilitaire',
            memberName: 'moveme',
            description: `La commande moveme permet de vous deplacer dans le salon vocal cité, vous pouvez faire moveme list pour afficher la liste de salons disponibles`,
            examples: ["moveme <salon>/'list'"]
        });
    }

    /**
     * 
     * @param {CommandoMessage} message 
     */
 
    async run(message, args) {
        const voiceChannel = message.member.voice.channel;

        if (!voiceChannel) {
            return message.say(UserNotInVoiceChannel);
        }

        const channel = message.guild.channels.cache.toJSON()
        
        let vclistn = [];
        let vclistid = []
        for (let i = 0; i < channel.length; i++) {

            if(channel[i].type === 'voice') {
                vclistn.push(channel[i].name)
                vclistid.push(channel[i].id)
            }
        }

        if(args === 'list') {
            const embed = new MessageEmbed()
                .setColor('BLUE')
                .setTitle('Liste des Salon(s) disponible(s):')
                let showvoice = [];
                for (var index = 0; index < vclistn.length - 1; index++) {
                    showvoice += "`" + vclistn[index] + "`, "
                }
                showvoice += "`" + vclistn[index] + "`"
                embed.setDescription(showvoice)
                embed.setFooter(botname, botimage)
                embed.setTimestamp()
            return message.say(embed)
        }

        if(vclistn.includes(args)) {
            const u = vclistn.indexOf(args)
            message.member.voice.setChannel(vclistid[u])
            const embed = new MessageEmbed()
                .setColor('BLUE')
                .setTitle(`Changement de salon pour ${message.author.username}`)
                .addField("Salon d'origine:", "`" + voiceChannel.name + "`")
                .addField("Salon d'arrivé:", "`" + message.guild.channels.cache.get(vclistid[u]).name + "`")

            message.say(embed)
        } else {
           return message.say(':x: **Il faut entré un nom de salon vocal Valide**')
        }
    }
}