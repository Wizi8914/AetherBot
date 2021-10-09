const { Command, CommandoMessage } = require('discord.js-commando');
const { botname } = require('../../config');
 
module.exports = class stopbot extends Command {
    constructor(client) {
        super(client, {
            name: 'stopbot',
            group: 'moderation',
            memberName: 'stopbot',
            description: "La commande stopbot permet d'arreter le bot (Il faut ètre propriétaire du bot pour utiliser cette commande)",
            examples: ["stopbot"]
        });
    }
 
    /**
     * 
     * @param {CommandoMessage} message 
     */

    async run(message, args) {
        if(message.author.id === '505762041789808641') {
            setTimeout(() => {
                this.client.user.setActivity(`⚠️ Procedure d'arrêt activer ! ${botname} va s'arrêter dans quelques instants ⚠️`, { type: 'PLAYING' } )
            }, 1000);
            message.say(`:warning: **Procedure d'arrêt de ${botname} activé. ${botname} va s'eteindre dans les prochaine seconde**`)
            this.client.user.setPresence({ status: 'idle' });
            setTimeout(() => {
                this.client.destroy()
                console.log(`\n${botname} A ÉTÉ ARRETER !!!!!!!!!!!`)
            }, 5000);
        } else {
            message.say(`:x: Seul <@505762041789808641> le developeur du bot peut executer cette commande`)
        }
    }
}