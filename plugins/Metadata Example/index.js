async function init(app) {
    const id = await app.factory.createCharacter("Teste");
    await app.metadata.set(id, {
        data: "data"
    });
    const retrievedData = await app.metadata.get(id);
    app.ui.toast(`Metadado recuperado: ${retrievedData.data}`, "info", 5000);
}