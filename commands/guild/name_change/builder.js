const { SlashCommandBuilder } = require('@discordjs/builders');
const command = require('./index.js');

let data = new SlashCommandBuilder()
.setName(command.name)
    .setDescription(command.desc)
    .addStringOption(option =>
        option.setName('date')
            .setDescription("Today's date")
            .setRequired(true))
    .addStringOption(option =>
        option.setName('previous_name')
            .setDescription('Their previous name')
            .setRequired(true))
    .addStringOption(option =>
        option.setName('new_name')
            .setDescription('Their new name')
            .setRequired(true))
    .addStringOption(option =>
        option.setName('number_of_changes_left')
            .setDescription('How many changes left')
            .setRequired(true))
module.exports = { data };