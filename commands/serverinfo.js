const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "serverinfo",
    category: "extra",
    run: async (client, message, args) => {
        let region;
        switch (message.guild.region) {
            case "europe":
                region = '🇪🇺 Europe';
                break;
            case "us-east":
                region = '🇺🇸 US-East'
                break;
            case "us-west":
                region = '🇺🇸 US-West';
                break;
            case "us-south":
                region = '🇺🇸 US-South'
                break;
            case "us-central":
                region = '🇺🇸 US-Central'
                break;
        }
        const members = message.guild.members.cache;
        const channels = message.guild.channels.cache;
        
        const embed = new MessageEmbed()
            .setThumbnail(message.guild.iconURL({dynamic : true}))
             .setColor(message.member.displayHexColor)
            .setTitle(`${message.guild.name}\'s Server Stats`)
            .addFields(
                {
                    name: "Server Name: ",
                    value: `${message.guild.name}`,
                    inline: true
                },
                {
                    name: "ID: ",
                    value: `${message.guild.id}`,
                    inline: true
                },
                {
                    name: "Owner: ",
                    value: `${message.guild.owner.user.tag}`,
                    inline: true
                },
                {
                    name: "Members: ",
                    value: `There are ${message.guild.memberCount} users!`,
                    inline: true
                },
                {
                    name: "Human Members: ",
                    value: `${members.filter(member => !member.user.bot).size}`,
                    inline: true
                },
                {
                    name: "Members Online: ",
                    value: `There are ${message.guild.members.cache.filter(m => m.user.presence.status == "online").size} users online!`,
                    inline: true
                },
                {
                    name: "Total Bots: ",
                    value: `There are ${message.guild.members.cache.filter(m => m.user.bot).size} bots!`,
                    inline: true
                },
                {
                    name: "Text Channels: ",
                    value: `${channels.filter(channel => channel.type === 'text').size}`,
                    inline: true
                },
                {
                    name: "Voice Channels: ",
                    value: `${channels.filter(channel => channel.type === 'voice').size}`,
                    inline: true
                },
                {
                    name: "Creation Date: ",
                    value: message.guild.createdAt.toLocaleDateString("en-us"),
                    inline: true
                },
                {
                    name: "Roles Count: ",
                    value: `There are ${message.guild.roles.cache.size} roles in this server.`,
                    inline: true,
                },
                {
                    name: `🗺 Region: `,
                    value: region,
                    inline: true
                },
                {
                    name: `Verified: `,
                    value: message.guild.verified ? 'Server is verified' : `Server isn't verified`,
                    inline: true
                },
                {
                    name: "Emojis: ",
                    value: message.guild.emojis.cache.size >= 1 ? `There are ${message.guild.emojis.cache.size} emojis!` : 'There are no emojis' ,
                    inline: true
                }
            )
        await message.channel.send(embed)
    }
}
