const { MessageEmbed, version } = require('discord.js');
const { Command, CommandoMessage } = require('discord.js-commando');
const { botversion, repository } = require('../../package.json');
const { botimage, botname} = require('../../config.js');
var cpuStat = require('cpu-stat');
const prettyMilliseconds = require('pretty-ms');

module.exports = class BotInfoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'botinfo',
            group: 'utilitaire',
            memberName: 'botinfo',
            description: 'info du bot',
        })
    }

    /**
     * 
     * @param {CommandoMessage} message 
     */

    async run(message) {
        let totalMembers = 0
        const client = this.client

        let commandlist = [];
        let catelist = 0
        for (let i = 2; i < this.client.registry.groups.size; i++) {
            catelist++
            for (var index = 0; index < this.client.registry.groups.toJSON()[i].commands.length; index++) {
                commandlist.push(this.client.registry.groups.toJSON()[i].commands[index])
            }
        }

        for (const guild of this.client.guilds.cache) {
            totalMembers += (await guild[1].members.fetch()).size
        }
        
        cpuStat.usagePercent(function(err, percent, seconds) {

            const embed = new MessageEmbed()
            .setColor('BLUE')
            .setFooter(botname,botimage)
            .setAuthor(
                `Information de ${botname}`,
                client.user.displayAvatarURL()
            )
            .addField("Information du bot:", [
                `:hash: **Tag du bot:** ${client.user.tag}`,
                `:gear: **Version du bot :** ${botversion}`,
                `:pushpin: **Préfix du bot :** ${message.guild.commandPrefix}`,
                `<:discorddeveloperbadge:882009291907801089> **Développeur :** WIZI#3492`
            ].join("\n"))
            .addField("Information Serveurs:", [
                `:notepad_spiral: **Nombre de server :** ${client.guilds.cache.size}`,
                `:abacus: **Membres au total :** ${totalMembers}`
            ].join("\n"))
            .addField("Stats des Commands:", [
                `:bookmark_tabs: **Nombre de Command :** ${commandlist.length}`,
                `:clipboard: **Nombre de catégories :** ${catelist}`
              ].join("\n"))
            .addField("Versions:", [
                `<:nodejs:881986645480591410> **Version de Node.js :** ${process.version}`,
                `<:discordjs:881987374802935908> **Version de Discord.js :** v${version}`
              ].join("\n"))
            .addField('Statistique machine:', [
                `:chart_with_downwards_trend: **Total De Memoir utiliser :** ${(process.memoryUsage().heapTotal / 1024 / 1024).toFixed(2)} MB`,
                `:bar_chart: **Memoire Utiliser :** ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`,
                `:chart_with_upwards_trend: **Pourcentage du CPU :** ${percent}%`,
                `:arrows_counterclockwise: **Dernier restart :** ${prettyMilliseconds(process.uptime().toFixed(2) * 1000)}`
            ].join("\n"))
            .addField("Liens:", [
                `<:github:881639629529444403> [Repository Github](${repository.url.replace('.git', ' ')})`,
                ":globe_with_meridians: [Site Web](https://amaterasu-dev.netlify.app/)"
            ].join("\n"))

            embed.setTimestamp()

        message.say(embed)

        })
    }
}