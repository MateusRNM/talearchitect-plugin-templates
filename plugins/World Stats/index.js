app.commands.register('stats:show', async () => {
    const chars = await app.data.getCharacters();
    const events = await app.data.getEvents();
    const locations = await app.data.getLocations();
    app.ui.alert(`${chars.length} Personagens, ${locations.length} Locais, ${events[events.length-1].date.year} anos de história.`, "World Stats");
}, "Mostra os stats do projeto.");