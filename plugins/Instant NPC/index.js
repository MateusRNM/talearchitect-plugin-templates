const nomes = ["Aldo", "Beto", "Carla", "Mateus", "Siclano", "Beltrano"];
const profissoes = ["Ferreiro", "Guarda", "Padeiro", "Pedreiro"];

function init(app) {
    app.commands.register("npc:generate", async () => {
        const nome = nomes[Math.floor(Math.random() * nomes.length)];
        const sobrenome = nomes[Math.floor(Math.random() * nomes.length)];
        const profissao = profissoes[Math.floor(Math.random() * profissoes.length)];
        const idDoNPC = await app.factory.createCharacter(`${profissao} ${nome} ${sobrenome}`, "NPC gerado pelo plugin Instant NPC.");
        app.ui.toast("NPC gerado com sucesso!", "success", 3000); // toast dura 3 segundos
        app.ui.toast(`ID do novo personagem: ${idDoNPC}`, "info", 5000); // toast dura 5 segundos
    }, "Gerar NPC aleatório");
}