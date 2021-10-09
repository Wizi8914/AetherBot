const { Command } = require('discord.js-commando');

module.exports = class PingCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'ping',
            group: 'utilitaire',
            memberName: 'ping',
            description: "La commande ping permet d'afficher le ping du bot",
            examples: ["ping"]
            
        });
    }

    async run(message) {
        message.say('**:clock4: Calcule du ping...**').then((resultMessage) => {
            const ping = resultMessage.createdTimestamp - message.createdTimestamp

            resultMessage.edit(`Latence du bot: ` + "`" + `${ping}` + "ms`")
        })
    }
}
