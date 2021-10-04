const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const osu = require('node-osu');
require('dotenv').config()


const osuApi = new osu.Api(process.env.OSU_TOKEN, {
    notFoundAsError: true,
    completeScores: false,
    parseNumeric: false
})
 
module.exports = class OsuplayerCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'osuplayer',
            group: 'divers',
            memberName: 'osuplayer',
            description: 'information of player'
        });
    }

    async run(message, args) {

        message.say('dont work')

    }
}