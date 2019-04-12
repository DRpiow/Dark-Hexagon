  const commando = require('discord.js-commando');
const YTDL = require('ytdl-core');

function Play(connection, message)
{
    var server = servers[message.guild.id];
    server.dipatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));
    server.queue.shift();
    server.dipatcher.on("end", function(){
        if(server.queue[0])
        {
            Play(connection,message);
        }
        else
        {
            connection.disconect();
        }
    });            

}

class JoinChannelCommand extends commando.Command
{
    constructor(client)  
    {
        super(client,{
            name: 'join',
            group: 'music',
            memberName: 'join',
            description: 'Joins the voice channel of the commander
        });
    }

    async run(message, args)
    {
        if(message.member.voiceChannel)
        {
            if(!message.guild.voiceConnection)
            {
                if(!server[message.guild.id])
                {
                    server[message.guild.id] = {queue: []}
                }
                message.member.voiceChannel.join()
                    .then(connection =>{
                        var server = server[message.guild.id];
                        message.replay("Successfully Joined!");
                        server.queue.push(args);
                        Play(connection, message);
                    })       
            }
        }
        else
        {
            message.replay("You must be in a voice channel to summon me!");
        }
    }
}

module.exports = JoinChannelCommand;
