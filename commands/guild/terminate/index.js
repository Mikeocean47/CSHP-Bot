module.exports = {
    name: "terminate",
    desc: "Logs terminations",
    interactionHandler: async interaction => {
        if(interaction.isCommand()) {

            const t_name = interaction.options.getString('name');
            const t_user = interaction.options.getString('discord_id');
            const t_reason = interaction.options.getString('reason');
            const t_approved = interaction.options.getString('approved_by');

            await interaction.reply({ content: `__**CSHP Termination**__\nName: ${t_name}\nDiscord: ${t_user}\nReason: ${t_reason}\nApproved by: ${t_approved}` });
        }
    }
}