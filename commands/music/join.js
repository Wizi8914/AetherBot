const { Command, CommandoMessage } = require('discord.js-commando');
const { botname } = require('../../config');
const { UserNotInVoiceChannel } = require('../../strings.json');

module.exports = class JoinCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'join',
            aliases: ['j', 'summon'],
            group: 'music',
            memberName: 'join',
            description: `La commande join permet de faire venir ${botname} dans votre valon vocal`,
            examples: ["join"]
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

        return message.say(`:white_check_mark: ${botname} a rejoint ` + "`" + voiceChannel.name + "`" + ` !`);
    }
}