
const { MessageEmbed, MessageActionRow, MessageSelectMenu } = require('discord.js');

const selectMenu = new MessageActionRow()
    .addComponents(
        new MessageSelectMenu()
            .setCustomId('roles-menu')
            .setPlaceholder('Choisir un rΓ΄le dans la liste')
            .setMinValues(1)
            .setMaxValues(1)
            .addOptions([
                {
                    label: 'π¦',
                    description: 'Choisis gryffondor',
                    value: '1012703448145342505'
                },
                {
                    label: 'serdaigle',
                    description: 'Choisis serdaigle',
                    value: '1012703562972811384'
                },
                {
                    label: 'pouffsoufle',
                    description: 'Choisis pouffsoufle',
                    value: '1012703679956140123'
                },
                {
                    label: 'serpentard',
                    description: 'Choisis serpentard',
                    value: '1012703853730340924'
                }
            ])
         
    )

    const rolesEmbed = new MessageEmbed()
    .setTitle('οΌ’ο½ο½ο½ο½ο½ο½ο½ο½ ο½ οΌ°ο½ο½ο½ο½ο½ο½ο½!')
    .setDescription('Votre lettre en possession, il est temps de choisir votre maison\n selectionner votre maison et venez dΓ©couvrir tout ce qui si cache!!!!!')
    .setFooter({ text: 'πππππππ πΏπππΎπ, ππΎπππΈππππ πΉπ π«πππΉππΆππΉ' })

module.exports = {
    name: 'roles',
    category: 'admin',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: true,
    usage: 'roles',
    examples: ['roles'],
    description: 'roles',
    async run(client, message, args) {
        await message.channel.send({ embeds: [rolesEmbed], components: [selectMenu] })
    },
    async runInteraction(client, interaction) {
        await interaction.reply({ embeds: [rolesEmbed], components: [selectMenu] })
    },
};