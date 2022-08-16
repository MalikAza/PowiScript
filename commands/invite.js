const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('invite')
		.setDescription("Show the server link.")
        .addUserOption(option =>
            option.setName('user')
                .setDescription("The user you want to tag to show server link.")
                .setRequired(false)),
	async execute(interaction) {
        const user = interaction.options.getUser('user');
        if (user) {
            await interaction.reply(`${user} : https://discord.gg/EyNsdbU`)
        } else {
            await interaction.reply('https://discord.gg/EyNsdbU');
        }
	},
};