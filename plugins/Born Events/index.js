function init(app) {
    app.events.on('character:added', async (character) => {
        const actualDate = await app.data.getCurrentDate();
        app.factory.createEvent(`Nascimento de ${character.name}`, actualDate, `Neste dia, o mundo conheceu ${character.name}.`);
        app.ui.toast("Evento de nascimento registrado!", "info", 4000);
    });
}