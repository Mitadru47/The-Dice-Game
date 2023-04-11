// Pseudo-Random Number Generator
// Dice Roll

// var randomNumber = Math.random(); //Range: 0-0.999...(double)
// var dice = randomNumber * 6;

// console.log("Math.random(): " + randomNumber); //Range: 0-0.999...(double)

// console.log("Dice - Step 1: " + dice); //Range: 0-0.599...(double)
// console.log("Dice - Step 2: " + Math.floor(dice)); //Range: 0-5 (integer)

// console.log("Dice - Step 3: " + (Math.floor(dice) + 1)); //Range: 1-6 (integer)


dice1 = diceRoll1();
dice2 = diceRoll2();

if(dice1 > dice2)
    document.querySelector("h1").innerHTML = "🚩 - Player 1 Wins!";

if(dice1 < dice2)
    document.querySelector("h1").innerHTML = "Player 2 Wins! - 🚩";

if(dice1 == dice2)
    document.querySelector("h1").innerHTML = "🚩 - Draw! - 🚩";
    
function diceRoll1(){

    var randomNumber = Math.floor(Math.random() * 6) + 1;
    document.querySelector("img.img1").setAttribute("src", "images/dice" + randomNumber + ".png");
        
    return randomNumber;
}

function diceRoll2(){

    var randomNumber = Math.floor(Math.random() * 6) + 1;
    document.querySelector("img.img2").setAttribute("src", "images/dice" + randomNumber + ".png");

    return randomNumber;
}