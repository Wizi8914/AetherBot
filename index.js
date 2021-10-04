const { CommandoClient, Client, CommandoMessage } = require('discord.js-commando');
const path = require('path');
const Canvas = require('canvas');
const { Discord } = require('discord.js'); 
const { welcomesentence } = require('./strings.json');
const jsoning = require('jsoning');
const db = new jsoning('database.json');
const { badwords, botname } = require('./config');

require('dotenv').config()

// ----------------- create client ----------------------------

const client = new CommandoClient({
    commandPrefix: '>',
    owner: '505762041789808641',
    invite: 'https://discord.gg/WXSkpYauty',
});


require('discord-buttons')(client)

//----------------- DATABASE ---------------------

module.exports = db;


//--------------------- LAVALINK ------------------------


const { LavasfyClient } = require('lavasfy');
const { Manager } = require('erela.js');

const lavasfy = new LavasfyClient({
    clientID: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET
}, [
    {
        id: 'main',
        host: process.env.LAVALINK_HOST,
        port: process.env.LAVALINK_PORT,
        password: process.env.LAVALINK_PASSWORD
    }
]);


client.manager = new Manager({
    nodes: [
        {
            host: process.env.LAVALINK_HOST,
            port: 8000,
            password: process.env.LAVALINK_PASSWORD
        },
    ],
    send(id, payload) {
        const guild = client.guilds.cache.get(id)
        if(guild) {
            guild.shard.send(payload.op, payload.d)
        }
    },

})

client.manager.on("nodeConnect", node => console.log(`Node ${node.options.identifier} connected`))

client.manager.on("nodeError", (node, error) => console.log(`Node ${node.options.identifier} had an error: ${error.message}`))


client.on("raw", (d) => client.manager.updateVoiceState(d));



//---------------------Canvas-------------------------

const applyText = (canvas, text) => {
	const ctx = canvas.getContext('2d');

	let fontSize = 70;

	do {

		ctx.font = `${fontSize -= 10}px sans-serif`;

	} while (ctx.measureText(text).width > canvas.width - 300);

	return ctx.font;
};


const choise = welcomesentence[Math.floor(Math.random() * welcomesentence.length)]

const ChannelID = '859411140945641503'

client.on('guildMemberAdd', async (member) => {
    const message = `:shinto_shrine: <@${member.id}>  ${choise} !`

    const channel = member.guild.channels.cache.get(ChannelID);

    const canvas = Canvas.createCanvas(700, 250);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('./Welcome.png');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'easteregg.png');

    channel.send(message, attachment);
})

//----------------------Role------------------------

client.on('guildMemberAdd', (member) => {
	let membrerole = member.guild.roles.cache.find(role => role.name === 'Membre');

	member.roles.add(membrerole);
})


//-------------------------- badWords -----------------------------

client.on('message', (message) => {
    if(!message.channel.nsfw) {
        if(badwords.some(word => message.content.toLocaleLowerCase().split(/ +/).includes(word) )){
            message.delete()
            message.say(':x: **Vous ne pouvez utiliser ces mots seulement dans un salon NSFW !**').then(async(resultmessage) => {
                setTimeout(() => {
                    resultmessage.delete()
                }, 5000);
            })
        }
    }
});

//-----------------  REGISTERING COMMANDS  -------------------------


client.registry
    .registerDefaultTypes()
    .registerDefaultGroups()
    .registerGroup('music')
	.registerGroup('divers')
	.registerGroup('utilitaire')
	.registerGroup('moderation')
    .registerGroup('interaction')
    .registerCommandsIn(path.join(__dirname, 'commands'));

client.server = {
    queue: [],
    currentVideo: { url: "", title: "Rien pour le moment" },
    dispatcher: null,
    connection: null,
	playlist: null
};

client.once('disconnect', () => {
    console.log('deconnecter');
});

client.once('ready', () => {
    console.log(`Connecté en tant que ${client.user.tag} - (${client.user.id})`);
    client.user.setActivity(`⚙️ ${botname} est actuellement en maintenance`, { type: 'PLAYING' });
    client.manager.init(client.user.id)
}); 

client.on('error', (error) => console.error(error));



client.login(process.env.DISCORD_TOKEN);