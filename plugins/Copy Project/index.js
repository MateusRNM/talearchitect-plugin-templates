app.commands.register('export:clipboard', async () => {
    const characters = await app.data.getCharacters();
    const events = await app.data.getEvents();
    let string = '# Resumo do projeto\n\n## Personagens';
    for(const char of characters) {
        string += `\n- **${char.name}**: ${char.description}`;
    }
    string += '\n\n## Linha do tempo';
    for(const event of events) {
        string += `\n- [Ano ${event.date.year}] ${event.name}`;
    }
    navigator.clipboard.writeText(string);
    app.ui.toast('Copiado para a área de transferência!', 'success', 5000);
}, 'Copiar Resumo do Projeto');