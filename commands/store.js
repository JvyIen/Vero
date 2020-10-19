const Discord = require('discord.js');

module.exports = {
    name: "store",
    description: "View the store",

    async run (client, message, args) {

        const embed = new Discord.MessageEmbed()
        .setTitle('Store')
       .setColor(message.member.displayHexColor)
        .setDescription(`Car - 500 coins \n Watch - 250 coins`)
        .setThumbnail('https://i.imgur.com/iVDCFG3.jpg')
        .setTimestamp();
      

        message.channel.send(embed);
    }
}
