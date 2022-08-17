# PowiScript
## Deploy Commands
`node deploy-commands.js`
## Run the bot
`node index.js`

### Buttons
- Faire un sous dossier des buttons de chaque cmd
- Chaque button son `.js`
- Dans le `.js` :
    ```js
    module.exports = {
        data: {
            name: '<filename / customID>'
        },
        async execute (interaction, client) {
            await interaction.reply({ content: '' })
        }
    }
    ```