const Discord = require('discord.js');

module.exports = {
    name: "kick",
    description: "Kicks a member from the server",

    async run (client, message, args) {

        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send('You don\'t have the correct permissions for this command..')
        if(!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send('I need the correct permissions to execute this command.')

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        const noArgs = new Discord.MessageEmbed()
        .setTitle('Incorrect Usuage')
        .setColor(0xFF0000)
        .setDescription('For a more detailed description of this command, please view my help command.')
        .setTimestamp()
        .addFields(
            { name: 'Correct Usuage', value: 'kick (user mention)', inline: true },
            { name: 'Example', value: 'kick @AstroJay', inline: true },

        )
        if(!args[0]) return message.channel.send(noArgs);

        if(!member) return message.channel.send('I can\'t seem to find this user.');
        if(!member.kickable) return message.channel.send('This user can\'t be kicked. It is either because they are a mod/admin, or their highest role is higher than mine');

        if(member.id === message.author.id) return message.channel.send('Bruh, you can\'t kick yourself!');

        let reason = args.slice(1).join(" ");

        if(reason === undefined) reason = 'Unspecified';

        member.kick(reason)
        .catch(err => {
             const errorembed = new Discord.MessageEmbed()
        .setTitle('❌ Unknown Error ❌ .')
        .setColor(0xFF0000)
        .setDescription('An unkown error has occured. Please rerun this command or join my Support Server [here](https://discord.gg/NkaWZfU).')
        .setTimestamp()

            if(err) return message.channel.send(errorembed)
        })

        const kickembed = new Discord.MessageEmbed()
        .setTitle('Member Kicked')
        .setColor('RED')
        .setThumbnail(member.user.displayAvatarURL())
        .addField('User Kicked', member)
        .addField('Kicked by', message.author)
        .addField('Reason', reason)
        .setFooter('Time kicked', client.user.displayAvatarURL())
        .setTimestamp()

        message.channel.send(kickembed);


    }
}
