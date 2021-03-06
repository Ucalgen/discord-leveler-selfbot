const Discord = require("discord.js");
const config = require('./config.json');
const beep = require('beepbeep');
const fs = require('fs');
const Enmap = require('enmap');
const colors = require('colors');



const client = new Discord.Client();
console.log("┌────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐".yellow);
console.log("│ ".yellow+"██████╗ ██╗███████╗ ██████╗ ██████╗ ██████╗ ██████╗    ██╗     ███████╗██╗   ██╗███████╗██╗     ███████╗██████╗ ".brightWhite+"   │".yellow);
console.log("│ ".yellow+"██╔══██╗██║██╔════╝██╔════╝██╔═══██╗██╔══██╗██╔══██╗   ██║     ██╔════╝██║   ██║██╔════╝██║     ██╔════╝██╔══██╗".brightWhite+"   │".yellow);
console.log("│ ".yellow+"██║  ██║██║███████╗██║     ██║   ██║██████╔╝██║  ██║   ██║     █████╗  ██║   ██║█████╗  ██║     █████╗  ██████╔╝".brightWhite+"   |".yellow);
console.log("| ".yellow+"██║  ██║██║╚════██║██║     ██║   ██║██╔══██╗██║  ██║   ██║     ██╔══╝  ╚██╗ ██╔╝██╔══╝  ██║     ██╔══╝  ██╔══██╗".brightWhite+"   │".yellow);
console.log("| ".yellow+"██████╔╝██║███████║╚██████╗╚██████╔╝██║  ██║██████╔╝   ███████╗███████╗ ╚████╔╝ ███████╗███████╗███████╗██║  ██║".brightWhite+"   │".yellow);
console.log("| ".yellow+"╚═════╝ ╚═╝╚══════╝ ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚═════╝    ╚══════╝╚══════╝  ╚═══╝  ╚══════╝╚══════╝╚══════╝╚═╝  ╚═╝".brightWhite+"   │".yellow);
console.log("└────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘".yellow);
console.log("Ready to level up!".brightYellow);
console.log("Contact".brightYellow+" Madison#0069".brightCyan + " on discord for support".brightYellow)
console.log("                                                                    ");
console.log("Command Loader:".yellow);

let timeToWait = 1000; 
let maxMessages = 5000;
let minTime = 1000;
let maxTime = 10000;
let wordsList = ["xp","exp","collecting levels","experience"];
let addedword = "";
let channel_id = 'use /settings channel to set this id before starting the script';

client.commands = new Enmap();
client.config = config;
client.timeToWait = timeToWait;

client.maxMessages = maxMessages;
client.timeToWait = timeToWait;
client.minTime = minTime;
client.maxTime = maxTime;
client.wordsList = wordsList;
client.channel_id = channel_id;
client.addedword = addedword;





//Discord Handlers
fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      const event = require(`./events/${file}`);
      let eventName = file.split(".")[0];
      client.on(eventName, event.bind(null, client));
    });
});

fs.readdir("./commands/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      if (!file.endsWith(".js")) return;
      let props = require(`./commands/${file}`);
      let commandName = file.split(".")[0];
      console.log(`Loaded the ${commandName} command!`);
      client.commands.set(commandName, props);
    });
});


/*{
    "botToken": "mfa.4cIFqclHHe1x8vVqPsQQP3ItKilblWcXh-JlCAmAW38MZMa9GOOKm-k8vxkZ4rP2cnyfuV9HS-0pbbY-6bUd",
    "prune": "false",
    "prefix": "/",
    "maxMessages":5000,  
    "minTime": 180000,  
    "maxTime": 360000,  
    "wordsList":["xp","exp","collecting levels","experience"],  
    "channel_id": "755556202699685958" 
  }*/



//console.log(client.config.botToken);

client.login(config.botToken);