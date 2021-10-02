const { SlashCommandBuilder } = require('@discordjs/builders');
const command = require('./index.js');

let data = new SlashCommandBuilder()
.setName(command.name)
    .setDescription(command.desc)
    .addStringOption(option =>
        option.setName('users_name')
            .setDescription('Users name')
            .setRequired(true))
    .addStringOption(option =>
        option.setName('users_rank')
            .setDescription('Users rank')
            .setRequired(true))
    .addStringOption(option => 
        option.setName('reason')
            .setDescription('Reason for coming off reserves')
            .setRequired(true))
    .addStringOption(option => 
        option.setName('date')
            .setDescription('Date off reserves')
            .setRequired(true))
    .addStringOption(option => 
        option.setName('have_they_started_duties')
            .setDescription('Has this person started his duties before the deadline')
            .setRequired(true))
module.exports = { data };