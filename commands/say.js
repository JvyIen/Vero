exports.run = async(client, msg, args) => {
  message.channel.send(args.join(" "), { allowedMentions: {parse: ["user"]}})
}