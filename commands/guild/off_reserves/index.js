module.exports = {
    name: "off_reserves",
    desc: "Logs off reserves",
    interactionHandler: async interaction => {
        if(interaction.isCommand()) {

            const or_um = interaction.options.getString('users_name');
            const or_ur = interaction.options.getString('users_rank');
            const or_r = interaction.options.getString('reason');
            const or_d = interaction.options.getString('date');
            const or_sd = interaction.options.getString('have_they_started_duties');

            await interaction.reply({ content: `__**CSHP Off Reserves**__\nName: ${or_um}\nRank: ${or_ur}\nReason: ${or_r}\nDate coming off: ${or_d}\nHas this person started his duties before the deadline: ${or_sd}` });
        }
    }
}