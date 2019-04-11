const Discord = require("discord.js");
const client = new Discord.Client();
 
// Set the prefix
let prefix = "!";
client.on("message", (message) => {
  // Exit and stop if the prefix is not there or if user is a bot
  if (!message.content.startsWith(prefix) || message.author.bot) return;
 
  if (message.content.startsWith(prefix + "HI")) {
    message.channel.send("HI I DARK HEXAGON!");
  } else
  if (message.content.startsWith(prefix + "introduction")) {
    message.channel.send("I AM SERVER BOT BUT THE BOT IS UNDER DEVELOPMENT!");
  }
});
 
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
