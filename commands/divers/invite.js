const { MessageEmbed } = require('discord.js');
const { Command } = require('discord.js-commando');
const { botimage, botname} = require('../../config.js');

module.exports = class InviteCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'invite',
            group: 'divers',
            memberName: 'invite',
            description: 'permet de aficher les invites'
        });
    }

    async run(message) {
        const { guild } = message

        guild.fetchInvites().then((invites) => {
            const inviteCounter = {}

            invites.forEach((invite) => {
                const { uses, inviter } = invite
                const { username, discriminator } = inviter

                const name = `${username}#${discriminator}`

                inviteCounter[name] = (inviteCounter[name] || 0) + uses
            })

            const sortedInvites = Object.keys(inviteCounter).sort(
                (a, b) => inviteCounter[b] - inviteCounter[a]
            )

            sortedInvites.length = 10

            let replytext = " "

            let i = 0

            for (const invite of sortedInvites) {
                const count = inviteCounter[invite]
                i++
                replytext += "`" + i + ".`" + `${invite} a inviter ${count} membre(s) !\n`
            }

            var embed = new MessageEmbed()
            .setTitle(`TOP invite list`)
            .setColor("BLUE")

            embed.addField("Liste:", replytext);
            embed.setFooter(botname, botimage);
            embed.setTimestamp()

            message.say(embed)
        }) 
    }
}
