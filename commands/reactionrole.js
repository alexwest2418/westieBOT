module.exports = {
    name: 'reactionrole',
    description: "sets up a reaction role message!",
    async execute(message, args, Discord, client) {
        const channel = '789920301336756255';
        const partyGamesRole = message.guild.roles.cache.find(role => role.name === "Party Games");
        const thirdCascadeRole = message.guild.roles.cache.find(role => role.name === "Third Cascade");

        const partyGamesEmoji = '🏓';
        const thirdCascadeEmoji = '3️⃣';

        let embed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setTitle('Assign yourself a role!')
        .setDescription('Choosing an emoji will give you the specified role!\n\n'
            + `${partyGamesEmoji} for Party Games\n`
            + `${thirdCascadeEmoji} for Third Cascade`);

    let messageEmbed = await message.channel.send(embed);
    messageEmbed.react(partyGamesEmoji);
    messageEmbed.react(thirdCascadeEmoji);
        
        
    client.on('messageReactionAdd', async (reaction, user) => {
        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch();
        if (user.bot) return;
        if (!reaction.message.guild) return;
        
        if (reaction.message.channel.id == 789920301336756255) {
            if (reaction.emoji.name === partyGamesEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(partyGamesRole);
            }
            if (reaction.emoji.name === thirdCascadeEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(thirdCascadeRole);
            }
        } else {
            return;
        }
    });

    client.on('messageReactionRemove', async (reaction, user) => {

        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch();
        if (user.bot) return;
        if (!reaction.message.guild) return;


        if (reaction.message.channel.id == 789920301336756255) {
            if (reaction.emoji.name === partyGamesEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(partyGamesRole);
            }
            if (reaction.emoji.name === thirdCascadeEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(thirdCascadeRole);
            }
        } else {
            return;
        }
    });
}

}   
        
    
