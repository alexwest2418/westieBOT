module.exports = {
    name: 'help',
    description: "Embeds!",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setTitle('List Of Commands')
        .setURL('https://discord.com/oauth2/authorize?client_id=787187163233386536&scope=bot&permissions=2147483647')
        .setDescription('List of commands for westieBOT')
        .setThumbnail('https://i.redd.it/lgcagpast1h11.jpg')
        .addFields(
            {name: '-test', value: 'tests if bot is working'},
            {name: '-image <query>', value: 'searches google for a random image of your choice'},
            {name: '-clear <number>', value: 'clears a set amount of messages (under 10)'},
            {name: '-felix', value: 'sends a picture of Felix'},
            {name: '-avatar <user>', value: 'Displays a users pfp, can be used on self'},

            
    
        )
        .setFooter('Message awestie#2227 for help or suggestions', 'https://www.colorcombos.com/images/colors/FFC0CB.png');

        message.channel.send(newEmbed);
    }
}