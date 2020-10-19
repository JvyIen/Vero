const db = require('quick.db');
const Discord = require('discord.js');

module.exports = {
    name: "inventory",
    description: "View your inventory",


    async run (client, message, args) {
        let items = await db.fetch(message.author.id);
        if(items === null) items = "Nothing"

        const Embed = new Discord.MessageEmbed()
        .addField('Inventory', items)
        .setColor(message.member.displayHexColor)

        message.channel.send(Embed);
    }
}
