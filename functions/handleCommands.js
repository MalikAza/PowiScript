module.exports = (client) => {
    client.handleCommands = async (commandFiles, path) => {
        for (const file of commandFiles) {
            const command = require(`${path}/${file}`);

            client.commands.set(command.data.name, command);
        }
    };
}