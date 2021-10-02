const { SlashCommandBuilder } = require('@discordjs/builders');
const command = require('./index.js');

let data = new SlashCommandBuilder()
.setName(command.name)
    .setDescription(command.desc)
    .addStringOption(option =>
		    option.setName('name')
			    .setDescription('Users name')
			    .setRequired(true))
        .addStringOption(option =>
            option.setName('date')
                .setDescription('Todays date')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('reason')
                .setDescription('Reason for resignation')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('email')
                .setDescription('Clockify email')
                .setRequired(true))
module.exports = { data };