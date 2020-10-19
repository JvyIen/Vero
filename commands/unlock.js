module.exports = {
    name: "unlock",
    category: "moderation",
    aliases: ["unlock"],
    usage: "-unlock",
    run: (client, message, args) => {
    if (!client.lockit) client.lockit = [];
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply('Bro you not have permission')

    message.channel.createOverwrite(message.guild.id, {
      SEND_MESSAGES: true 
    })
    message.channel.send('Unlocked! 🔓')
  }}
