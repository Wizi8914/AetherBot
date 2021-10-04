const { MessageEmbed } = require('discord.js');
const { Command, CommandoMessage } = require('discord.js-commando');
const wiki = require('wikipedia');
const { botname, botimage } = require('../../config');
 
module.exports = class WikipediaCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'wikipedia',
            aliases: ['wiki'],
            group: 'divers',
            memberName: 'wikipedia',
            description: 'show wikipedia page'
        });
    }

    /**
     * 
     * @param {CommandoMessage} message 
     */
 
    async run(message, args) {

        if(!args) {
            return message.say(":x: Il faut citer le nom d'une page wikipedia !")
        }

        message.say("**:clock4: Recherche... (`"+`${args}`+"`)**").then(async (resultmessage) => {
            try {
                await wiki.setLang('fr')
                const wikipage = await wiki.page(args, {preload:true, fields:["intro", "images"]})

                //const image = wikipage._images[0].url

                const embed = new MessageEmbed()
                    .setColor('WHITE')
                    .setTitle(wikipage.title)
                    .setURL(wikipage.fullurl)
                    .setDescription(wikipage._intro + " [...]")
                   // .setThumbnail(image)
                    .setFooter(botname, botimage)
                    .setTimestamp();

                resultmessage.delete().then(message.say(embed))


            } catch (error) {
                return resultmessage.edit(':x: Aucune Page correspondant a votre recherche a été trouvé !')
            }
        })
    }
}