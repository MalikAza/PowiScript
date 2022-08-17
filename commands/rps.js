const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rps')
		.setDescription("Rock-Paper-Scissors Game "),
	async execute(interaction) {

        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('rock')
                    .setLabel('Rock')
                    .setStyle(ButtonStyle.Secondary)
                    .setEmoji('🪨'),

                new ButtonBuilder()
                    .setCustomId('paper')
                    .setLabel('Paper')
                    .setStyle(ButtonStyle.Secondary)
                    .setEmoji('📄'),

                new ButtonBuilder()
                    .setCustomId('scissors')
                    .setLabel('Scissors')
                    .setStyle(ButtonStyle.Secondary)
                    .setEmoji('✂️')
            );

        const embed = new EmbedBuilder()
            .setTitle('Rock, Paper, Scissors')
            .setDescription(`**${user.username}**'s game.`)
            .setColor(0x7289DA);

        await interaction.reply({ embeds: [embed], components: [row] });
	},
};