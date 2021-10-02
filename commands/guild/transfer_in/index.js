module.exports = {
    name: "transfer_in",
    desc: "Logs transfer in",
    interactionHandler: async interaction => {
        if(interaction.isCommand()) {

            const ti_cf = interaction.options.getString('department_coming_from');
            const ti_n = interaction.options.getString('users_name');
            const ti_d = interaction.options.getString('discord_id');
            const ti_rr = interaction.options.getString('receiving_rank');
            const ti_r = interaction.options.getString('reason');
            const ti_gta = interaction.options.getString('going_to_approval');
            const ti_cfa = interaction.options.getString('coming_from_approval');
            const ti_tt = interaction.options.getString('transfer_time');

            await interaction.reply({ content: `[${ti_cf} - CSHP]\nName: ${ti_n}\nDiscord: ${ti_d}\nReceiving Rank: ${ti_rr}\nReason: ${ti_r}\nGoing To Approval: ${ti_gta}\nComing From Approval: ${ti_cfa}\nTransfer Time: ${ti_tt}` });
        }
    }
}