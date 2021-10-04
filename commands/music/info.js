const { Command, CommandoMessage } = require('discord.js-commando');

module.exports = class infoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'info',
            aliases: ['i','np'],
            group: 'music',
            memberName: 'info',
            description: 'afiche la musique jouer'
        });
    }

    /**
     * 
     * @param {CommandoMessage} message 
     */

    async run(message) {
        const server = message.client.server;
        
        message.say(":notes: Entrain de jouer - " + "`" + server.currentVideo.title + "`");
    }
}
