const { Command, CommandoMessage } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const { Commanddontexist } = require('../../strings.json');
const { botimage, botname } = require('../../config.js');

const emojilist = [
    ":notes:",
    ":jigsaw:",
    ":tools:",
    ":shield:",
    ":performing_arts:"
]

module.exports = class HelpCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'help',
            group: 'utilitaire',
            memberName: 'help',
            description: "Faut-il vraiment citer l'utilisation de la commande help ?",
            examples: ['help <commande>']
        });
    }

    /**
     * 
     * @param {CommandoMessage} message 
     */

    async run(message, args) {

        if (!args) {
            const embed = new MessageEmbed()
                .setColor('BLUE')
                .setTitle("Liste des commandes de " + botname)
                .setDescription(`Le prefix pour utiliser ${botname} est: ` + "`" + `${message.guild.commandPrefix}` + "`" + `\n` + "Information sur une commande: " + "`" + `${message.guild.commandPrefix}help <commande>` + "`");

                let command = [];
                for (let i = 2; i < this.client.registry.groups.size; i++) {
                    
                    for (var index = 0; index < this.client.registry.groups.toJSON()[i].commands.length - 1; index++) {
                        command += "`" + this.client.registry.groups.toJSON()[i].commands[index] + "`, "
                    }
                    command += "`" + this.client.registry.groups.toJSON()[i].commands[index] + "`"
                
                    embed.addField(`${emojilist[(i - 2)]} ${(this.client.registry.groups.toJSON()[i].name).toUpperCase()} :`, command)

                    command = []
                }
                embed.setFooter(botname,botimage)
                embed.setTimestamp()

                message.say(embed)
            return;
        } else {
            let commandlist = [];
                for (let i = 2; i < this.client.registry.groups.size; i++) {
                    
                    for (var index = 0; index < this.client.registry.groups.toJSON()[i].commands.length; index++) {
                        commandlist.push(this.client.registry.groups.toJSON()[i].commands[index])
                    }
                }

            if (!commandlist.includes(args)) {
                return message.say(Commanddontexist)
            } else {
                const embed = new MessageEmbed()
                    .setColor('BLUE')
                    .setTitle(`Information de la commande ${args}`)
                    if(!this.client.registry.findCommands(args)[0].aliases[0]) {
                        embed.setDescription('Utilisation: ' + "`" + `${message.guild.commandPrefix}${this.client.registry.findCommands(args)[0].examples}` + "`")
                    } else if(this.client.registry.findCommands(args)[0].aliases.length === 1) {
                        embed.setDescription('Utilisation: ' + "`" + `${message.guild.commandPrefix}${this.client.registry.findCommands(args)[0].examples}` + "`" + '\n Aliases: ' + "`" + `${message.guild.commandPrefix}${this.client.registry.findCommands(args)[0].aliases[0]}` + "`");
                    } else if(this.client.registry.findCommands(args)[0].aliases.length === 2) {
                        embed.setDescription('Utilisation: ' + "`" + `${message.guild.commandPrefix}${this.client.registry.findCommands(args)[0].examples}` + "`" + '\n Aliases: ' + "`" + `${message.guild.commandPrefix}${this.client.registry.findCommands(args)[0].aliases[0]}` + "`, " + "`" + `${message.guild.commandPrefix}${this.client.registry.findCommands(args)[0].aliases[1]}` + "`");
                    }
                    embed.addField('Description:', "`" + `${this.client.registry.findCommands(args)[0].description}` + "`")
                    embed.setFooter(botname,botimage)
                    embed.setTimestamp()
                
                message.say(embed);
            }
        }
    }
}