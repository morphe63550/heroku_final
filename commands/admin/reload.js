
module.exports = {
    name: 'reload',
    category: 'admin',
    permissions: ['ADMINISTRATOR'],
    ownerOnly: true,
    usage: 'reload',
    examples: ['reload'],
    description: 'Relancer le bot',
   
    async runInteraction(client, interaction) {
        //const devGuild = await client.guilds.cache.get('935664937076920341');
        //devGuild.commands.set([]);
        await interaction.reply('Bot relancé avec succès');
        return process.exit()
    },
};