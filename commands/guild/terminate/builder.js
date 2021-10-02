const { SlashCommandBuilder } = require('@discordjs/builders');
const command = require('./index.js');

let data = new SlashCommandBuilder()
.setName(command.name)
    .setDescription(command.desc)
    .addStringOption(option => option
        .setName('name')
        .setDescription('Users name')
        .setRequired(true))
    .addStringOption(option => option
        .setName('discord_id')        
        .setDescription('Users ID')
        .setRequired(true))
    .addStringOption(option => option
        .setName('reason')
        .setDescription('Reason for termination')
        .setRequired(true))
    .addStringOption(option => option
        .setName('approved_by')
        .setDescription('Who approved the termination')
        .setRequired(true))
module.exports = { data };