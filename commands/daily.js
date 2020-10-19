const Discord = require('discord.js')
const db = require('quick.db');
const ms = require('parse-ms');

module.exports = {
    name: "daily",
    description: "Receive a daily award of money",

    async run (client, message, args) {
        let user = message.author;
        let timeout = 86400000;
        let amount = 500;

        let avatar = member.displayAvatarURL({size: 1024})

        let daily = await db.fetch(`daily_${message.guild.id}_${user.id}`);

        if(daily !== null && timeout - (Date.now() - daily) > 0){
            let time = ms(timeout - (Date.now() - daily));

            return message.channel.send(`You've already collected your daily award. Come back in ${time.days}d, ${time.hours}h, ${time.minutes}m, and ${time.seconds}s`)
        } else {
            db.add(`money_${message.guild.id}_${user.id}`, amount);
            db.set(`daily_${message.guild.id}_${user.id}`, Date.now());

            const embed = new Discord.MessageEmbed()
            .setTitle('Daily!')
            .setColor(message.member.displayHexColor)
            .setDescription(`Successfully added ${amount} coins to your account`)
            .setThumbnail(avatar)
            .setTimestamp()
            message.channel.send({embed});
    
        }
    }
}

