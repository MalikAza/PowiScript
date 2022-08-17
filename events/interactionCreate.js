const chalk = require("chalk");

module.exports =  {
    name: 'interactionCreate',
    async execute(interaction, client) {
        if (interaction.isCommand()) { // /cmd
            const command = client.commands.get(interaction.commandName);
            
            if (!command) return;

            try {
                await command.execute(interaction, client);
            } catch (error) {
                console.error(chalk.redBright('Error:'), error);
                await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
            }
        } else if (interaction.isButton()) { // Buttons
            const button = client.buttons.get(interaction.customID);
            if (!button) return await interaction.reply({ content: `There was no button code found for this button.`, ephemeral: true });

            try {
                await button.execute(interaction, client);
            } catch (error) {
                console.error(chalk.redBright('Error:'), error);
                await interaction.reply({ content: 'There was an arror while executing this button!', ephemeral: true });
            }
        }
    }
};