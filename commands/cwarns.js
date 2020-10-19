const db = require('quick.db');
const warnings = require('./warnings');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "cwarns",
    description: "Delete a member's warns",


    async run (client, message, args){
        if(!message.member.hasPermission("MANAGE_SERVER")) return message.channel.send('You don\'t have the correct permissions for this command.');

        const user = message.mentions.users.first() || message.guild.members.cache.get(args[0]);

        const noArgs = new MessageEmbed()
        .setTitle('Incorrect Usuage')
        .setColor(0xFF0000)
        .setDescription('For a more detailed description of this command, please view my help command.')
        .setTimestamp()
        .addFields(
            { name: 'Correct Usuage', value: 'cwarns (user mention)', inline: true },
            { name: 'Example', value: 'cwarns @AstroJay', inline: true },

        )


        if(!user) return message.channel.send(noArgs);

        if(user.bot) return message.channel.send('You can\'t warn bots!');

        if(user.id === message.author.id) return message.channel.send('You can\'t clear your own warnings');

        if(warnings === null) return message.channel.send(`**${user.username} has no warnings**.`);


        db.delete(`warnings_${message.guild.id}_${user.id}`);

        message.channel.send('Warnings cleared.')
    }
}
