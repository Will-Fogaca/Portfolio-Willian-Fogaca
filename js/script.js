addEventListener("DOMContentLoaded", (event) => {
    preencherProjetos();

});

function preencherProjetos() {
    // Will -> Simulando uma requisição assincrona - futuramente posso reaproveitar para preencher com projetos reais
    setTimeout(() => {
        const projetos = [
            {
                img: "assets/img/LogoEduvale.png",
                titulo: "Sound Nave",
                descricao: "Versão adaptada do jogo Galaga para deficientes visuais, feito para Faculdade Eduvale Avaré.",
                link: "github.com/Will-Fogaca/SoundNave"
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
            },
            {
                img: "",
                titulo: "Projeto D",
                descricao: "Descrição do projeto D",
                link: "#"
            }
        ];

        const gridProjetos = document.getElementById("grid-projetos");
        gridProjetos.innerHTML = ""; 

        projetos.forEach(projeto => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
                <img src="${projeto.img}" alt="${projeto.titulo}">
                <h3>${projeto.titulo}</h3>
                <p>${projeto.descricao}</p>
                <a href="${projeto.link}" class="btn">Ver Detalhes</a>
            `;
            gridProjetos.appendChild(card);
        });
    }, 1000); 
}
