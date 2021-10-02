module.exports = {
    name: "name_change",
    desc: "Logs name change's",
    interactionHandler: async interaction => {
        if(interaction.isCommand()) {

            const n_d = interaction.options.getString('date');
            const n_pn = interaction.options.getString('previous_name');
            const n_nn = interaction.options.getString('new_name');
            const n_nc = interaction.options.getString('number_of_changes_left');

            await interaction.reply({ content: `__**CSHP Name Change**__\nDate of Name change: ${n_d}\nPrevious Name: ${n_pn}\nNew Name: ${n_nn}\nNumber of Name Changes: ${n_nc}` });
        }
    }
}