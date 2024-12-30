const currentPlayer = document.querySelector(".currentPlayer");

let selected = []; // Para armazenar as posições já selecionadas
let player = "x";  // Jogador inicial
let positions = [
    [1, 2, 3], // Linhas
    [4, 5, 6],
    [7, 8, 9],
    [1, 5, 9], // Colunas
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [3, 5, 7]  // Diagonais
];

// Função para inicializar o jogo
function init() {
    selected = []; // Limpa as posições selecionadas
    player = "x"; // Reinicia o jogador para "x"
    currentPlayer.innerHTML = `JOGADOR DA VEZ: ${player}`; // Exibe o jogador da vez

    // Limpa os botões
    document.querySelectorAll(".game button").forEach(item => {
        item.innerHTML = ""; // Remove qualquer conteúdo dos botões
        item.disabled = false; // Habilita os botões novamente
        item.style.backgroundColor = "white"; // Resetando a cor de fundo
    });
}

// Função para alternar entre os jogadores
function switchPlayer() {
    player = player === "x" ? "o" : "x"; // Alterna entre "x" e "o"
    currentPlayer.innerHTML = `JOGADOR DA VEZ: ${player}`;
}

// Função para verificar se há vencedor
function checkWinner() {
    for (let i = 0; i < positions.length; i++) {
        const [a, b, c] = positions[i];
        if (
            selected[a - 1] === player &&
            selected[b - 1] === player &&
            selected[c - 1] === player
        ) {
            alert(`Jogador ${player} venceu!`);
            setTimeout(init, 1000); // Reinicia o jogo após 1 segundo
            return true;
        }
    }
    return false;
}

// Função para o clique nos botões
document.querySelectorAll(".game button").forEach(item => {
    item.addEventListener("click", () => {
        const index = item.getAttribute("data-i") - 1; // Pega a posição do botão

        if (!selected[index]) { // Verifica se o botão já foi clicado
            selected[index] = player; // Marca a posição do jogador
            item.innerHTML = player; // Exibe "x" ou "o" no botão
            item.disabled = true; // Desabilita o botão após o clique

            if (checkWinner()) return; // Verifica se houve vitória
            switchPlayer(); // Troca para o próximo jogador
        }
    });
});

// Inicia o jogo
init();




