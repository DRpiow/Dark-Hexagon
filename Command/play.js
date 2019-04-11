   // first, we need to check if the auther is connected to a voice channel
  if (!message.member.voiceChannel) return message.channel.send('Please connect to a voice channel.');
  // if not, return & send a message to chat
  
  // Check if bot is already connected to a voice channel
  if (message.guild.me.voiceChannel) return message.channel.send('sorry, the bot is already connected to the guild.');
  
  // Check if auther input a url
  if (!args[0]) return message.channel.send('Sorry, please input a url following the command.');
  
  // Validate Info
  let validate = await ytdl.validateURL(args[0]);
  
  // Check validation 
  if (!validate) return message.channel.send('Sorry, Please input a **valid** url following the command.');
  // validate will contain a boolean if the url is valid or not
  
  // Fetch video info
  let info = await ytdl.getInfo(args[0]);
  
  // Store authors guild channel
  let connect = await message.member.voiceChannel.join();
  
  // Play song
  let dispatcher = await connection.play(ytdl(args[0], {filter: 'audioonly' }));
  // The dispatcher variable will be used in a later episode
  
  // Output now playing
  message.channel.send('Now playing: ${info.title}');
  
} // Now, we can test it!
