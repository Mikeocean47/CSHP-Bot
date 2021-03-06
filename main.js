let fs = require('fs');
let Discord = require('discord.js');
let Intents = Discord.Intents;
ODg0NTE0MDkzMzI5OTUyODY4.YTZl8Q.dGVTMGvqN8ZmIWFCoYeAKvTrXZw

let config = require('./config.json');
let utilsReg = require('./util/registerCommands.js');

const clientIntents = new Intents().add(
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES
);

let client = new Discord.Client({intents: clientIntents});

// Read and store commands in client.commands
client.commands = new Discord.Collection();
fs.readdirSync('./commands').forEach(category => {
    fs.readdirSync(`./commands/${category}`).forEach(c => {
        let command = require(`./commands/${category}/${c}/index.js`);
        client.commands.set(command.name, {interactionHandler: command.interactionHandler, buttonHandler: command.buttonHandler});
        console.log(`Loaded ${command.name}`);
    })
})

// Helper stuff attached to client
client.registerGuildCommands = utilsReg.registerGuildCommands;

// Event listeners
client.on('ready', c => {
    console.log(`\nLogged in as ${client.user.tag}!\n`);
    client.user.setActivity('Over The Troopers Of The Carolina State Highway Patrol', {type: "WATCHING"})
})

client.on('error', console.error);

client.on('interactionCreate', interaction => {
    if(interaction.isCommand()) {
        if(client.commands.has(interaction.commandName)) {
            client.commands.get(interaction.commandName).interactionHandler(interaction);
        }
    } else if(interaction.isButton()) {
        let customId = interaction.customId;
        let [commandName, t, x, y, ...btnData] = customId.split('-');
        if(client.commands.has(commandName)) {
            client.commands.get(commandName).buttonHandler(interaction, t, x, y, btnData);
        }
    }
})

client.on('guildCreate', guild => {
    console.log(`New guild\nName: ${guild.name}\nId: ${guild.id}`);
    utilsReg.registerGuildCommands(client.user.id, guild.id)
    .then(() => {})
    .catch(() => {});
})

client.login(config.token);
