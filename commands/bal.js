const db = require('quick.db');
const Discord = require('discord.js');

module.exports = {
    name: "bal",
    description: "bleh",

    async run (client, message, args) {

        let user = message.mentions.users.first() || message.author;

        let bal = await db.fetch(`money_${message.guild.id}_${user.id}`);
        if(bal === null) bal = 0;

        const embed = new Discord.MessageEmbed()
        .setTitle('💰 Balance! 💰')
        .setColor(message.member.displayHexColor)
        .setDescription(`${user} currently has ${bal} coins`)
        .setTimestamp()
        message.channel.send({embed});


    }
}
