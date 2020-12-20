module.exports = {
    name: 'clear',
    description: "Clear messages!",
    async execute(message, args){
        if(!args[0]) return message.reply("Please enter the amount of messages you want to clear!");
        if(isNaN(args[0])) return message.reply("please type a real number!");

        if(args[0] > 10) return message.reply("You cannot delete more than 10 messages!");
        if(args[0] < 1) return message.reply("you must delete at least one message!");

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        });

    }
}