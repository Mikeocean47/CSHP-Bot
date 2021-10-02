module.exports = {
    name: "promo_request",
    desc: "Logs promotion requests",
    interactionHandler: async interaction => {
        if(interaction.isCommand()) {

            const pr_n = interaction.options.getString('name');
            const pr_ra = interaction.options.getString('rank');
            const pr_rtd = interaction.options.getString('rank_they_deserve');
            const pr_r = interaction.options.getString('reason');
            const pr_pr = interaction.options.getString('person_requesting');

            await interaction.reply({ content: `__**CSHP Promotion Request**__\nName: ${pr_n}\nReason: ${pr_ra}\nRank you think you/they deserve: ${pr_rtd}\nReason: ${pr_r}\nPerson requesting promotion: ${pr_pr}` });
        }
    }
}