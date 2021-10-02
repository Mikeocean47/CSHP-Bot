module.exports = {
    name: "transfer_out",
    desc: "Logs transfer out",
    interactionHandler: async interaction => {
        if(interaction.isCommand()) {

            const to_cf = interaction.options.getString('department_going_to');
            const to_n = interaction.options.getString('users_name');
            const to_d = interaction.options.getString('discord_id');
            const to_rr = interaction.options.getString('receiving_rank');
            const to_r = interaction.options.getString('reason');
            const to_gta = interaction.options.getString('going_to_approval');
            const to_cfa = interaction.options.getString('coming_from_approval');
            const to_tt = interaction.options.getString('transfer_time');

            await interaction.reply({ content: `[CSHP - ${to_cf}]\nName: ${to_n}\nDiscord: ${to_d}\nReceiving Rank: ${to_rr}\nReason: ${to_r}\nGoing To Approval: ${to_gta}\nComing From Approval: ${to_cfa}\nTransfer Time: ${to_tt}` });
        }
    }
}