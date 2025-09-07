var randomNumber1 = Math.floor(Math.random() * 6)+1;
var randomNumber2 = Math.floor(Math.random() * 6)+1;

var dice1 = document.querySelector(".img1");
var dice2 = document.querySelector(".img2");

dice1.setAttribute("src",`./images/dice${randomNumber1}.png`);
dice2.setAttribute("src",`./images/dice${randomNumber2}.png`);

var textTitle = document.querySelector("h1");

if(randomNumber1 > randomNumber2){
    textTitle.innerHTML = "🎉Player 1 wins!";
}else if(randomNumber1 < randomNumber2){
    textTitle.innerHTML = "Player 2 wins!🎉";
}else{
    textTitle.innerHTML = "!!Draw!!";
}
