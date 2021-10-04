const { Command, CommandoMessage, CommandGroup } = require('discord.js-commando');
const { MessageButton } = require('discord-buttons');
const { database } = require('../..');
const { Manager } = require('erela.js');

module.exports = class TestCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'test',
            group: 'music',
            memberName: 'test',
            description: 'commande de test'
        });
    }
    
    /**
     * 
     * @param {CommandoMessage} message 
     */
    
    async run(message, args) {
        if(!message.author.id === '505762041789808641') {
            return message.say(`:x: Seul <@505762041789808641> le developeur du bot peut executer cette commande`)
        }


        //console.log(this.client.registry.groups.toJSON())
        //message.say(uwu)
        //console.log(this.client.registry.groups.size)
    }
}

