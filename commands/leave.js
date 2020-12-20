const { execute } = require("./play");

module.exports = {
    name: 'leave',
    descripton: 'stop the bot and leave the channel',
    async execute(message, args) {
        const voiceChannel = message.member.voice.channel;

        if(!voiceChannel) return message.channel.send("You need to be in a VC to stop the music!");
        await voiceChannel.leave();
        
    }
}