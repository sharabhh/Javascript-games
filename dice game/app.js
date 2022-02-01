const winner = document.querySelector("h2");
const player1 = document.querySelector(".player-1");
const player2 = document.querySelector(".player-2");
var randomnumber1 = Math.ceil(Math.random()*6);
var randomnumber2 = Math.ceil(Math.random()*6);
console.log(randomnumber1);
console.log(randomnumber2);


everything();

function everything(){
winnerIs();
player1dice();
player2dice();
}

function winnerIs(){
if(randomnumber1 > randomnumber2){
    winner.textContent = "Player 1 wins";
}else if(randomnumber1 === randomnumber2){
    winner.textContent = "Draw";
}
else{
    winner.textContent =  "Player 2 wins";
}
}


function player1dice(){
    if(randomnumber1 === 1){
        player1.querySelector("img").setAttribute("src", "/img/dice1.png")
    }
    else if(randomnumber1 === 2){
        player1.querySelector("img").setAttribute("src", "/img/dice2.png")
    }
    else if(randomnumber1 === 3){
        player1.querySelector("img").setAttribute("src", "/img/dice3.png")
    }
    else if(randomnumber1 === 4){
        player1.querySelector("img").setAttribute("src", "/img/dice4.png")
    }
    else if(randomnumber1 === 5){
        player1.querySelector("img").setAttribute("src", "/img/dice5.png")
    }
    else if(randomnumber1 === 6){
        player1.querySelector("img").setAttribute("src", "/img/dice6.png")
    }
    
}
function player2dice(){
    if(randomnumber2 === 1){
        player2.querySelector("img").setAttribute("src", "/img/dice1.png")
    }
    else if(randomnumber2 === 2){
        player2.querySelector("img").setAttribute("src", "/img/dice2.png")
    }
    else if(randomnumber2 === 3){
        player2.querySelector("img").setAttribute("src", "/img/dice3.png")
    }
    else if(randomnumber2 === 4){
        player2.querySelector("img").setAttribute("src", "/img/dice4.png")
    }
    else if(randomnumber2 === 5){
        player2.querySelector("img").setAttribute("src", "/img/dice5.png")
    }
    else if(randomnumber2 === 6){
        player2.querySelector("img").setAttribute("src", "/img/dice6.png")
    }
    
}




// player1.getAttribute('src', playerdice1)
// player2.getAttribute('src', "/img/dice$(randomnumber2)")