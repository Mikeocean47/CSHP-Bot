module.exports = {
    name: "ban",
    desc: "Bans a specific user from the guild",
    interactionHandler: async interaction => {
        if(interaction.isCommand()) {
            await interaction.deferReply();

            let memberToKick = interaction.options.getMember('user');
            let reason = interaction.options.getString('reason') || 'Reason not specified';

            memberToKick.ban({ reason: reason })
            .then(() => {
                interaction.editReply({ content: `__**Banned**__\nName: ${memberToKick.displayName}\nID: ${memberToKick.id}\nReason: ${reason}` });
            })
            .catch(err => {
                interaction.editReply({ content: `Failed to ban user due to an error. Error:\n${err}` });
            })
        }
    }
}