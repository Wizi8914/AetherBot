const math = require('mathjs');
const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const { botimage, botname} = require('../../config.js');

module.exports = class CalculCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'calcul',
            group: 'divers',
            memberName: 'calcul',
            description: 'La commande calcul permet de faire un calcul plus ou moin complexe',
            examples: ["calcul <calcul>"]
        });
    }
        
    async run(message, args) {

        if(!args[0]) return message.say('Veuillez fournir une question');

        let resp;

        try {
            resp = math.evaluate(args)
        } catch (e) {
            return message.say('Veuillez fournir une question **valide**')
        }

        if(args === '0 + 0') {
            resp = 'la tête a toto';
        }

        const embed = new MessageEmbed()
        .setColor(0x808080)
        .setTitle('Calculatrice')
        .addField('Calcul', `\`\`\`css\n${args}\`\`\``)
        .addField('Résulat', `\`\`\`css\n${resp}\`\`\``)

        embed.setFooter(botname,botimage);

        embed.setTimestamp()

        message.say(embed);
    }
}