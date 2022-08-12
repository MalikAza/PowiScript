const chalk = require('chalk');

module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(chalk.greenBright('Ready!'), 'Logged in as', chalk.yellowBright(`${client.user.tag}`))
	},
};