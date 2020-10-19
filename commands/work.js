const Discord = require('discord.js');
const db = require('quick.db');
const ms = require('parse-ms');

module.exports = {
    name: "work",
    description: "Work your a** off",

    async run (client, message, args) {
        let user = message.author;
        let timeout = 600000;
        let author = await db.fetch(`worked_${message.guild.id}_${user.id}`);
        let avatar = member.displayAvatarURL({size: 1024});

        if(author !== null && timeout - (Date.now() - author) > 0){
            let time = ms(timeout - (Date.now() - author));
            return message.channel.send(`You cannot work again for ${time.minutes}m and ${time.seconds}s`)
        } else {
            let amount = Math.floor(Math.random() * 80) + 1;
            db.add(`money_${message.guild.id}_${user.id}`, amount)
            db.set(`worked_${message.guild.id}_${user.id}`, Date.now())

            const workembed = new Discord.MessageEmbed()
            .setTitle('⚒️ Work! ⚒️️')
            .setColor(message.member.displayHexColor)
            .setDescription(`${user}, you worked and earned ${amount} dollars!`)
            .setThumbnail(avatar)
            .setTimestamp()

            message.channel.send(`${user}, you worked and earned ${amount} coins`)
        }
    }
}