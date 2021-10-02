module.exports = {
    name: "reserves_request",
    desc: "Logs reserves request",
    interactionHandler: async interaction => {
        if(interaction.isCommand()) {

            const rr_aa = interaction.options.getString('hr_agent');
            const rr_n = interaction.options.getString('users_name');
            const rr_jd = interaction.options.getString('join_date');
            const rr_d = interaction.options.getString('date');
            const rr_r = interaction.options.getString('reason');
            const rr_et = interaction.options.getString('estimated_time');

            await interaction.reply({ content: `__**CSHP Reserves Request**__\nApproving HR Agent: ${rr_aa}\nRequesting Reserves: ${rr_n}\nJoin Date: ${rr_jd}\nDate of Reserves: ${rr_d}\nReason: ${rr_r}\nEstimated Time on Reserves: ${rr_et}` });
        }
    }
}