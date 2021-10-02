module.exports = {
    name: "kick",
    desc: "Kicks a specific user from the guild",
    interactionHandler: async interaction => {
        if(interaction.isCommand()) {
            await interaction.deferReply();

            let memberToKick = interaction.options.getMember('user');
            let reason = interaction.options.getString('reason') || 'Reason not specified';

            memberToKick.kick(reason)
            .then(() => {
                interaction.editReply({ content: `__**Kicked**__\nName: ${memberToKick.displayName}\nID: ${memberToKick.id}\nReason: ${reason}` });
            })
            .catch(err => {
                interaction.editReply({ content: `Failed to kick user due to an error. Error:\n${err}` });
            })
        }
    }
}