const db = require('quick.db');
const Discord = require('discord.js');

module.exports = {
    name: "buy",
    description: "Buy an item from the store",

    async run (client, message, args) {
        let purchase = args.join(" ");

        const noArgs = new Discord.MessageEmbed()
        .setTitle('Incorrect Usuage')
        .setColor(0xFF0000)
        .setDescription('For a more detailed description of this command, please view my help command.')
        .setTimestamp()
        .addFields(
            { name: 'Correct Usuage', value: 'buy (desired item)', inline: true },
            { name: 'Example', value: 'buy Car', inline: true },

            )
            if(!purchase) return message.channel.send(noArgs)


        let items = await db.fetch(message.author.id, { items: [] });
        let amount = await db.fetch(`money_${message.guild.id}_${message.author.id}`)

        if(purchase === 'car' || 'Car'){
            if(amount < 500) return message.channel.send('You do not have enough money to buy this item. Please try another one');
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 500);
            db.push(message.author.id, "Car");

            const embed = new Discord.MessageEmbed()
            .setTitle('Purchase!')
            .setColor("GREEN")
            .setDescription('Successfully bought one car')
            .setTimestamp()
            message.channel.send({embed});
            message.channel.send('Successfully bought one car!')
        }
        if(purchase === 'watch' || 'Watch'){
            if(amount < 250) return message.channel.send('You do not have enough money to buy this item. Please try another one');
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 250);
            db.push(message.author.id, "Watch");

            const embed = new Discord.MessageEmbed()
            .setTitle('Purchase!')
            .setColor("GREEN")
            .setDescription('Successfully bought one watch!')
            .setTimestamp()
            message.channel.send({embed});
    
        }
    }
}
