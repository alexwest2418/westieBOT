module.exports = {
    name: 'rule',
    description: "rules!",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setTitle('Server Rules')
        .setURL('https://discord.com/oauth2/authorize?client_id=787187163233386536&scope=bot&permissions=2147483647')
        .setDescription('Rules for Third Cascade')
        .setThumbnail('https://cdn.discordapp.com/attachments/789909646294515722/789948723579977738/asdasdasd.jpg')
        .addFields(
            {name: 'Rule 1', value: 'No Spam, NSFW, or links without contex in chat'},
            {name: 'Rule 2', value: 'Keep bot commands in its respective channel'},
            {name: 'Rule 3', value: 'Do not ping @everyone for no reason'},
            {name: 'Rule 4', value: 'NO JFK Jokes whatsoever'},
            {name: 'Rule 5', value: 'do not beg for a certain role/name, asking once is enough'},
            {name: 'Rule 6', value: 'being obscenely toxic will result in an immediate kick without warning'},
            {name: 'Rule 7', value: 'When voting, only react with the "yes" or "no" emoji and vote seriously'},
            {name: 'Rule 8', value: 'Breaking a rule or excessive spam may result in a text chat mute via westieBOT'},
            {name: 'Rule 9', value: 'Please use the channels for their specified purposes; for example, do not use the homework channel for porn.'},
            {name: 'Rule 10', value: 'No monkey noises, gay pics/gifs, or use of the phrase "k."'},
            {name: 'Rule 11', value: 'make fun of british people'}
            
    
        )
        .setFooter('Notify TTC PsiN#8903 if a rule has been broken', 'https://www.colorcombos.com/images/colors/FFC0CB.png');

        message.channel.send(newEmbed);
    }
}