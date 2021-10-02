module.exports = {
    name: "blacklist",
    desc: "Logs blacklists",
    interactionHandler: async interaction => {
        if(interaction.isCommand()) {

            const b_name = interaction.options.getString('name');
            const b_user = interaction.options.getString('discord_id');
            const b_reason = interaction.options.getString('reason');
            const b_approved = interaction.options.getString('approved_by');

            await interaction.reply({ content: `__**CSHP Termination & Blacklist**__\nName: ${b_name}\nDiscord: ${b_user}\nReason: ${b_reason}\nApproved by: ${b_approved}` });
        }
    }
}