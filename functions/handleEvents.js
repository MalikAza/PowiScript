module.exports = (client) => {
    client.handleEvents = async (eventsFiles, path) => {
        for (const file of eventsFiles) {
            const event = require(`${path}/${file}`);
            if (event.once) {
                client.once(event.name, (...args) => event.execute(...args, client));
            } else {
                client.on(event.name, (...args) => event.execute(...args, client));
            }
        }
    };
}