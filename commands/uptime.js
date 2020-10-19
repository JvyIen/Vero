const Discord = require('discord.js')
const ms = require('ms');

module.exports = {
    name: "uptime",
    description: "test command",

 	async run(message) {



    message.channel.send(`My uptime is \`${ms(this.client.uptime, { long: true })}\``);
    }
}