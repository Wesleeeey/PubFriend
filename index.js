const Discord = require('discord.js');
const client = new Discord.Client();
const { token, msg } = require('./config.json');

client.on('ready', () => {
    let count = 1;
    client.user.friends.forEach(member => {
        member.send(msg).catch(console.error).then(() => {
            count++
            console.log(`[${count}] Message envoyé à ${member.tag}`)
        });
    })
})

client.login(token)