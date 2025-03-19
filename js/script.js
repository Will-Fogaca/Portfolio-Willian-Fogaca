// 🔹 JSON Global contendo os projetos
let projetosGlobais = [
    {
        img: "assets/img/LogoEduvale.png",
        titulo: "Sound Nave",
        descricao: "Versão adaptada do jogo Galaga para deficientes visuais, feito para Faculdade Eduvale Avaré.",
        link: "https://github.com/Will-Fogaca/SoundNave"
    },
    {
        img: "",
        titulo: "Projeto B",
        descricao: "Descrição do projeto B",
        link: "#"
    },
    {
        img: "",
        titulo: "Projeto C",
        descricao: "Descrição do projeto C",
        link: "#"
    }
];


// 🔹 Evento para preencher os projetos quando a página carregar
document.addEventListener("DOMContentLoaded", () => {
    preencherProjetos();
});


// 🔹 Função para preencher os projetos na tela
function preencherProjetos() {
    const gridProjetos = document.getElementById("grid-projetos");
    gridProjetos.innerHTML = ""; // 🔹 Limpa os projetos antes de renderizar novamente

    projetosGlobais.forEach((projeto, index) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img src="${projeto.img || 'assets/img/default.png'}" alt="${projeto.titulo}" style="max-width: 100px;">
            <h3>${projeto.titulo}</h3>
            <p>${projeto.descricao}</p>
            <a href="${projeto.link}" class="btn" target="_blank">Ver Detalhes</a>
        `;
        gridProjetos.appendChild(card);
    });
}

// 🔹 Função para adicionar um novo projeto ao JSON Global
function botaoAdicionar() {
	
	const desc = document.getElementById("nomeProjeto").value;
	const imagem = "assets/img/" + document.getElementById("imagem").value;
	
    const novoProjeto = {
        img: imagem,
        titulo: `Novo Projeto ${projetosGlobais.length + 1}`,
        descricao: desc,
        link: "#"
    };

    projetosGlobais.push(novoProjeto); // 🔹 Adiciona o novo projeto ao JSON global
    preencherProjetos(); // 🔹 Atualiza a interface
}

