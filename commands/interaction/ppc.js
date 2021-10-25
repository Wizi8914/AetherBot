const { MessageEmbed } = require('discord.js');
const { Command } = require('discord.js-commando');
const { CommandoMessage } = require('discord.js-commando')
const { MessageButton } = require('discord-buttons')
const { botname, botimage } = require('../../config.js')

module.exports = class ppcCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'ppc',
            aliases: ['janken'],
            group: 'interaction',
            memberName: 'ppc',
            description: 'La commande ppc permet de jouer a pierre papier ciseaux avec un autre joueur',
            examples: ['ppc <mention>']   
        });
    }

    /**
     * 
     * @param {CommandoMessage} message 
     */

    async run(message, args) {

        //=========================== Verification de la mention (bot, roles, pas d'arg) ===============================

        if(!args) {
            return message.say(":x: Vous devez citer le nom d'un utilisateur !");
        }

        let member = message.mentions.users.first();

        if(!args[1].startsWith('@')) {
            return message.say(':x: Il faut mentioner une personne et non écrire son pseudonime !');
        }

        if(message.author === member) {
            return message.say(':x: Vous ne pouvez pas jouer contre vous même !');
        }

        const botlist = []
        for (let i = 0; i < message.guild.members.cache.filter(member => member.user.bot).toJSON().length; i++) {
            botlist.push(message.guild.members.cache.filter(member => member.user.bot).toJSON()[i].userID)      
        }
        
        if(botlist.includes(member.id)) return message.say(':x: **Vous ne pouver pas jouer avec un bot !**')

        try {
            var memberName = member.username
        } catch (error) {
            return message.say(":x: Il faut entrer un nom d'utilisateur valide !")
        }

        //======================  Message de lancement de partie  ==============================================

        const embed = new MessageEmbed()
            .setColor('BLUE')
            .setTitle(`:handshake: ${message.author.username} a lancer un ppc contre ${memberName}`)
            .setDescription('Les 2 participant doivent donné leur signe dans leur message envoyer respectivement')
            .setFooter(botname, botimage)
            .setTimestamp()
        
        message.say(embed);


        //============================ Choix des joueurs ===========================

        const msgembed = new MessageEmbed()
            .setTitle("C'est a vous de jouer")
            .setDescription("Choisisser le signe que vous voulez jouer")
            .setColor('GREEN')
            .setFooter(botname, botimage)
            .setTimestamp()

        var pierre = new MessageButton()
            .setStyle('gray')
            .setLabel('🧱')
            .setID('Pierre')
        var pierre2 = pierre    

        var papier = new MessageButton()
            .setStyle('gray')
            .setEmoji('📄')
            .setID('Papier')
        var papier2 = papier

        var ciseaux = new MessageButton()
            .setStyle('gray')
            .setLabel('✂️')
            .setID('Ciseaux')
        var ciseaux2 = ciseaux

        message.author.send({embed: msgembed, buttons: [pierre, papier, ciseaux]});
        member.send({embed: msgembed, buttons: [pierre2, papier2, ciseaux2]});

        //====================  Récupération des choix  ========================

        var resp1 = undefined;
        var resp2 = undefined;

        this.client.on('clickButton', async (button) => {
            function removeButton(number) {
                if(number === 1) {
                    pierre.setDisabled()
                    papier.setDisabled()
                    ciseaux.setDisabled()

                    button.message.edit({embed: msgembed, buttons: [pierre, papier, ciseaux]})
                    button.reply.defer()
                } else {
                    pierre2.setDisabled()
                    papier2.setDisabled()
                    ciseaux2.setDisabled()

                    button.message.edit({embed: msgembed, buttons: [pierre2, papier2, ciseaux2]})
                    button.reply.defer()
                }
            }

            if(button.clicker.user.id === message.author.id) {
                resp1 = button.id
                console.log(`${message.author.username}  ${button.id}`);
                removeButton(1);
            } else if(button.clicker.user.id === member.id) {
                resp2 = button.id
                console.log(`${member.username}  ${button.id}`);
                removeButton(2);
            }

            //================== Comparaison des choix ====================

            function emoji(varname) {
                if(varname === 'Pierre') {
                    return '🧱'
                } else if(varname === 'Papier') {
                    return '📄'
                } else if(varname === 'Ciseaux') {
                    return '✂️'
                }
            }
    
            if(typeof(resp1) !== 'undefined' && typeof(resp2) !== 'undefined') {
                const resultembed = new MessageEmbed()
                    .setTitle('Resultat du Jeux')
                    .setColor('BLUE')
                    .setFooter(botname, botimage)
                    .setTimestamp()
                    .addFields(
                        { name: message.author.username, value: "`" + `${(emoji(resp1))} ${resp1}` + "`", inline: true },
                        { name: member.username, value: "`" + `${(emoji(resp2))} ${resp2}` + "`", inline: true }
                    )
    
                    if(resp1 === resp2 ) {
                        resultembed.setDescription(`:o: Aucun joueur n'a gagné il y a égalité`)
                    } else if(resp1 === 'Papier' && resp2 === 'Pierre' || resp1 === 'Ciseaux' && resp2 === 'Papier' || resp1 === 'Pierre' && resp2 === 'Ciseaux') {
                        resultembed.setDescription(`:tada: **${message.author.username}** a gagné la partie !`)
                    } else {
                        resultembed.setDescription(`:tada: **${member.username}** a gagné la partie !`)
                    }
    
                message.say(resultembed)
            }
        });
    }
}