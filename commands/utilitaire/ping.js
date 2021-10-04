const { Command } = require('discord.js-commando');

module.exports = class PingCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'ping',
            group: 'utilitaire',
            memberName: 'ping',
            description: 'permet de aficher le ping'
            
        });
    }

    async run(message) {
        message.say('**:clock4: Calcule du ping...**').then((resultMessage) => {
            const ping = resultMessage.createdTimestamp - message.createdTimestamp

            resultMessage.edit(`Latence du bot: ` + "`" + `${ping}` + "ms`")
        })
    }
}
