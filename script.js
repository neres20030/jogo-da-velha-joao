const currentPlayer = document.querySelector(".currentPlayer");

let selected = []; 
let player = "x";  
let positions = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9], // Linhas horizontais
    [1, 4, 7], [2, 5, 8], [3, 6, 9], // Linhas verticais
    [1, 5, 9], [3, 5, 7]             // Diagonais
];

function init() {
    selected = Array(9).fill(null); // Preenche com null para evitar verificações erradas
    player = "x"; 
    currentPlayer.innerHTML = `JOGADOR DA VEZ: ${player}`;

    document.querySelectorAll(".game button").forEach(item => {
        item.innerHTML = ""; 
        item.disabled = false; 
        item.style.backgroundColor = "white"; 
    });
}

function switchPlayer() {
    player = player === "x" ? "o" : "x"; 
    currentPlayer.innerHTML = `JOGADOR DA VEZ: ${player}`;
}

function checkWinner() {
    for (let i = 0; i < positions.length; i++) {
        const [a, b, c] = positions[i].map(pos => pos - 1); // Ajusta os índices
        if (selected[a] === player && selected[b] === player && selected[c] === player) {
            setTimeout(() => {
                alert(`Jogador ${player} venceu!`);
                init();
            }, 100);
            return true;
        }
    }

    // Verifica empate
    if (!selected.includes(null)) {
        setTimeout(() => {
            alert("Empate! Não há mais movimentos disponíveis.");
            init();
        }, 100);
        return true;
    }

    return false;
}

document.querySelectorAll(".game button").forEach(item => {
    item.addEventListener("click", () => {
        const index = item.getAttribute("data-i") - 1; 

        if (selected[index] === null) { 
            selected[index] = player; 
            item.innerHTML = player; 
            item.disabled = true; 

            if (!checkWinner()) {
                switchPlayer();
            }
        }
    });
});

init();


init();




