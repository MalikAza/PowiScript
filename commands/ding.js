const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ding')
		.setDescription("Pour mieux !journa."),
	async execute(interaction) {
        await interaction.reply({ content: '<#808432657838768168> Ding ! ```!journa```', ephemeral: true });
	},
};