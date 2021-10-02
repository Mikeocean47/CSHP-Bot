const { SlashCommandBuilder } = require('@discordjs/builders');
const command = require('./index.js');

let data = new SlashCommandBuilder()
.setName(command.name)
    .setDescription(command.desc)
    .addStringOption(option =>
        option.setName('department_going_to')
            .setDescription("Department they're going to")
            .setRequired(true))
    .addStringOption(option =>
        option.setName('users_name')
            .setDescription('Users Name')
            .setRequired(true))
    .addStringOption(option =>
        option.setName('discord_id')
            .setDescription('Their discord id')
            .setRequired(true))
    .addStringOption(option =>
        option.setName('receiving_rank')
            .setDescription('Rank their going to receive')
            .setRequired(true))
    .addStringOption(option =>
        option.setName('reason')
            .setDescription('Reason For transfer')
            .setRequired(true))
    .addStringOption(option =>
        option.setName('going_to_approval')
            .setDescription("Department they're going to approving leadership")
            .setRequired(true))
    .addStringOption(option =>
        option.setName('coming_from_approval')
            .setDescription("Department they're coming from approving leadership")
            .setRequired(true))
    .addStringOption(option =>
        option.setName('transfer_time')
            .setDescription('Transfer Time')
            .setRequired(true))
module.exports = { data };