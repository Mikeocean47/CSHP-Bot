const { SlashCommandBuilder } = require('@discordjs/builders');
const command = require('./index.js');

let data = new SlashCommandBuilder()
.setName(command.name)
    .setDescription(command.desc)
    .addStringOption(option =>
        option.setName('name')
            .setDescription('Users_name')
            .setRequired(true))
    .addStringOption(option =>
        option.setName('rank')
            .setDescription('Users Rank')
            .setRequired(true))
    .addStringOption(option =>
        option.setName('rank_they_deserve')
            .setDescription('Rank you think you/they deserve')
            .setRequired(true))
    .addStringOption(option =>
        option.setName('reason')
            .setDescription('Reason you/they should be promoted')
            .setRequired(true))
    .addStringOption(option => 
        option.setName('person_requesting')
            .setDescription('Person Requesting Promotion')
            .setRequired(true))
module.exports = { data };