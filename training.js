var readline = require("readline-sync")


var saisie = parseInt(readline.question("quel table voulez vous afficher ?"));
for(let i = 1 ; i <=10 ; i++) {
    var result = (saisie * i)
    console.log(saisie + " * " + i + " = " + result)
    if(result === true) {
        var saisie = parseInt(readline.question("Une autre table ?"));
    }
}
    






