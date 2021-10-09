const { MessageEmbed } = require('discord.js');
const { Command, CommandoMessage } = require('discord.js-commando');
const { BotNotInVoiceChannel} = require('../../strings.json');
const { botimage } = require('../../config.js');

module.exports = class QueueCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'queue',
            aliases: ['list'],
            group: 'music',
            memberName: 'queue',
            description: "Affiche la file d'attente. Pour afficher différentes pages, il faut ecrir la commande avec le numéro de page spécifié après (queue 2).",
            examples: ["queue [page]"],
            args: [
                {
                    key: 'page',
                    prompt: "Quel page veut tu afficher ?",
                    default: 1,
                    type: 'integer'
                }
            ]
        });
    }

    /**
     * 
     * @param {CommandoMessage} message
     * @param {Number} page
     */
    async run(message, { page }) {
        const server = message.client.server;

        if (!server.queue[0]) {
            return message.say(":x: Il n'y a rien dans la file d'attente");
        }

        if (!message.client.voice.connections.first()) {
            return message.say(BotNotInVoiceChannel);
        }

        const numberofItems = 10;
        const startingItem = (page - 1) * numberofItems;
        const queueLength = server.queue.length;

        var itemPerPage = startingItem + numberofItems;
        var totalPages = 1;

        var embed = new MessageEmbed()
            .setTitle(`File d'attente pour ${message.author.username}`)
            .setColor("BLUE")
            .addField('En train de jouer : ', `[${server.currentVideo.title}]` + `(${server.currentVideo.url})`);

            if (queueLength > 0) {
                var value = "";

                if (queueLength > numberofItems) {
                    totalPages = Math.ceil(queueLength / numberofItems);
                }

                if (page < 0 || (page) > totalPages) {
                    return message.say(":x: Cette page n'existe pas");
                }

                if ( (queueLength - startingItem) < numberofItems ) {
                    itemPerPage = (queueLength - startingItem) + startingItem;
                }

                for (let i = startingItem; i < itemPerPage; i++) {
                    const video = server.queue[i];
                    value += "`" + (i + 1) + ".` [" + video.title + "](" + video.url +  ")\n";
                }
                embed.addField("A venir :", value);
            }

            embed.setFooter(`page ${page}/${totalPages}`,botimage);

            return message.say(embed);
    }
}