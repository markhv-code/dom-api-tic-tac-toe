window.addEventListener("DOMContentLoaded", event => {
let gameRunning = true
const playerClick = () => {
    let count = 0;
    const allSquares = document.querySelectorAll(".square")
    allSquares.forEach(element =>{
        element.addEventListener("click", event =>{
            if (element.id === "x-Owns" || element.id === "o-Owns" || gameRunning === false){
                return
            }else {
                const currentSquare = event.target;
                if (count % 2 === 0){
                    const imgX = document.createElement('img')
                    const xPlayerSrc = "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg"
                    imgX.setAttribute('src', xPlayerSrc)
                    imgX.setAttribute('alt', "Player X's x")
                    currentSquare.appendChild(imgX)
                    currentSquare.setAttribute('id', "x-Owns")
                    count++;
                } else{
                    const imgO = document.createElement('img')
                    const oPlayerSrc = "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg"
                    imgO.setAttribute('src', oPlayerSrc)
                    imgO.setAttribute('alt', "Player O's o")
                    currentSquare.appendChild(imgO);
                    currentSquare.setAttribute('id', "o-Owns")
                    count++;
                }
            }
        })
    })
}
const winConditions = () => {
    const squares = document.querySelectorAll(".square")
    const topRow = document.querySelectorAll(".row-1")
    const midRow = document.querySelectorAll(".row-2")
    const botRow = document.querySelectorAll(".row-3")
    const leftCol = document.querySelectorAll(".col-1")
    const midCol = document.querySelectorAll(".col-2")
    const rightCol = document.querySelectorAll(".col-3")
    const header = document.getElementById('game-status')
    for (let i = 0; i < topRow.length; i++){
        if (topRow[0].id === "x-Owns" && topRow[1].id === "x-Owns" && topRow[2].id === "x-Owns"){
            header.innerText = "X WINS"
            gameRunning = false
        }
    }
    for (let i = 0; i < topRow.length; i++){
        if (topRow[0].id === "o-Owns" && topRow[1].id === "o-Owns" && topRow[2].id === "o-Owns"){
            header.innerText = "O WINS"
            gameRunning = false
    }
}
    for (let i = 0; i < midRow.length; i++){
        if (midRow[0].id === "x-Owns" && midRow[1].id === "x-Owns" && midRow[2].id === "x-Owns"){
            header.innerText = "X WINS"
            gameRunning = false
        }
    }
    for (let i = 0; i < midRow.length; i++){
        if (midRow[0].id === "o-Owns" && midRow[1].id === "o-Owns" && midRow[2].id === "o-Owns"){
            header.innerText = "O WINS"
            gameRunning = false
    }
    }
    for (let i = 0; i < botRow.length; i++){
        if (botRow[0].id === "x-Owns" && botRow[1].id === "x-Owns" && botRow[2].id === "x-Owns"){
            header.innerText = "X WINS"
            gameRunning = false
        }
    }
    for (let i = 0; i < botRow.length; i++){
        if (botRow[0].id === "o-Owns" && botRow[1].id === "o-Owns" && botRow[2].id === "o-Owns"){
            header.innerText = "O WINS"
            gameRunning = false
    }
    }
    for (let i = 0; i < leftCol.length; i++){
        if (leftCol[0].id === "x-Owns" && leftCol[1].id === "x-Owns" && leftCol[2].id === "x-Owns"){
            header.innerText = "X WINS"
            gameRunning = false
        }
    }
    for (let i = 0; i < leftCol.length; i++){
        if (leftCol[0].id === "o-Owns" && leftCol[1].id === "o-Owns" && leftCol[2].id === "o-Owns"){
            header.innerText = "O WINS"
            gameRunning = false
    }
    }
    for (let i = 0; i < midCol.length; i++){
        if (midCol[0].id === "x-Owns" && midCol[1].id === "x-Owns" && midCol[2].id === "x-Owns"){
            header.innerText = "X WINS"
            gameRunning = false
        }
    }
    for (let i = 0; i < midCol.length; i++){
        if (midCol[0].id === "o-Owns" && midCol[1].id === "o-Owns" && midCol[2].id === "o-Owns"){
            header.innerText = "O WINS"
            gameRunning = false
    }
    }
    for (let i = 0; i < rightCol.length; i++){
        if (rightCol[0].id === "x-Owns" && rightCol[1].id === "x-Owns" && rightCol[2].id === "x-Owns"){
            header.innerText = "X WINS"
            gameRunning = false
        }
    }
    for (let i = 0; i < rightCol.length; i++){
        if (rightCol[0].id === "o-Owns" && rightCol[1].id === "o-Owns" && rightCol[2].id === "o-Owns"){
            header.innerText = "O WINS"
            gameRunning = false
    }
    }
    if(topRow[0].id === 'x-Owns' && midRow[1].id === 'x-Owns' && botRow[2].id === 'x-Owns'){
        header.innerText = "X WINS"
        gameRunning = false
    }
    if(topRow[0].id === 'o-Owns' && midRow[1].id === 'o-Owns' && botRow[2].id === 'o-Owns'){
        header.innerText = "O WINS"
        gameRunning = false
    }
    if(topRow[2].id === 'x-Owns' && midRow[1].id === 'x-Owns' && botRow[0].id === 'x-Owns'){
        header.innerText = "X WINS"
        gameRunning = false
    }
    if(topRow[2].id === 'o-Owns' && midRow[1].id === 'o-Owns' && botRow[0].id === 'o-Owns'){
        header.innerText = "O WINS"
        gameRunning = false
    }
    let boardIsFilled = true
    for (let i = 0; i < squares.length; i++){
        let currentSquare = squares[i]
        if (currentSquare.id.includes('square')){
            boardIsFilled = false
            break;
        }
    }
            if (boardIsFilled){
                header.innerText = "NO ONE WINS"
            }

}
window.addEventListener("click", event =>{
    winConditions()
})
playerClick()

})