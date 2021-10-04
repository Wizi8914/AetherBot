const { Command, CommandoMessage } = require('discord.js-commando');
const { UserNotInVoiceChannel, BotNotInVoiceChannel, BotIsNotInSameChannel } = require('../../strings.json');

module.exports = class VoteCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'leave',
            aliases: ['l', 'stop'],
            group: 'music',
            memberName: 'leave',
            description: 'permet de aficher le vote'
        });
    }

    async run(message) {
        const voiceChannel = message.member.voice.channel;
        const server = message.client.server;

        if (!voiceChannel) {
            return message.say(UserNotInVoiceChannel);
        }

        if (!message.client.voice.connections.first()) {
            return message.say(BotNotInVoiceChannel);
        }

        server.queue = [];
        server.currentVideo = { url: "", title: "Rien pour le moment" };

        voiceChannel.leave();
        message.say(":white_check_mark: Amaterasu a quitter " + "`" + message.member.voice.channel.name + "`" + " !");
    }
}