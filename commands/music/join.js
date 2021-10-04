const { Command, CommandoMessage } = require('discord.js-commando');
const { UserNotInVoiceChannel } = require('../../strings.json');

module.exports = class JoinCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'join',
            aliases: ['j', 'summon'],
            group: 'music',
            memberName: 'join',
            description: 'fait rejoindre le bot dans le salon vocal'
        });
    }

    /**
     * 
     * @param {CommandoMessage} message
     * @param {String} query
     */
    async run(message) {
        const voiceChannel = message.member.voice.channel;

        if (!voiceChannel) {
            return message.say(UserNotInVoiceChannel);
        }

        await voiceChannel.join();

        return message.say(":white_check_mark: Amaterasu a rejoint " + "`" + voiceChannel.name + "`" + " !");
    }
}