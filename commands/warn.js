const Discord = require('discord.js');

const db = require('quick.db');

module.exports = {
    name: "warn",
    description: "Warn a member",

    async run (client, message, args) {
        if(!message.member.hasPermission("MANAGE_SERVER")) return message.channel.send('You know damn well you can\'t use that');

        const user = message.mentions.users.first() || message.guild.members.cache.get(args[0]);

        const noArgs = new Discord.MessageEmbed()
        .setTitle('Incorrect Usuage')
        .setColor(0xFF0000)
        .setDescription('For a more detailed description of this command, please view my help command.')
        .setTimestamp()
        .addFields(
            { name: 'Correct Usuage', value: 'warn (user mention) (reason)', inline: true },
            { name: 'Example', value: 'warn @AstroJay bot trash', inline: true },
        )

            if(!user) return message.channel.send(noArgs);


            const botembed = new Discord.MessageEmbed()
            .setTitle('Invalid Arguement')
            .setColor(0xFF0000)
            .setDescription('Bots can\'t be warned.')
            .setTimestamp()

            if(user.bot) return message.channel.send(botembed);

            const userembed = new Discord.MessageEmbed()
            .setTitle('Invalid Arguement')
            .setColor(0xFF0000)
            .setDescription('User who deployed this command can not warn theirself.')
            .setTimestamp()
            
            if(message.author.id === user.id) return message.channel.send(userembed);


            const serverembed = new Discord.MessageEmbed()
            .setTitle('Invalid Arguement')
            .setColor(0xFF0000)
            .setDescription('Target user can\'t be warned.')
            .setTimestamp()
        
            if(message.guild.owner.id === user.id) return message.channel.send(serverembed);


        let reason = args.slice(1).join(" ");

        if(!reason) reason = 'Unspecified';

        let warnings = db.get(`warnings_${message.guild.id}_${user.id}`);

        if(warnings === null) {
            db.set(`warnings_${message.guild.id}_${user.id}`, 1);
            user.send(`You were warned in ${message.guild.name} for the following reason: \`${reason}\``)
            await message.channel.send(`**${user.username}** has been warned`)
        }

        if(warnings !== null){
            db.add(`warnings_${message.guild.id}_${user.id}`, 1)
            user.send(`You were warned in ${message.guild.name} for the following reason: \`${reason}\``)
            await message.channel.send(`**${user.username}** has been warned`)
        }
    }
}
