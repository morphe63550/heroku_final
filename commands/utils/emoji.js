module.exports = {
    name: 'emoji',
    category: 'utils',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: false,
    usage: 'emoji [question]',
    examples: ['emoji'],
    description: 'Poster vos emojis',
   
    async runInteraction(client, interaction) {
        const poll = await interaction.reply({ content: 'Emoji', fetchReply: true });
        await poll.react('🦁');
        await poll.react('🦡');
        await poll.react('🦅');
        await poll.react('🐍');
     }
    };