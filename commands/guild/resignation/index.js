module.exports = {
    name: "resignation",
    desc: "Logs resignations",
    interactionHandler: async interaction => {
        if(interaction.isCommand()) {

            const r_n = interaction.options.getString('name')
            const r_d = interaction.options.getString('date')
            const r_r = interaction.options.getString('reason')
            const r_e = interaction.options.getString('email')

            await interaction.reply({ content: `__**CSHP Resignation**__\nName: ${r_n}\nDate: ${r_d}\nReason: ${r_r}\nClockify Email: ${r_e}` });
        }
    }
}