module.exports = {
    name: "loa",
    desc: "Logs LOA's",
    interactionHandler: async interaction => {
        if(interaction.isCommand()) {

            const l_hr = interaction.options.getUser('hr_agent');
            const l_name = interaction.options.getString('users_name');
            const l_start = interaction.options.getString('start');
            const l_end = interaction.options.getString('end');
            const l_reason = interaction.options.getString('reason');

            await interaction.reply({ content: `__**CSHP LOA**__\nApproving HR Agent: ${l_hr}\nRequesting LOA: ${l_name}\nStart Date: ${l_start}\nEnd Date: ${l_end}\nReason: ${l_reason}` });
        }
    }
}