const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ban')
		.setDescription("Ban a user.")
        .addUserOption(option =>
            option.setName('user')
                .setDescription("The user of the person you want to ban.")
                .setRequired(true))
        .addStringOption(option => 
            option.setName('reason')
                .setDescription("The reason for the ban.")
                .setRequired(false)),
	async execute(interaction) {
        const user = interaction.options.getUser('user');
        const reason = interaction.options.getString('reason');
        if (reason) {
            await interaction.reply(`${user} has been banned.\n**Reason:** \`${reason}\``)
        } else {
            await interaction.reply(`${user} has been banned.`);
        }
	},
};