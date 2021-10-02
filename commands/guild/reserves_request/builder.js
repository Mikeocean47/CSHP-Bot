const { SlashCommandBuilder } = require('@discordjs/builders');
const command = require('./index.js');

let data = new SlashCommandBuilder()
.setName(command.name)
    .setDescription(command.desc)
    .addStringOption(option =>
        option.setName('hr_agent')
            .setDescription('Approving HR agent')
            .setRequired(true))
    .addStringOption(option =>
        option.setName('users_name')
            .setDescription('User requesting reserves')
            .setRequired(true))
    .addStringOption(option =>
        option.setName('join_date')
            .setDescription("The user's join date")
            .setRequired(true))
    .addStringOption(option =>
        option.setName('date')
            .setDescription('"Todays date"')
            .setRequired(true))
    .addStringOption(option => 
        option.setName('reason')
            .setDescription('Reason for reserves')
            .setRequired(true))
    .addStringOption(option => 
        option.setName('estimated_time')
            .setDescription('Estimated time on reserves')
            .setRequired(true))
module.exports = { data };