const pagination = require('discord.js-pagination');
const Discord = require('discord.js');
const config = require("../config")
const prefix = config.default_prefix

module.exports = {
    name: "help",
    description: "The help command, what do you expect?",

    async run (client, message, args){

        //Sort your commands into categories, and make seperate embeds for each category

        const main  = new Discord.MessageEmbed()
        .setTitle('Vero\'s Help Page.')
        .setColor(message.member.displayHexColor)
        .setDescription('Hello! My name is Vero. My default prefix is `!`. All of my available catergories are listed below. Please scroll to view the Catergory and it\'s commands. Reminder, I am still under development! More commands will be added soon. :D')
        .addFields(
            { name: 'Moderation ⚒', value: '11 Moderation Commands.', inline: true },
            { name: 'Fun 🐸', value: '5 Fun Commands.', inline: true },
            { name: 'Utilities ⚙️', value: '5 Utility Commands.', inline: true },
        )
        .addField("Links!", "[Invite Me!](https://discord.com/oauth2/authorize?client_id=767085922356822017&scope=bot&permissions=808840318) ◦ [My Support Server!](https://discord.gg/NkaWZfU)")
        .setTimestamp()


        const moderation = new Discord.MessageEmbed()
        .setTitle('Moderation')
        .addField(prefix + 'ban', 'Ban a member via Mention.')
        .addField('**cwarns**', 'Clear a members warning count.')
        .addField('**kick**', 'Kick a member via Mention.')
        .addField('**lock**', 'Lock a channel from your server.')
        .addField('**lockdown**', 'Lockdown your server. (Warning: Channel permissions may be messed up after.)')
        .addField('**lockdown off**', 'Unlock your server!')
        .addField('**purge**', 'Delete a certain amount of message. (Max is 100 so far).')
        .addField('**unban**', 'Unban a user via User ID.')
        .addField('**unlock**', 'Unlock a channel from your server.')
        .addField('**warn**', 'Warn a member for breaking the rules!')
        .addField('**warnings**', 'Check an user\'s warning count.')
        .setColor(message.member.displayHexColor)
        .setTimestamp()

        const fun = new Discord.MessageEmbed()
        .setTitle('Fun')
        .addField('**dm**', '𝗔𝗱𝗺𝗶𝗻𝘀 𝗢𝗻𝗹𝘆! DM a member via mention or user ID.')
        .addField('`giveaway`', '𝗔𝗱𝗺𝗶𝗻𝘀 𝗢𝗻𝗹𝘆! Start a giveaway for your server!')
        .addField('`meme`', 'Get a random corny meme!')
        .addField('`reroll`', '𝗔𝗱𝗺𝗶𝗻𝘀 𝗢𝗻𝗹𝘆! Reroll your giveaway by it\'s message ID.')
        .addField('`say`', 'Make the bot say whatever you want it to say!')
        .setColor(message.member.displayHexColor)
        .setTimestamp()

        const utility = new Discord.MessageEmbed()
        .setTitle('Utlity')
        .addField('`addrole`', '𝗔𝗱𝗺𝗶𝗻𝘀 𝗢𝗻𝗹𝘆! Give a member a role via role ID.')
        .addField('`covid`', 'Get the recorded COVID cases globally or by mentioned country.')
        .addField('`ping`', 'Get the bot\'s API ping. It\'s not your ping!')
        .addField('`serverinfo`', 'Get the server\'s information! Credit to Terrible Dev for this command!')
        .addField('`setprefix`', '𝗔𝗱𝗺𝗶𝗻𝘀 𝗢𝗻𝗹𝘆! Change the bot\'s prefix in your server!')
        .setColor(message.member.displayHexColor)
        .setTimestamp()

        const pages = [
                main,
                moderation,
                utility,
                fun
                
        ]

        const emojiList = ["⏪", "⏩"];

        const timeout = '120000';

        pagination(message, pages, emojiList, timeout)
    }
}