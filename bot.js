const Discord = require("discord.js");
const client = new Discord.Client();
 
// Set the prefix
let prefix = "d!";
client.on("message", (message) => {
  // Exit and stop if the prefix is not there or if user is a bot
  if (d!message.content.startsWith(prefix) || message.author.bot) return;
 
  if (message.content.startsWith(prefix + "HI")) {
    message.channel.send("HI I DARK HEXAGON!");
  } else
  if (message.content.startsWith(prefix + "foo")) {
    message.channel.send("bar!");
  }
});
 
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
