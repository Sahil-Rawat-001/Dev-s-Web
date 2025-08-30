var friends = ["kanye","Ben","Macalan","Morgan stanley","JP morgan"];

function whosPaying(names){
    var numberOfPeople = names.length;
    var randomPersonPosition = Math.floor(Math.random()*numberOfPeople);
    var randomPerson = names[randomPersonPosition];

    return randomPerson+" is paying for the lunch.";
}

console.log(whosPaying(friends));