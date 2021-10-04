const { MessageEmbed } = require("discord.js");
const { Command, CommandoMessage } = require("discord.js-commando");
const SerApi = require('google-search-results-nodejs');
const { botname, botimage } = require("../../config");
const search = new SerApi.GoogleSearch(process.env.GOOGLE_API_KEY)

require('dotenv').config();

module.exports = class imageCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'image',
            group: 'divers',
            memberName: 'image',
            description: 'cherche une image sur google'
        })
    }

    /**
     * 
     * @param {CommandoMessage} message 
     */


    async run(message, args) {

        message.say("**:clock4: Recherche... (`"+`${args}`+"`)**").then((resultmessage) => {
            const param = {
                q: args,
                tbm: 'isch',
                ijn: '0'
            };
    
            const callback = function(data) {
    
                const img = data['images_results'][Math.floor(Math.random() * 100)].original
                
                var embed = new MessageEmbed()
                    .setColor('BLUE')
                    .setTitle(`Image aléatoire de ${args}`)
                    .setImage(img)
                    .setURL(img)
                    .setDescription("Si L'`image` ne charge pas clicker sur le **titre**")
                    .setFooter(botname, botimage)
                    .setTimestamp()
                
                resultmessage.delete().then(message.say(embed))
    
            }
    
            search.json(param, callback);
        })
    }
}