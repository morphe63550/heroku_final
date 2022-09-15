const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "guildMemberAdd",
    once: false,
    async execute(client, member) {
      const fetchGuild = await client.getGuild(member.guild);
       
        const embed = new MessageEmbed()        
        .setAuthor({
            name: `${member.user.tag} (${member.id})`,
            iconURL: member.user.displayAvatarURL(),
          })
          .setColor("#21ff81")
          .setThumbnail('https://cdn.discordapp.com/attachments/993152858738401321/1015679095780163625/poudlard-ecole-de-sorcellerie-poudlard.gif')
          .setDescription(`± Nom d'utilisateur: ${member}
          ± Créé le: <t:${parseInt(
              member.user.createdTimestamp / 1000
            )}:f> (<t:${parseInt(member.user.createdTimestamp / 1000)}:R>)
          ± Rejoint le: <t:${parseInt(member.joinedTimestamp / 1000)}:f> (<t:${parseInt(member.joinedTimestamp / 1000)}:R>)
          `)
          .setTimestamp()
          .setFooter({ text: "L'utilisateur a rejoint!" });

        const logChannel = client.channels.cache.get(fetchGuild.logChannel);
        //logChannel -> Channel (textchannel)
        logChannel.send({ embeds: [embed] });
    }
};