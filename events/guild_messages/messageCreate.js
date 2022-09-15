const ownerId = '742321508717690911';

module.exports = {
    name: "messageCreate",
    once: false,
    async execute(client, message) {
        let guildSettings = await client.getGuild(message.guild);

        if (!guildSettings) {
            await client.createGuild(message.guild);
            guildSettings = await client.getGuild(message.guild);
            return message.reply('le bot a mis à jour la base de données pour votre serveur, retapez la commande!');
        }

        let prefix = await client.db.has(`${message.author.id}-webhook-prefix`) ? await client.db.get(`${message.author.id}-webhook-prefix`) : "\",\""
        if (message.content.startsWith(prefix)) {
            let msg = message.content.replace(prefix, "")
            if (!await client.db.has(`${message.author.id}-webhook-name`))
                return message.channel.send({ content: "Merci de définir un nom (/setname) et un avatar (/setavatar) a votre webhook !" }).then((msg) => {
                    setTimeout(() => {
                        msg.delete()
                    }, 10000)
                })
            let name = await client.db.get(`${message.author.id}-webhook-name`)
            let avatar = await client.db.get(`${message.author.id}-webhook-avatar`) ? await client.db.get(`${message.author.id}-webhook-avatar`) : message.author.avatarURL()
            try {
                message.channel.createWebhook(`${name}`, {
                    avatar: `${avatar}`
                }).then(async (w) => {
                    await message.delete()
                    await w.send(msg)
                    await w.delete()
                })
            } catch (e) {
                message.reply({ content: "Une erreur est survenu !" })
            }
        }
    },


};
