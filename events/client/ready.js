const Logger = require('../../utils/Logger');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "ready",
    once: true,
    async execute(client) {
        const REDEM = new MessageEmbed ()
        .setDescription('\:thumbsup_tone1: Redémarrage effectué avec succès')
           .setAuthor({ name: `${client.user.username}`, iconURL: client.user.displayAvatarURL(),})
           .setColor('#0000ff')
           .setTimestamp()
        let guildsCount = await client.guilds.fetch();
        let userCount = client.guilds.cache.reduce((a, g) => a + g.memberCount, 0);

        Logger.client(`- Le Bot est OP par ${userCount} utilisateur sur ${guildsCount.size} serveur !!!!!`)

        client.user.setPresence({ activities: [{ name: 'Bot officiel du server Poudlard2032', type: 'WATCHING' }], status: 'online' });

       // const devGuild = await client.guilds.cache.get('935664937076920341');
       // devGuild.commands.set(client.commands.map(cmd => cmd));
        client.application.commands.set(client.commands.map(cmd => cmd))
        client.channels.cache.get(`1018567050878263316`).send({embeds:[REDEM],})

    },
};