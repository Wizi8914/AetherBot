const { MessageEmbed } = require('discord.js');
const { Command } = require('discord.js-commando');
const moment = require('moment');
const { botimage, botname} = require('../../config.js');

module.exports = class ServerCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'server',
            group: 'utilitaire',
            memberName: 'server',
            description: "La commande server permet d'avoir plusieur information par apport au server discord sur lequelle vous vous trouvez",
            examples: ["server"]
        });
    }

    async run(message, args) {

        const filterLevels = {
            DISABLED: 'Off',
            MEMBERS_WITHOUT_ROLES: 'No Role',
            ALL_MEMBERS: 'Tout le monde'
        };
        
        const verificationLevels = {
            NONE: 'Aucun',
            LOW: '1',
            MEDIUM: '2',
            HIGH: '3',
            VERY_HIGH: '4'
        };
        
        const regions = {
            brazil: 'Brésil',
            europe: 'Europe',
            hongkong: 'Hong Kong',
            india: 'Inde',
            japan: 'Japon',
            russia: 'Russie',
            singapore: 'Singapour',
            southafrica: 'Afrique du Sud',
            sydeny: 'Sydney',
            'us-central': 'US Central',
            'us-east': 'US Est',
            'us-west': 'US Ouest',
            'us-south': 'US Sud'
        };




        const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());
        const members = message.guild.members.cache;
        const channels = message.guild.channels.cache;
        const emojis = message.guild.emojis.cache;

        var lvlboost = 0

        if (message.guild.premiumSubscriptionCount >= 30) {
            lvlboost = 3
        } else if (message.guild.premiumSubscriptionCount >= 15) {
            lvlboost = 2
        } else if (message.guild.premiumSubscriptionCount >= 2) {
            lvlboost = 1
        } else {
            lvlboost = 0
        }

        


        const embed = new MessageEmbed()
            .setTitle(`**Information de ${message.guild.name}**`)
            .setColor('GREEN')
            .addFields(
                { name: '**:id: ID du Server :**', value: `${message.guild.id}`, inline: true},
                { name: `**:busts_in_silhouette: Membres (${message.guild.memberCount})**`, value: `:person_frowning: Humain : ${members.filter(member => !member.user.bot).size} \n 🤖 Bots : ${members.filter(member => member.user.bot).size}`, inline: true},
                { name: `**:speech_balloon: Salon (${channels.size})**`, value: `:keyboard: Salon textuel: ${channels.filter(channel => channel.type === 'text').size} \n:microphone2: Salon Vocal: ${channels.filter(channel => channel.type === 'voice').size}`, inline: true}
            )

            .addFields(
                { name: `**:crown: Propriétaire**`, value: `${message.guild.owner.user.tag}`, inline: true},
                { name: ':calendar: Créé le', value: `${moment(message.guild.createdTimestamp).format('LT')} ${moment(message.guild.createdTimestamp).format('LL')} [${moment(message.guild.createdTimestamp).fromNow()}]`, inline: true},
                { name: `**:grinning: Émoji (${emojis.size})**`, value: `Émoji Normaux: ${emojis.filter(emoji => !emoji.animated).size}\nÉmoji Animé: ${emojis.filter(emoji => emoji.animated).size}`, inline: true}
            )

            .addFields(
                { name: `**:sparkles: Boost:**`, value: `Nombre de boost: ${message.guild.premiumSubscriptionCount || '0'}\n Niveaux du serveur: ${lvlboost}`, inline: true},
                { name: `:closed_lock_with_key: Roles (${roles.length - 1})`, value: 'Liste des Roles `>roles`', inline: true},
                { name: `**:earth_africa: Autres:**`, value: `Région: ${regions[message.guild.region]}\nNiveau de vérification: ${verificationLevels[message.guild.verificationLevel]}`, inline: true},
            )

            .setFooter(botname,botimage)
            .setTimestamp()
        message.channel.send(embed);


    }
}