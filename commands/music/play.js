const { VoiceConnection, MessageEmbed } = require('discord.js');
const { Command, CommandoMessage } = require("discord.js-commando");
const { botname, botimage } = require('../../config');
const { UserNotInVoiceChannel, EmptyPlayMessage } = require('../../strings.json');
const { MessageButton, MessageMenu, ButtonCollector} = require('discord-buttons')

require('dotenv').config()

const ytpl = require('ytpl');
const { Player } = require('erela.js');

module.exports = class PlayCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'play',
            aliases: ['p'],
            group: 'music',
            memberName: 'play',
            description: 'lit une video youtube',
                
        });
    }

    /**
     * 
     * @param {CommandoMessage} message 
     * @param {String} query
     */

    async run(message, args) {
        const voicechannel = message.member.voice.channel;
        const server = message.client.server;

        if (!voicechannel) {
            return message.say(UserNotInVoiceChannel)
        } 
        
        if (!args) {
            return message.say(EmptyPlayMessage)
        }

        const res = await this.client.manager.search(
            args,
            message.author
        );

        const player = this.client.manager.create({
            guild: message.guild.id,
            voiceChannel: message.member.voice.channel.id,
            textChannel: message.channel.id,
           // selfDeafen: false,
        });


        voicechannel.join()

//=======================================================

        if(ytpl.validateID(args)) {
            return message.say("c'est une playlist")
        }

        if(args.startsWith('https://www.youtube.com/watch?v=')) {
            return message.say("c'est une video")
        }
        var value = "";

        for (let i = 0; i < 5; i++) {
            value += "**`" + (i + 1) + ".`** [" + res.tracks[i].title + "](" + res.tracks[i].uri +  ")\n";

        }
        
        var embed = new MessageEmbed()
            .setColor('BLUE')
            .setTitle('Voici les 5 premiere vidéos correspondant à votre recherche')
            .setFooter(botname, botimage)
            .setTimestamp()
            .addField('Choisiser une des video en cliquant sur le bouton approprié', value)

//==========================================

        var one = new MessageButton()
            .setStyle('gray')
            .setLabel('1')
            .setID(0)
        var two = new MessageButton()
            .setStyle('gray')
            .setLabel('2')
            .setID(1)
        var three = new MessageButton()
            .setStyle('gray')
            .setLabel('3')
            .setID(2)
        var four = new MessageButton()
            .setStyle('gray')
            .setLabel('4')
            .setID(3)
        var five = new MessageButton()
            .setStyle('gray')
            .setLabel('5')
            .setID(4)

        message.say({embed: embed, buttons: [one, two, three, four, five]})

        this.client.once('clickButton', async (button) => {
            if(button.clicker.user.id === message.author.id) {
                var numbutton = button.id

                one.setDisabled()
                two.setDisabled()
                three.setDisabled()
                four.setDisabled()
                five.setDisabled()
                
                button.message.edit({embed: embed, buttons: [one, two, three, four, five]})
                button.reply.defer() 
            
            }

            message.say(`Vous avez choisi ${res.tracks[numbutton].title}`)

            //console.log(res.tracks[numbutton])

            player.queue.add(res.tracks[numbutton])


           // console.log(playekr.queue)

            console.log(player.queue.length + 1)

            if(!player.playing && !player.paused && !player.queue.size) player.play()
            
        })

    }
}

