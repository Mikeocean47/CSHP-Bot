const { SlashCommandBuilder } = require('@discordjs/builders');
const command = require('./index.js');

let data = new SlashCommandBuilder()
.setName(command.name)
    .setDescription(command.desc)
    .addUserOption(option =>
        option.setName('hr_agent')
            .setDescription('Approving HR agent')
            .setRequired(true))
    .addStringOption(option =>
        option.setName('users_name')
            .setDescription('User requesting LOA')
            .setRequired(true))
    .addStringOption(option =>
        option.setName('start')
            .setDescription('Start date')
            .setRequired(true))
    .addStringOption(option =>
        option.setName('end')
            .setDescription('End date')
            .setRequired(true))
    .addStringOption(option => 
        option.setName('reason')
            .setDescription('Reason for LOA')
            .setRequired(true))
module.exports = { data };