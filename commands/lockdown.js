const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "lockdown",
    category: "moderation",
    run: async (client, message, args) => {
        const channels = message.guild.channels.cache.filter(ch => ch.type !== 'category');
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('You can\'t use that!')
        else if (args[0] === 'on') {
            channels.forEach(channel => {
                channel.updateOverwrite(message.guild.roles.everyone, {
                    SEND_MESSAGES: false
                }).then(() => {

                })
            })
            return message.channel.send('Server is Locked! 🔒');
        } else if (args[0] === 'off') {
            channels.forEach(channel => {
                channel.updateOverwrite(message.guild.roles.everyone, {
                    SEND_MESSAGES: true
                }).then(() => {

                    }
                )
            })
            return message.channel.send('Server is Unlocked! 🔓')
        }
    }}
