const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    data: {
        name: 'rock'
    },
    async execute (interaction, client) {
        const emojis = ['🪨', '📄', '✂️'];
        const choice = emojis[Math.floor(Math.random()*emojis.length)];

        if (choice === '🪨') {
            var embedColor = 0x99AAB5;
            var winner = 'Tie! No one win.'
            var buttonsStyle = [ButtonStyle.Secondary, ButtonStyle.Secondary, ButtonStyle.Secondary]
        } else if (choice === '📄') {
            var embedColor = 0x2ECC70;
            var winner = interaction.user.tag
            var buttonsStyle = [ButtonStyle.Danger, ButtonStyle.Primary, ButtonStyle.Secondary]
        } else if (choice === '✂️') {
            var embedColor = 0x2ECC70;
            var winner = '<@992766090197336065>'
            var buttonsStyle = [ButtonStyle.Success, ButtonStyle.Secondary, ButtonStyle.Primary]
        }

        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('rock')
                    .setLabel('Rock')
                    .setStyle(buttonsStyle[0])
                    .setEmoji('🪨'),

                new ButtonBuilder()
                    .setCustomId('paper')
                    .setLabel('Paper')
                    .setStyle(buttonsStyle[1])
                    .setEmoji('📄'),

                new ButtonBuilder()
                    .setCustomId('scissors')
                    .setLabel('Scissors')
                    .setStyle(buttonsStyle[2])
                    .setEmoji('✂️')
            );

        const embed = new EmbedBuilder()
                .setTitle('Rock, Paper, Scissors')
                .setDescription(`**${interaction.user.username}**'s game.`)
                .setColor(embedColor)
                .addFields({ name:'Winner', value:winner, inline:false })

        await interaction.editReply({ embeds: [embed], components: [row] });
    }
}