
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

const buttons = new MessageActionRow()
    .addComponents(
        new MessageButton()
            .setCustomId('gryffondor-button')
            .setLabel('π¦ Gryffondor π¦')
            .setStyle('PRIMARY'),           
        new MessageButton()
            .setCustomId('pouffsoufle-button')
            .setLabel('Pouffsoufle')
            .setStyle('PRIMARY')
            .setEmoji('π¦‘'),
        new MessageButton()
            .setCustomId('serdaigle-button')
            .setLabel('Serdaigle')
            .setStyle('PRIMARY')
            .setEmoji('π¦'),
        new MessageButton()
            .setCustomId('serpentard-button')
            .setLabel('Serpentard')
            .setStyle('PRIMARY')
            .setEmoji('π')
    )

const maisonEmbed = new MessageEmbed()
    .setTitle('οΌ’ο½ο½ο½ο½ο½ο½ο½ο½ ο½ οΌ°ο½ο½ο½ο½ο½ο½ο½!')
    .setDescription('Votre lettre en possession, il est temps de choisir votre maison\n selectionner votre maison et venez dΓ©couvrir tout ce qui si cache!!!!!')
    .setFooter({ text: 'πππππππ πΏπππΎπ, ππΎπππΈππππ πΉπ π«πππΉππΆππΉ' })
    


module.exports = {
    name: 'maison',
    category: 'admin',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: true,
    usage: 'maison',
    examples: ['Actionner le bouton de votre maison'],
    description: 'Choississez votre maison',
    async run(client, message, args) {
        await message.channel.send({ embeds: [maisonEmbed], components: [buttons] })
    },
    async runInteraction(client, interaction) {
        await interaction.reply({ embeds: [maisonEmbed], components: [buttons] })
    },
};