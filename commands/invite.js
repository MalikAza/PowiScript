const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ban')
		.setDescription("Ban a user.")
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