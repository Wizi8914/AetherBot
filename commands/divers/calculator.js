const { Command } = require('discord.js-commando');
const { Calculator } = require('weky');
 
module.exports = class CalculatorName extends Command {
    constructor(client) {
        super(client, {
            name: 'calculator',
            group: 'divers',
            memberName: 'calculator',
            description: 'La commande calculator permet de faire apparaitre une calculatrice fonctionnel',
            examples: ["calculator"]
        });
    }
 
    async run(message, args) {
        await Calculator({
            message: message,
            embed: {
                title: '**Calculatrice**',
                color: 'GREY',
                timestamp: true,
            },
            disabledQuery: 'La calculatrice a été desactiver',
			invalidQuery: 'Le calcul est invalide !',
			othersMessage: 'Seul <@{{author}}> peut utiliser ces boutons!',
        })
    }
}