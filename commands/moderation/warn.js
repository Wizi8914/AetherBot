const { Command, CommandoMessage } = require('discord.js-commando');
const { getMember } = require('../../models/Provider.js')
const { Member } = require('../../models/models.js')


module.exports = class WarnCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'warn',
            group: 'moderation',
            memberName: 'warn',
            description: 'La commande warn permet de donner un warn a une personne mentionner (Il faut ètre administrateur pour utiliser cette commande)',
            examples: ["warn <mention>"]
        });
    }

    /**
     * 
     * @param {CommandoMessage} message 
     */
 
    async run(message, args) {
        if(!args) {
            return message.say(":x: **Vous devez citer le nom d'un utilisateur !**")
        }

        if(!args[1].startsWith('@')) {
            return message.say(':x: **Il faut mentioner une personne et non écrire son pseudonime !**')
        }

        const member = message.mentions.users.first();

        if(message.author === member) {
            return message.say(':x: **Vous ne pouvez pas vous mettre un warn vous même !**')
        }

        try {
            var memberName = member.username
        } catch (error) {
            return message.say(":x: **Il faut entrer un nom d'utilisateur valide !**")
        }

        const userDB = await getMember(member)

        if (userDB) return message.channel.send(`> **${member.username}** est déjà inscrit dans la Base de Données.`);
        await Member.create({ pseudo: member.username, id: member.id});

        message.channel.send(`> **${member.username}** à bien été ajouté`);
    }
}

