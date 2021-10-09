const { Command, CommandoMessage } = require('discord.js-commando');
const jsoning = require('jsoning');
const db = new jsoning('warndb.json');


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

        message.say(member.id)

        if(await db.get(member.id) == false) {
            db.set(member.id, 1)
        }

        console.log(db.get(member.id))

        db.math(member.id, "add", 1)

        if(db.get(member.id) == 1) {
            message.say('test')
            db.math(member.id, "add", 1)
        }
    }
}

