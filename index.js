const Discord = require('discord.js');
const client = new Discord.Client();
const token = ""; // Add your token here

client.on("message", (msg)=>{
    if (msg.guild){
        console.log("========================================")
        console.log(`Server: ${msg.guild.name} | Channel: ${msg.channel.name}`)
        console.log(`Message: ${msg.content}`)
        console.log(`Date & Time: ${msg.createdAt}`)
        
    }
});

client.login(token);
