// imports
const fs = require('node:fs');
const path = require('node:path');
const { Client, Intents, Collection } = require('discord.js');
const { token } = require('./config.json');

// intents
const client = new Client({
    intents: [Intents.FLAGS.GUILDS]
});

// functions
const functionsPath = path.join(__dirname, 'functions');
const functions = fs.readdirSync(functionsPath).filter(file => file.endsWith('.js'));
// envents
const eventsPath = path.join(__dirname, 'events');
const eventsFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));
// commands
client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

(async () => {
    for (file of functions) {
        require(`./functions/${file}`)(client);
    };
    client.handleEvents(eventsFiles, eventsPath);
    client.handleCommands(commandFiles, commandsPath);
    // connection to Discord
    client.login(token)
})();