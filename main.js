const Discord = require('discord.js');

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});

const prefix = '-';

const fs = require('fs');

const cheerio = require('cheerio');

const request = require('request');

const memberCounter = require('./counters/member-counter');

client.command = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.command.set(command.name, command);
}

client.on('ready', () => {
    console.log('westieBOT is online!');
    client.user.setActivity('-help || DM user for help', {type: 'LISTENING'}).catch(console.error);
    memberCounter(client);
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if(command === 'test'){
        client.command.get('test').execute(message, args);
    } else if(command === 'felix'){
        client.command.get('felix').execute(message, args);
    } else if(command === 'help'){
        client.command.get('help').execute(message, args, Discord);
    } else if(command === 'clear'){
        client.command.get('clear').execute(message, args, Discord);
    } else if(command === 'avatar'){
        client.command.get('avatar').execute(message, args, Discord);
    } else if(command === 'rule'){
        client.command.get('rule').execute(message, args, Discord);
    } else if (command === 'reactionrole'){
        client.command.get('reactionrole').execute(message, args);
    } else if (command === 'play'){
        client.command.get('play').execute(message, args);
    } else if (command === 'leave'){
        client.command.get('leave').execute(message, args);
    } 
    


});
    
client.on("message", (message) => {
    let args = message.content.substring(prefix.length).split(" ");
    let command = args.shift(); //separates and removes command from args

    switch (command) {
        case "image":
            image(message, args.join(" "));

            break;
    }
});

function image(message, query) {
    //'query' now represents 'args.join(" ")'

    var options = {
        url: "http://results.dogpile.com/serp?qc=images&q=" + query,
        method: "GET",
        headers: {
            Accept: "text/html",
            "User-Agent": "Chrome",
        },
    };

    request(options, function (error, response, responseBody) {
        if (error) {
            return;
        }

        $ = cheerio.load(responseBody);

        var links = $(".image a.link");

        var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));

        console.log(urls);
        if (!urls.length) {
            return;
        }

        // Send result
        message.channel.send(urls[Math.floor(Math.random() * urls.length)]);
    });
}

client.on('guildMemberAdd', guildMember => {
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Hallows');

    guildMember.roles.add(welcomeRole);
    
    guildMember.guild.channels.cache.get('789912749399998526').send(`Welcome <@${guildMember.user.id}> to the server! Make sure to read the rules and enter the chill spot!`)


});

client.on("guildMemberRemove", member => {
    const welcomeChannel = member.guild.channels.cache.find(channel => channel.name === 'doorway')
    
    guildMember.guild.channels.cache.get('789912749399998526').send(`Looks like ${member} is a little bitch... byeeeeeeeeeee`)
   
})

client.on('message', (message) =>{
    if(message.author.id === ''){
        message.delete()
        message.reply('Haha!! i deleted your message because you werent being poggers!!!')
    }
});

client.login('TOKEN')
