const { Command, CommandoMessage } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const { Commanddontexist } = require('../../strings.json');
const { botimage, botname} = require('../../config.js');

module.exports = class HelpCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'help',
            group: 'utilitaire',
            memberName: 'help',
            description: "commande d'aide bot",
        });
    }

    async run(message, args) {



        //=================   MUSIQUE    ========================

        if (args === "play" || args === "p") {
            const embed = new MessageEmbed()
                .setColor('BLUE')
                .setTitle(`Information de la commande play`)
                .setDescription('Utilisation: `>play <text>`\n Aliases: `>p <text>`')
                .addField('Description:', '`La commande play permet de jouer de la musique dans un salon vocal`')
                .setFooter(botname,botimage)

            message.say(embed)

            return;
        }

        if (args === "queue" || args === "list") {
            const embed = new MessageEmbed()
                .setColor('BLUE')
                .setTitle(`Information de la commande queue`)
                .setDescription('Utilisation: `>queue <nombre>`\n Aliases: `>list <nombre>`')
                .addField('Description:', "`La commande queue permet d'aficher la liste des musique qui vont se succéder`")
                .setFooter(botname,botimage)

            message.say(embed)

            return;
        }

        if (args === "skip") {
            const embed = new MessageEmbed()
                .setColor('BLUE')
                .setTitle(`Information de la commande skip`)
                .setDescription('Utilisation: `>skip`')
                .addField('Description:', "`La commande skip permet de sauter une musique dans la queue`")
                .setFooter(botname,botimage)

            message.say(embed)

            return;
        }

        if (args === "skipto") {
            const embed = new MessageEmbed()
                .setColor('BLUE')
                .setTitle(`Information de la commande skipto`)
                .setDescription('Utilisation: `>skipto <nombre>`')
                .addField('Description:', "`La commande skipto permet de sauter plusieurs musiques dans la queue`")
                .setFooter(botname,botimage)

            message.say(embed)

            return;
        }

        if (args === "join" || args === "j" || args === "summon") {
            const embed = new MessageEmbed()
                .setColor('BLUE')
                .setTitle(`Information de la commande join`)
                .setDescription('Utilisation: `>join`\n Aliases: `>j`, `>summon`')
                .addField('Description:', "`La commande join permet de faire venir Amaterasu dans votre valon vocal`")
                .setFooter(botname,botimage)

            message.say(embed)

            return;
        }

        if (args === "leave" || args === "stop") {
            const embed = new MessageEmbed()
                .setColor('BLUE')
                .setTitle(`Information de la commande leave`)
                .setDescription('Utilisation: `>leave`\n Aliases: `>stop`')
                .addField('Description:', "`La commande stop permet de faire partir Amaterasu de votre vocal`")
                .setFooter(botname,botimage)

            message.say(embed)

            return;
        }

        if (args === "pause") {
            const embed = new MessageEmbed()
                .setColor('BLUE')
                .setTitle(`Information de la commande pause`)
                .setDescription('Utilisation: `>pause`')
                .addField('Description:', "`La commande pause permet permet de mettre la musique jouer en pause`")
                .setFooter(botname,botimage)

            message.say(embed)

            return;
        }

        if (args === "resume") {
            const embed = new MessageEmbed()
                .setColor('BLUE')
                .setTitle(`Information de la commande resume`)
                .setDescription('Utilisation: `>resume`')
                .addField('Description:', "`La commande resume permet de reprendre l'écoute du song mie en pause`")
                .setFooter(botname,botimage)

            message.say(embed)

            return;
        }

        if (args === "info" || args === "i" || args === "np") {
            const embed = new MessageEmbed()
                .setColor('BLUE')
                .setTitle(`Information de la commande info`)
                .setDescription('Utilisation: `>info`\n Aliases: `>i`, `>np`')
                .addField('Description:', "`La commande info permet d'aficher la musique en cour de lecture`")
                .setFooter(botname,botimage)

            message.say(embed)

            return;
        }

        if (args === "clear" || args === "clearqueue" || args === 'clearlist') {
            const embed = new MessageEmbed()
                .setColor('BLUE')
                .setTitle(`Information de la commande clear`)
                .setDescription('Utilisation: `>clear`\n Aliases: `>clearqueue`, `clearlist`')
                .addField('Description:', "`La commande clear permet de suprimer l'intégraliter de la queue sauf la musique actuellement en train d'ètre jouer`")
                .setFooter(botname,botimage)

            message.say(embed)

            return;
        }

        if (args === 'lyrics') {
            const embed = new MessageEmbed()
                .setColor('BLUE')
                .setTitle(`Information de la commande lyrics`)
                .setDescription('Utilisation: `>lyrics`')
                .addField('Description:', "`La commande lyrics permet d'afficher les paroles de la musique qui est actuellement entrain d'ètre jouer`")
                .setFooter(botname,botimage)

            message.say(embed)

            return;
        }



        //================    DIVERS    =========================

        if (args === 'icon') {
            const embed = new MessageEmbed()
                .setColor('BLUE')
                .setTitle(`Information de la commande icon`)
                .setDescription('Utilisation: `>icon`')
                .addField('Description:', "`La commande icon permet d'afficher l'image de profile du bot`")
                .setFooter(botname,botimage)

            message.say(embed)

            return;
        }

        if (args === 'invite') {
            const embed = new MessageEmbed()
                .setColor('BLUE')
                .setTitle(`Information de la commande invite`)
                .setDescription('Utilisation: `>invite`')
                .addField('Description:', "`La commande invite permet d'affichier un classement du nombre d'invitation des différent membes`")
                .setFooter(botname,botimage)

            message.say(embed)

            return;
        }

        if (args === 'soundboard' || args === 'sb') {
            const embed = new MessageEmbed()
                .setColor('BLUE')
                .setTitle(`Information de la commande soundboard`)
                .setDescription('Utilisation: `>soundboard`\n Aliases: `>sb`')
                .addField('Description:', "`La commande soundboard permet d'utiliser une soundboard dans un salon vocal`")
                .setFooter(botname,botimage)

            message.say(embed)

            return;
        }

        if (args === 'coinflip' || args === 'cf') {
            const embed = new MessageEmbed()
                .setColor('BLUE')
                .setTitle(`Information de la commande coinflip`)
                .setDescription('Utilisation: `>coinflip`\n Aliases: `>cf`')
                .addField('Description:', "`La commande coinflip permet de faire un coinflip (pile ou face en francais)`")
                .setFooter(botname,botimage)

            message.say(embed)

            return;
        }

        if (args === 'calcul') {
            const embed = new MessageEmbed()
                .setColor('BLUE')
                .setTitle(`Information de la commande calcul`)
                .setDescription('Utilisation: `>calcul`')
                .addField('Description:', "`La commande calcul permet de faire un calcul plus ou moin complexe`")
                .setFooter(botname,botimage)

            message.say(embed)

            return;
        }

        if (args === 'say') {
            const embed = new MessageEmbed()
                .setColor('BLUE')
                .setTitle(`Information de la commande say`)
                .setDescription('Utilisation: `>say`')
                .addField('Description:', "`La commande say permet de faire répéter ce que vous voulez aux bot`")
                .setFooter(botname,botimage)

            message.say(embed)

            return;
        }

        if (args === 'gif') {
            const embed = new MessageEmbed()
                .setColor('BLUE')
                .setTitle(`Information de la commande gif`)
                .setDescription('Utilisation: `>gif`')
                .addField('Description:', "`La commande gif permet d'afficher un gif en relation avec l'argument de la commande`")
                .setFooter(botname,botimage)

            message.say(embed)

            return;
        }

        if (args === 'avatar') {
            const embed = new MessageEmbed()
                .setColor('BLUE')
                .setTitle(`Information de la commande avatar`)
                .setDescription('Utilisation: `>avatar`')
                .addField('Description:', "`La commande avatar permet d'afficher la photo de profile de la personne mentionner`")
                .setFooter(botname,botimage)

            message.say(embed)

            return;
        }

        if (args === 'sbstats' || args === 'skyblockstats') {
            const embed = new MessageEmbed()
                .setColor('BLUE')
                .setTitle(`Information de la commande skyblockstats`)
                .setDescription('Utilisation: `>skyblockstats`\n Aliases: `>sbstats`')
                .addField('Description:', "`La commande skyblockstats permet d'afficher les statistiques du joueur mentionner sur le skyblock d'Hypixel`")
                .setFooter(botname,botimage)

            message.say(embed)

            return;
        }

        //=================       UTILITAIRE       ==================================

        if (args === 'help') {
            const embed = new MessageEmbed()
                .setColor('BLUE')
                .setTitle(`Information de la commande help`)
                .setDescription('Utilisation: `>help`')
                .addField('Description:', "`Faut-il vraiment citer l'utilisation de la commande help ?`")
                .setFooter(botname,botimage)

            message.say(embed)

            return;
        }

        if (args === 'ping') {
            const embed = new MessageEmbed()
                .setColor('BLUE')
                .setTitle(`Information de la commande ping`)
                .setDescription('Utilisation: `>ping`')
                .addField('Description:', "`La commande ping permet d'afficher le ping du bot`")
                .setFooter(botname,botimage)

            message.say(embed)

            return;
        }

        if (args === 'botinfo') {
            const embed = new MessageEmbed()
                .setColor('BLUE')
                .setTitle(`Information de la commande coinflip`)
                .setDescription('Utilisation: `>botinfo`')
                .addField('Description:', "`La commande botinfo permet d'afficher plusieur information sur le bot`")
                .setFooter(botname,botimage)

            message.say(embed)

            return;
        }

        if (args === 'clearchat' || args === 'cc') {
            const embed = new MessageEmbed()
                .setColor('BLUE')
                .setTitle(`Information de la commande clearchat`)
                .setDescription('Utilisation: `>clearchat`\n Aliases: `>cc`')
                .addField('Description:', "`La commande clearchat permet de supprimer un certain nombre de message (Il faut ètre administrateur pour utiliser cette commande)`")
                .setFooter(botname,botimage)

            message.say(embed)

            return;
        }

        if (args === 'server') {
            const embed = new MessageEmbed()
                .setColor('BLUE')
                .setTitle(`Information de la commande server`)
                .setDescription('Utilisation: `>server`')
                .addField('Description:', "`La commande server permet d'avoir plusieur information par apport au server discord sur lequelle vous vous trouvez`")
                .setFooter(botname,botimage)

            message.say(embed)

            return;
        }

        if (args === 'roles') {
            const embed = new MessageEmbed()
                .setColor('BLUE')
                .setTitle(`Information de la commande roles`)
                .setDescription('Utilisation: `>roles`')
                .addField('Description:', "`La commande roles permet de voir la liste des roles du server sur lequelle vous vous trouver (Il faut ètre administrateur pour utiliser cette commande)`")
                .setFooter(botname,botimage)

            message.say(embed)

            return;
        }
        
        //=============       MODERATION       =======================

        if (args === 'kick') {
            const embed = new MessageEmbed()
                .setColor('BLUE')
                .setTitle(`Information de la commande kick`)
                .setDescription('Utilisation: `>kick`')
                .addField('Description:', "`La commande kick permet de kick la personne mentionner (Il faut ètre administrateur pour utiliser cette commande)`")
                .setFooter(botname,botimage)

            message.say(embed)

            return;
        }

        if (args === 'ban') {
            const embed = new MessageEmbed()
                .setColor('BLUE')
                .setTitle(`Information de la commande ban`)
                .setDescription('Utilisation: `>ban`')
                .addField('Description:', "`La commande ban permet de ban la personne mentionner (Il faut ètre administrateur pour utiliser cette commande)`")
                .setFooter(botname,botimage)

            message.say(embed)

            return;
        }      

        if (!args) {
            const embed = new MessageEmbed()
                .setColor('BLUE')
                .setTitle("Liste des commandes de " + botname)
                .setDescription('Le prefix pour utiliser le Amaterasu est ' + "`>` \n" + "Information sur une commande " + "`>help <text>`")
                .addField(":notes: MUSIQUE :", "`play`, " + "`queue`, " + "`skip`, " + "`skipto`, " + "`join`, " + "`leave`, \n" + "`pause`, " + "`resume`, " + "`info`, " + "`clear`, " + "`lyrics`")
                .addField(":jigsaw: DIVERS :", "`icon`, " + "`invite`, " + "`soundboard`, " + "`coinflip`, \n" + "`calcul`, " + "`say`, " + "`gif`, " + "`avatar`, " + "`skyblockbstats`")
                .addField(":tools: UTILITAIRE :", "`help`, " + "`ping`, " + "`botinfo`, " + "`clearchat`, " + "`server`, \n" + "`roles`")
                .addField(":shield: MODÉRATION :", "`kick`, " + "`ban`")

            embed.setFooter(botname,botimage)
            embed.setTimestamp()


            message.say(embed)

            return;
        } else {
            message.say(Commanddontexist);
        }

    }
}