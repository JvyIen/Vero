const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "dm",
    description: "DM a user in the guild",
    category: "fun",
    run: async (bot, message, args) => {
      if (!message.member.permissions.has("MANAGE_MESSAGES"))
        return message.channel.send("You don\'t have the correct permissions for this command.");
      let user =
        message.mentions.members.first() ||
        message.guild.members.cache.get(args[0]);

        const noArgs = new MessageEmbed()
        .setTitle('Incorrect Usuage')
        .setColor(0xFF0000)
        .setDescription('For a more detailed description of this command, please view my help command.')
        .setTimestamp()
        .addFields(
            { name: 'Correct Usuage', value: 'dm (user mention)', inline: true },
            { name: 'Example', value: 'dm @AstroJay your bot sucks', inline: true },

            )
            if(!args[0]) return message.channel.send(noArgs);
      if (!user)
        return message.channel.send(noArgs);
      if (!args.slice(1).join(" "))
        return message.channel.send("You did not specify your message");
      user.user
        .send(args.slice(1).join(" "))
        .catch(() => message.channel.send("You can\'t DM this user."))
        .then(() => message.channel.send(`Sent a message to ${user.user.tag}`));
    },
  };
  
