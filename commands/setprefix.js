const db = require('quick.db');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "setprefix",
    description: "Set a server's prefix",

    async run (client, message, args) {
        if(!message.member.hasPermission("MANAGE_SERVER")) return message.channel.send('You don\'t have permission to use that.');

        const noArgs = new MessageEmbed()
        .setTitle('Incorrect Usuage')
        .setColor(0xFF0000)
        .setDescription('For a more detailed description of this command, please view my help command.')
        .setTimestamp()
        .addFields(
            { name: 'Correct Usuage', value: 'setprefix (desired prefix)', inline: true },
            { name: 'Example', value: 'setprefix !', inline: true },

            )
            if(!args[0]) return message.channel.send(noArgs);
        

        if(args[1]) return message.channel.send('The prefix can\'t have two spaces');

        db.set(`prefix_${message.guild.id}`, args[0])


        const embed = new MessageEmbed()
        .setTitle(`New Prefix!`)
        .setColor('GREEN')
        .setDescription(`Succesfully set new prefix to **${args[0]}**`)
        .setTimestamp()
        message.channel.send(embed)

} 
}
