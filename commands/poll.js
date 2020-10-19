const {MessageEmbed} = require('discord.js')

module.exports={
    name: 'poll',
    description: 'Create a simple poll',
    category: 'fun',
    run: async(bot,message,args)=>{
        if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send('You Do Not Have Permission!')
        //!poll <channel mention> question
        const channel = message.mentions.channels.first() || message.guid.channels.cache.get(args[0])
        if(!channel){
            return message.channel.send('You did not mention / give the id of the channel you wanted to create the poll in!')
        }
        let question = message.content.split(`${bot.prefix}poll ${channel} `).join("").slice(27);
        if(!question){
            return message.channel.send('You did not specify a question for your poll')
        }
        const Embed = new MessageEmbed()
            .setTitle('New Poll!')
            .setColor('RANDOM')
            .setDescription(question)
            .setFooter(`${message.author.username} created this poll.`)
           let msg = await bot.channels.cache.get(channel.id).send(Embed)
            await msg.react('763487320606638101')
            await msg.react('765068337410736138')
            

    
    }
}