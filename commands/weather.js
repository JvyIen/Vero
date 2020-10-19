const weather = require('weather-js');

const Discord = require('discord.js');

module.exports = {
    name: "weather",
    description: "Checks a weather forecast",

    async run (client, message, args){

    weather.find({search: args.join(" "), degreeType: 'F'}, function (error, result){
        
        if(error) return message.channel.send(error);

        const noArgs = new Discord.MessageEmbed()
        .setTitle('Incorrect Usuage')
        .setColor(0xFF0000)
        .setDescription('For a more detailed description of this command, please view my help command.')
        .setTimestamp()
        .addFields(
            { name: 'Correct Usuage', value: 'weather (desired location)', inline: true },
            { name: 'Example', value: 'weather Baltimore', inline: true },

        )


        if(!args[0]) return message.channel.send(noArgs)

        const invalidembed = new Discord.MessageEmbed()
        .setTitle('Invalid Arguement')
        .setColor(0xFF0000)
        .setDescription('Invalid location provided. Please provid a location that exists.')
        .setTimestamp()

        if(result === undefined || result.length === 0) return message.channel.send(invalidembed);

        var current = result[0].current;
        var location = result[0].location;

        const weatherinfo = new Discord.MessageEmbed()
        .setDescription(`**${current.skytext}**`)
        .setAuthor(`Weather forecast for ${current.observationpoint}`)
        .setThumbnail(current.imageUrl)
        .setColor(0x111111)
        .addField('Timezone', `UTC${location.timezone}`, true)
        .addField('Degree Type', 'Celsius', true)
        .addField('Temperature', `${current.temperature}°`, true)
        .addField('Wind', current.winddisplay, true)
        .addField('Feels like', `${current.feelslike}°`, true)
        .addField('Humidity', `${current.humidity}%`, true)


        message.channel.send(weatherinfo)
        })        
    }
}
