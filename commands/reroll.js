const ms = require('ms');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "reroll",
    description: "Rerolls giveaway",

    async run (client, message, args){

        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('You do not have permission to reroll giveaways');

        const noArgs = new MessageEmbed()
        .setTitle('Incorrect Usuage')
        .setColor(0xFF0000)
        .setDescription('For a more detailed description of this command, please view my help command.')
        .setTimestamp()
        .addFields(
            { name: 'Correct Usuage', value: 'reroll (messageID)', inline: true },
            { name: 'Example', value: 'reroll 123456789', inline: true },

            )
            if(!args[0]) return message.channel.send(noArgs);

        
        let giveaway = client.giveawaysManager.giveaways.find((g) => g.prize === args.join(" ")) || client.giveawaysManager.giveaways.find((g) => g.messageID === args[0]);

        if(!giveaway) return message.channel.send('Couldn\'t find a giveaway with that ID/name');

        client.giveawaysManager.reroll(giveaway.messageID)
        .then(() => {
            message.channel.send('Giveaway rerolled')
        })
        .catch((e) => {
            if(e.startsWith(`Giveaway with ID ${giveaway.messageID} is not ended`)){
                message.channel.send('This giveaway hasn\'t ended yet')
            } else {
                console.error(e);
                const errorembed = new Discord.MessageEmbed()
                    .setTitle('❌ Unknown Error ❌ .')
                    .setColor(0xFF0000)
                    .setDescription('An unkown error has occured. Please rerun this command or join my Support Server.')
                    .addField("Support Server Invite.", "[Invite](https://discord.gg/ayqFk9B)")
                .setTimestamp()

        
                message.channel.send(errorembed)
            }
        })
    }
}