`strict`

let randomNumber1 = Math.floor(Math.random()*6) + 1
let randomNumber2 = Math.floor(Math.random()*6) + 1

let randomImg = "dice"+randomNumber1+".png"
let randomImg2 = "dice"+randomNumber2+".png"
let imgSource = "images/" + randomImg
let imgSource2 = "images/" + randomImg2

let image1 = document.querySelectorAll("img")[0]
let image2 = document.querySelectorAll("img")[1]
image1.setAttribute("src",imgSource)
image2.setAttribute("src",imgSource2)
let winner = document.querySelector("h1")

if (randomNumber1 > randomNumber2){
    winner.innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1){
    winner.innerHTML = "Player 2 Wins 🚩!"; 
} else{
    winner.innerHTML = "Its a draw"; 
}
