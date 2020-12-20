module.exports = async (client) =>{
    const guild = client.guilds.cache.get('752919106641985606');
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('787535550327423077');
        channel.setName(`Member Count: ${memberCount.toLocaleString()}`);
        console.log('Updating Member Count');
    }, 600000);
}
 
module.exports = async (client) =>{
    const guild = client.guilds.cache.get('692850234983972884');
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('789915947418517554');
        channel.setName(`Member Count: ${memberCount.toLocaleString()}`);
        console.log('Updating Member Count');
    }, 600000);
}
 