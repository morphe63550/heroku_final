module.exports = {
    name: "threadCreate",
    once: false,
    async execute(client, thread) {   
        if (thread.isText()) thread.join();  
        const logChannel = client.channels.cache.get('1018567050878263316');
        logChannel.send(`Nom du thread: ${thread.name}!`);
    }
};