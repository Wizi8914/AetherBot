const { MessageEmbed } = require('discord.js');
const { Command, CommandoMessage } = require('discord.js-commando');
const fetch = require('node-fetch');
const { botimage } = require('../../config');
 
module.exports = class AnimeinfoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'animeinfo',
            aliases: ['anime'],
            group: 'divers',
            memberName: 'animeinfo',
            description: 'donne des information par apport a un anime'
        });
    }

    /**
     * 
     * @param {CommandoMessage} message
     */

    async run(message, args) {

        if(!args) {
            return message.say(":x: Vous devez citer le nom d'un anime !")
        }

        var page = (args.split(', ')[1] - 1)

        if(!page) page = 0

        const { data } = await fetch(`https://kitsu.io/api/edge/anime?filter[text]=${encodeURIComponent(args)}`).then((responce) => responce.json())

        if(!data[0]) {
            message.say(":x: **Il semblerait qu'il y ait un probleme veuillez réessayer**")
        }

        const genre = await fetch(data[0].relationships.genres.links.related).then((responce) => responce.json())

        var genrelist = [];

        for (let i = 0; i < genre.data.length; i++) {
            genrelist += "`" + `${genre.data[i].attributes.name}` + "`, "
        }

        if(!data || !data.length) return message.say(":x: Il s'emblerais qu'il y ai un probleme veuillez réessayer");
        
        const embed = new MessageEmbed()
            .setTitle(`${data[page].attributes.titles.en} (${data[page].attributes.titles.en_jp}) (${data[0].attributes.titles.ja_jp})`)
            .setColor('#ff00ea')
            .setDescription('Utilisation: ' + "`" + '>anime <titre>, [page]' + "`" + '\n\n' + data[page].attributes.synopsis)
            .addFields(
                { name: `:desktop: **Episodes (${data[0].attributes.episodeCount})**`, value: `:page_facing_up: Min Par Ep: ${data[page].attributes.episodeLength} \n :abacus: Min Total: ${data[page].attributes.totalLength} \n :shinto_shrine: Status: ${data[page].attributes.status}`, inline: true },
                { name: ":earth_africa: **Information:**", value: `:eyes: Type: ${data[page].type} \n :star: Genres: ${genrelist}`, inline: true },
                { name: ":date: **Date:**", value: `:chart_with_upwards_trend: Début: ${data[page].attributes.startDate} \n :chart_with_downwards_trend: Fin: ${data[page].attributes.endDate}`, inline: true }    
            )
            .setThumbnail(data[page].attributes.posterImage && data[page].attributes.posterImage.original)
            .setURL(`https://kitsu.io/anime/${data[page].id}`)
            .setFooter(`Page ${page + 1}/${data.length}`, botimage)
            .setTimestamp()
            


        message.say(embed)
    }
}