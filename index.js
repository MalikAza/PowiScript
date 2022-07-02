const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({
    intents: [Intents.FLAGS.GUILDS]
});

client.once('ready', () => {
    console.log(`Connected as ${client.user.username}#${client.user.discriminator}`);
});

client.login(token);
