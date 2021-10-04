const { Command, CommandoMessage } = require('discord.js-commando');
const translate = require('deepl');
const nation = require('../../nation');
const { MessageEmbed } = require('discord.js');
const { botname, botimage } = require('../../config');

require('dotenv').config()

module.exports = class TranslateCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'translate',
            aliases: ['t'],
            group: 'divers',
            memberName: 'translate',
            description: 'traduit un truc'
        });
    }

    /**
     * 
     * @param {CommandoMessage} message 
     */
 
    async run(message, args) {

        if(args === 'list') {
            var value = "";

            for (let i = 0; i <= 20; i++) {
                value += `${nation[i].emojie} **${(nation[i].code).toUpperCase()}** (${nation[i].ename}),  ${nation[(i + 1)].emojie} **${(nation[(i + 1)].code).toUpperCase()}** (${nation[(i + 1)].ename}),  ${nation[(i + 2)].emojie} **${(nation[(i + 2)].code).toUpperCase()}** (${nation[(i + 2)].ename}),  ${nation[(i + 3)].emojie} **${(nation[(i + 3)].code).toUpperCase()}** (${nation[(i + 3)].ename}),\n`;
                i = i + 3
            }
            value += `${nation[24].emojie} **${(nation[24].code).toUpperCase()}** (${nation[24].ename})`

            const embed = new MessageEmbed()
                .setTitle(':earth_africa: **Liste des codes des pays**')
                .setColor('GREEN')
                .setDescription("Utilisation: `>translate <langue d'origine> <langue voulue> <votre texte>`\n\n" + value)
                .setFooter(botname, botimage)
                .setTimestamp()

            return message.say(embed)
        }

        if(!args) {
           return message.say(":x: **Veuillez citer les langue et le texte à traduire en utilisant ce paterne : `>translate <langue d'origine> <langue voulue> <votre texte>`. Pour voir la liste de code des langues disponibles taper `>translate list`.**")
        }

        const str = args.split(' ')

        const nationlist = ["en","bg","zh","cs","da","nl","et","fi","fr","de","el","hu","id","it","ja","lt","pl","pt","ro","ru","es","sv","lv","sk","sl",]
        
        const source = nationlist.indexOf(str[0].toLocaleLowerCase())
        const target = nationlist.indexOf(str[1].toLocaleLowerCase())

        var messagecontent;

        if(message.content.startsWith('>translate')) {
            messagecontent = message.content.slice(17)
        } else {
            messagecontent = message.content.slice(9)
        }

        message.say(':clock4: **Traduction en cour ...**').then(resultmessage => {
            translate({
                free_api: true,
                text: messagecontent,
                source_lang: str[0].toLocaleLowerCase(),
                target_lang: str[1].toLocaleLowerCase(),
                auth_key: process.env.DEEPL_API_KEY
            })
            .then(result => {
    
                const embed = new MessageEmbed()
                    .setColor('GRAY')
                    .setTitle('Traduction')
                    .addField(`${nation[source].emojie} ${nation[source].ename} (${nation[source].name}):`, "`" + messagecontent + "`")
                    .addField(`${nation[target].emojie} ${nation[target].ename} (${nation[target].name}):`, "`" + result.data.translations[0].text + "`")
                    .setFooter(botname, botimage)
                    .setTimestamp()
    
                
                resultmessage.delete().then(message.say(embed))
    
            })
            .catch(error => {
                resultmessage.delete().then(message.say(":x: **Il semblerait qu'il y ait une erreur veuillez réessayer en réutilisant ce paterne : `>translate <langue d'origine> <langue voulue> <votre texte>`. Pour voir la liste de code des langues disponibles taper `>translate list`.**"))
            })
        })
    }
}