const { MessageEmbed } = require('discord.js');
const { Command } = require('discord.js-commando');
const minecraftPlayer = require('minecraft-player');
const { botimage, botname} = require('../../config.js');

module.exports = class McCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'mcplayer',
            group: 'divers',
            memberName: 'mcplayer',
            description: "La commande mcplayer donne des information d'un compte minecraft a partire de son pseudo",
            examples: ["mcplayer"]
        });
    }


    async run(message, args) {
        const server = message.client.server;

        const { uuid } = await minecraftPlayer(args)
        const { usernameHistory } = await minecraftPlayer(args)
        const { username } = await minecraftPlayer(uuid)

        const mcskin = `https://crafatar.com/renders/body/${uuid}`


//        var history = Object.keys(userhistory).map(function(cle) {
//            return [userhistory[cle]];
//        })

        var embed = new MessageEmbed()
            .setColor('GREEN')
            .setTitle(`Information de ${username}`)
            .addField('UUID:', uuid)
            .setImage(mcskin)
        //    .addField('Historique des pseudos', usernameHistory)
            .setFooter(botname, botimage)
            .setTimestamp()


        message.say(embed)

    }
}