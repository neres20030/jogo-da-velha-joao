const currentPlayer = document.querySelector(".currentPlayer");

let selected = []; 
let player = "x";  
let positions = [
    [1, 2, 3], 
    [4, 5, 6],
    [7, 8, 9],
    [1, 5, 9], 
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [3, 5, 7]  
];


function init() {
    selected = []; 
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
        const [a, b, c] = positions[i];
        if (
            selected[a - 1] === player &&
            selected[b - 1] === player &&
            selected[c - 1] === player
        ) {
            alert(`Jogador ${player} venceu!`);
            setTimeout(init, 1000); 
            return true;
        }
    }
    return false;
}


document.querySelectorAll(".game button").forEach(item => {
    item.addEventListener("click", () => {
        const index = item.getAttribute("data-i") - 1; 

        if (!selected[index]) { 
            selected[index] = player; 
            item.innerHTML = player; 
            item.disabled = true; 

            if (checkWinner()) return; 
            switchPlayer(); 
        }
    });
});


init();




