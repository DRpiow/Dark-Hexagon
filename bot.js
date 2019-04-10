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
  if (message.content.startsWith(prefix + "foo")) {
    message.channel.send("bar!");
  }
});
 
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

const embed = new Discord.RichEmbed()
  .setTitle("THIS IS TESTING NEW SERVER BOT")
  .setAuthor("=Zero=", "https://i.imgur.com/lm8s41J.png")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x00AE86)
  .setDescription("TEST NO.1")
  .setFooter("TEST NO.1", "http://i.imgur.com/w1vhFSR.png")
  .setImage("http://i.imgur.com/yVpymuV.png")
  .setThumbnail("http://i.imgur.com/p2qNFag.png")
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
  .addField("TEST NO.2",
    "TEST NO.2")
  /*
   * Inline fields may not display as inline if the thumbnail and/or image is too big.
   */
  .addField("TEST NO.3", "THIS IS BOT TEST", true)
  /*
   * Blank field, useful to create some space.
   */
  .addBlankField(true)
  .addField("TEST NO.4", "TEST!!", true);
 
  message.channel.send({embed});
