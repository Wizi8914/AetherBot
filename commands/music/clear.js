const { Command, CommandoMessage } = require('discord.js-commando');
const { UserNotInVoiceChannel, BotNotInVoiceChannel, BotIsNotInSameChannel } = require('../../strings.json');
const Discord = require('discord.js');
const server = new Discord.Client();

module.exports = class ClearCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'clear',
            aliases: ['clearqueue', 'clearlist'],
            group: 'music',
            memberName: 'clear',
            description: 'permet de aficher le vote'
        });
    }

    /**
     * 
     * @param {CommandoMessage} message 
     */

    async run(message) {
        const server = message.client.server;
        const voiceChannel = message.member.voice.channel;

        if (!voiceChannel) {
            return message.say(UserNotInVoiceChannel);
        }

        if (!message.client.voice.connections.first()) {
            return message.say(BotNotInVoiceChannel);
        }

        server.queue = [];

        server.currentVideo = { url: "", title: "Rien pour le moment" };

        message.say(":white_check_mark: La queue a bien été vidée");

    }
}
