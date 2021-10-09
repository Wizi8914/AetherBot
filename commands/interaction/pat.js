const { Command, CommandoMessage } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const { botname, botimage } = require('../../config');
 
module.exports = class Patcommand extends Command {
    constructor(client) {
        super(client, {
            name: 'pat',
            group: 'interaction',
            memberName: 'pat',    
            description: 'La commande pat petmet de faire une tape a un utilisateur mentionner',
            examples: ["pat <mention>"]
        });
    }

    /**
     * 
     * @param {CommandoMessage} message 
     */
 
    async run(message, args) {

        let response = await fetch('https://nekos.life/api/v2/img/pat');
        let json = await response.json();

        if(!args) {
            return message.say(":x: Vous devez citer le nom d'un utilisateur !")
        }

        if(args === 'random') {
            for(let i = 0; i < 100; i++) {
                var randomuser = message.guild.members.cache.random()
                var username = randomuser.user.username
                if(randomuser.user.id !== message.author.id) {
                    break
                }
            }

            const embed = new MessageEmbed()
                .setColor('BLUE')
                .setTitle(`:hand_splayed: ${message.author.username} a tapoter la tête de ${username}`)
                .setImage(json.url)
                .setFooter(botname, botimage)
                .setTimestamp()
        
            message.say(embed)
        } else {
            let member = message.mentions.users.first();

        if(!args[1].startsWith('@')) {
            return message.say(':x: Il faut mentioner une personne et non écrire son pseudonime !')
        }

        if(message.author === member) {
            return message.say(':x: Vous ne pouvez pas vous tapoter la tete vous même !')
        }

        try {
            var memberName = member.username
        } catch (error) {
            return message.say(":x: Il faut entrer un nom d'utilisateur valide !")
        }
        
        const embed = new MessageEmbed()
            .setColor('BLUE')
            .setTitle(`:hand_splayed: ${message.author.username} a tapoter la tête de ${memberName}`)
            .setImage(json.url)
            .setFooter(botname, botimage)
            .setTimestamp()
        
        message.say(embed)

        }
    }
}