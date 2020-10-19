const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "unban",
    catergory: "moderation",
    run: async (client, message, args) => {
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('Bruh you know damn well you can\'t use that')

        const member = args[0];

        if (!member)
     {
        const noArgs = new MessageEmbed()
        .setTitle('Incorrect Usuage')
        .setColor(0xFF0000)
        .setDescription('For a more detailed description of this command, please view my help command.')
        .setTimestamp()
        .addFields(
            { name: 'Correct Usuage', value: 'unban (member ID)', inline: true },
            { name: 'Example', value: 'unban 710577781523742720', inline: true },

            )
            if(!args[0]) return message.channel.send(noArgs);    
                   
        }

        try {
            message.guild.fetchBans().then(bans => {
                message.guild.members.unban(member)
            })
            await message.channel.send(`**${member}** is now unbanned!`)
        }   catch (e) {
            const errorembed = new Discord.MessageEmbed()
        .setTitle('❌ Unknown Error ❌ .')
        .setColor(0xFF0000)
        .setDescription('An unkown error has occured. Please rerun this command or join my Support Server.')
        .addField("Support Server Invite.", "[Invite](https://discord.gg/ayqFk9B)")
        .setTimestamp()

        

            return message.channel.send(errorembed)
        }
    }
}
