const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('midi')
		.setDescription("Wall-it l'ascension."),
	async execute(interaction) {
        await interaction.reply({ content: '<#824253593892290561> Wall-it! ```!as```', ephemeral: true });
	},
};