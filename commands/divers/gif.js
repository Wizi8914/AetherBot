const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');
const { EmptyMessage } = require('../../strings.json');
const { botname, botimage } = require('../../config');

require('dotenv').config()

module.exports = class GifCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'gif',
            group: 'divers',
            memberName: 'gif',
            description: "La commande gif permet d'afficher un gif en relation avec l'argument de la commande",
            examples: ["gif <text>"]
        });
    }

    async run(message, args) {

        if(!args) {
            return message.say(EmptyMessage)
        }

        message.say("**:clock4: Recherche... (`"+`${args}`+"`)**").then(async (resultmessage) => {


            let url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_KEY}&limit=30&q=${args}`
            let response = await fetch(url);
            let json = await response.json();

            const image = json.data[Math.floor(Math.random() * 30)].url

            resultmessage.edit(`Gif Aléatoire de ` + '`' + `${args}` + '`');
            message.say(image)

    //        const embed = new MessageEmbed()
    //            .setColor('BLUE')
    //            .setTitle(`GIF aléatoire de ${args}`)
    //            .setImage(image)
    //            .setURL(image)
    //            .setFooter(botname, botimage)
    //            .setTimestamp()

    //        message.say(embed);

        })
    }
}
