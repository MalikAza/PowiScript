const chalk = require('chalk');

module.exports = {
	name: 'ready',
	once: true,
	async execute(client) {
		console.log(chalk.greenBright('Ready!'), 'Logged in as', chalk.yellowBright(`${client.user.tag}`))
	},
};