const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "purge",
    description: "purges messages",

    async run (client, message, args) {

        const amount = args.join(" ");

        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('Bruh you know damn well you can\'t use that')

        const noArgs = new MessageEmbed()
        .setTitle('Incorrect Usuage')
        .setColor(0xFF0000)
        .setDescription('For a more detailed description of this command, please view my help command.')
        .setTimestamp()
        .addFields(
            { name: 'Correct Usuage', value: 'purge (message amount)', inline: true },
            { name: 'Example', value: 'purge 69', inline: true },
        )
        if(!args[0]) return message.channel.send(noArgs);
 
        if(amount > 100) return message.reply(`You can\'t clear more than 100 messages at once`)

        if(amount < 1) return message.reply(`You need to delete at least one message. Lolzers`)

        await message.channel.messages.fetch({limit: amount}).then(messages => {
            message.channel.bulkDelete(messages
    )});


    message.channel.send('Purge complete.').then(m => m.delete({ timeout: 5000 }))


  }
}