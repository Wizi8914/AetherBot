const { Command } = require('discord.js-commando');
const { botname, botimage } = require('../../config');
const { MessageEmbed } = require('discord.js')
require('dotenv').config()
const api = require('i8.ae')
const i8 = new api(process.env.I8_API_KEY)
var validUrl = require('valid-url');


module.exports = class shortCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'short',
            group: 'divers',
            memberName: 'short',
            description: 'short'
        });
    }
 
    async run(message, args) {

        if (validUrl.isUri(args)){
            i8.short(args).then(res => {
                return message.say(res.short);
            })
        } else {
            return message.say(":x: Il s'emblerais qu'il y ai une erreur veuiller reseiller avec un URL valide");
        }
    }
}