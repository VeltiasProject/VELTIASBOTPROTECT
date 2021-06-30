
const discord = require('discord.js');
 const bot = new discord.Client();
  const client = new discord.Client();
   const AntiSpam = require('discord-anti-spam');
    const antiSpam = new AntiSpam({ 
        warnThreshold: 3,
         muteThreshold: 4, 
         kickThreshold: 7, 
         banThreshold: 7,  
         maxInterval: 2000, 
          warnMessage: '{@user}, merci de ne pas spam !', 
          kickMessage: '**{user_tag}** à été kick pour spam !', 
          muteMessage: '**{user_tag}** à été mute pour spam !',
          banMessage: '**{user_tag}** à été ban pour spam !',
          maxDuplicatesWarning: 6,
          maxDuplicatesKick: 10,  
          maxDuplicatesBan: 12,
          maxDuplicatesMute: 8,
          ignoredPermissions: ['ADMINISTRATOR'],  
          ignoreBots: true, 
          ignoredMembers: ["853273152464486450"],  
          muteRoleName: "Muted", 
          removeMessages: true  
        }); 
          
         client.on('message', msg => { if(msg.content.includes('discord.gg/') || msg.content.includes('https://discord.gg/')) return msg.delete() });
        
         {setInterval(() => client.user.setPresence({ activity: { name: 'discord.gg/evening | Protect 1 guilds !', type: 'PLAYING'}, status: 'dnd' }),    3000);
}

           client.on('ready', () => console.log(`Connecté à ${client.user.tag}.`)); 

           client.on('message', (message) => antiSpam.message(message)); 
           
           
           client.login(process.env.TOKEN);
















