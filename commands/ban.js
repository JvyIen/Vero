const Discord = require('discord.js');


module.exports = {
    name: "ban",
    description: "Ban somebody lol",

    async run (client, message, args) {

        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('You do not have the correct permissions for this command.')
        if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send('I do not have the correct permissions to execute this command.')

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        const noArgs = new Discord.MessageEmbed()
        .setTitle('Incorrect Usuage')
        .setColor(0xFF0000)
        .setDescription('For a more detailed description of this command, please view my help command.')
        .setTimestamp()
        .addFields(
            { name: 'Correct Usuage', value: '!ban (user mention) (reason)', inline: true },
            { name: 'Example', value:'!ban @jaylen lolzers', inline: true },

            )
            if(!args[0]) return message.channel.send(noArgs);


        if(!member) return message.channel.send('I can\'t seem to find this user.');
        if(!member.bannable) return message.channel.send('This user can\'t be banned. They are either a mod/admin, or this guild\'s highest role is higher than mine.');

        if(member.id === message.author.id) return message.channel.send('You can\'t ban yourself.');

        let reason = args.slice(1).join(" ");

        if(reason === undefined) reason = 'Unspecified';

        member.ban(reason)
        .catch(err => {
            const errorembed = new Discord.MessageEmbed()
        .setTitle('❌ Unknown Error ❌ .')
        .setColor(0xFF0000)
        .setDescription('An unkown error has occured. Please rerun this command or join my Support Server [here](https://discord.gg/NkaWZfU).')

        .setTimestamp()

                
            if(err) return message.channel.send(errorembed)
        })

        const banembed = new Discord.MessageEmbed()
        .setTitle('Member Banned')
        .setColor('RED')
        .setThumbnail(member.user.displayAvatarURL())
        .addField('User Banned', member)
        .addField('Kicked by', message.author)
        .addField('Reason', reason)
        .setFooter('Time Banned', client.user.displayAvatarURL())
        .setTimestamp()

        message.channel.send(banembed);


    }
}
