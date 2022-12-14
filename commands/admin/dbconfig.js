module.exports = {
    name: 'dbconfig',
    category: 'admin',
    permissions: ['ADMINISTRATOR'],
    ownerOnly: true,
    usage: 'dbconfig [key] <value>',
    examples: ['dbconfig', 'dbconfig prefix ?', 'dbconfig prefix'],
    description: 'Configurer les données de la base de données',
    options: [
        {
            name: 'key',
            description: 'Choisir une clé a modifier ou afficher',
            type: 'STRING',
            required: true,
            choices: [
                {
                    name: 'prefix',
                    value: 'prefix'
                },
                {
                    name: 'logChannel',
                    value: 'logChannel'
                },
                {
                    name: 'testChannel',
                    value: 'testChannel'
                },
                {
                    name:'ticketChannel',
                    value:'ticketChannel'
                },
                {
                    name:'ticketCategory',
                    value:'ticketCategory'
                }
            ]
        },
        {
            name: 'value',
            description: 'Choisir la nouvelle valeur pour votre clé',
            type: 'STRING'
        }
    ],
    async runInteraction(client, interaction, guildSettings) {
        const key = interaction.options.getString('key');
        const value = interaction.options.getString('value');

        if (key == 'prefix') {
            if (value) {
                await client.updateGuild(interaction.guild, { prefix: value });
                return interaction.reply({ content: `Nouvelle valeur de préfix: ${value}` });
            }
                      
            interaction.reply({ content: `valeur de préfix: ${guildSettings.prefix}` });
        } else if (key == 'logChannel') {
            if (value) {
                await client.updateGuild(interaction.guild, { logChannel: value });
                return interaction.reply({ content: `Nouvelle valeur de logChannel: ${value}` });
            }
                      
            interaction.reply({ content: `valeur de logChannel: ${guildSettings.logChannel}` });
        } else if (key == 'testChannel') {
            if (value) {
                await client.updateGuild(interaction.guild, { testChannel: value });
                return interaction.reply({ content: `Nouvelle valeur de testChannel: ${value}` });
            }
                      
            interaction.reply({ content: `valeur de testChannel: ${guildSettings.testChannel}` });
        } else if (key == 'ticketCategory') {
            if (value) {
                await client.updateGuild(interaction.guild, { ticketCategory: value });
                return interaction.reply({ content: `Nouvelle valeur de ticketCategory: ${value}` });
            }
                      
            interaction.reply({ content: `valeur de ticketCategory: ${guildSettings.ticketCategory}` });
        }else if (key == 'ticketChannel') {
            if (value) {
                await client.updateGuild(interaction.guild, { ticketChannel: value });
                return interaction.reply({ content: `Nouvelle valeur de ticketChannel: ${value}` });
            }
                      
            interaction.reply({ content: `valeur de ticketChannel: ${guildSettings.ticketChannel}` });
        }
    }
};