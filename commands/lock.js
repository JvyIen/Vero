module.exports = {
    name: "lock",
    category: "moderation",
    aliases: ["lock"],
    usage: "a!lock",
    run: (client, message, args) => {
    if (!client.lockit) client.lockit = [];
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply('Bro you not have permission')

    message.channel.createOverwrite(message.guild.id, {
      SEND_MESSAGES: false 
    })
    message.channel.send('Locked! 🔒')
  }}