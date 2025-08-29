var diceNumber = Math.random();
diceNumber = diceNumber * 6 + 1;
diceNumber = Math.floor(diceNumber);

console.log("Rolling the dice...........");

setTimeout(() => {
    console.log(diceNumber);
}, 3000);
