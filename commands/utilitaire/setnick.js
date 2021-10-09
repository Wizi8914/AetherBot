const { MessageEmbed } = require('discord.js');
const { Command, CommandoMessage } = require('discord.js-commando');
const { botname, botimage } = require('../../config');
 
module.exports = class nickCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'setnick',
            aliases: ['nick', 'setnickname'],
            group: 'utilitaire',
            memberName: 'setnick',
            description: 'La commande setnick permet de changer le pseudo de la personne mentionné sur le server sur lequel vous vous trouvez',
            examples: ['setnick <mention> [pseudo]'],
            guildOnly: true
        });
    }

    /**
     * 
     * @param {CommandoMessage} message
     */
 
    async run(message, args) {
        if(!args) return message.say(':x: Vous devez citer le pseudo avec le quelle vous voulez changer !');
        try {
            message.mentions.users.first().username
        } catch (error) {
            return message.say(":x: Il faut entrer un nom d'utilisateur valide !")
        }

        const str = message.content.slice(message.guild.commandPrefix).trim().split(/ +/);
        const member = message.guild.members.cache.get(message.mentions.users.first().id)

        if(!str[2] || !member) return message.say(':x: Vous devez mentioner un utilisateur puis écrire sont pseudo `ex: >setnick <@mention> <Nouveau pseudo>`');
        if(str[2].length >= 32) return message.say(':x: Le pseudo doit contenir aux maximum 32 caractères');

        if(message.guild.members.cache.get(message.author.id).hasPermission('MANAGE_NICKNAMES')) {
            member.setNickname(str[2]);
            const embed = new MessageEmbed()
                .setTitle(`:infinity: Changement de pseudo de ${message.mentions.users.first().username}`)
                .setColor('#ff00e6')
                .addField('Ancien Pseudo:', "`" + member.displayName + "`")
                .addField('Nouveau Pseudo:', "`" + str[2] + "`")
                .setFooter(botname, botimage)
                .setTimestamp()
            message.say(embed)

        } else {
            return message.say(":x: Vous n'avez pas la permission de changer les pseudo !")
        }
    }
}