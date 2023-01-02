
export function eff(){
    
    var fiveDigits = diceRoll();
    var effFile;

    const fs = require('fs');
    fs.readFile('./eff_large_wordlist.txt', (err,data) => {
        if (err) throw err;
        
        effFile = data.toString();
    })

    return alert(fiveDigits);
  }

function diceRoll(){
    var randomNumber;
    var text;
    var finalNumber;

    for(var i=0; i<5; i++){
        if(i === 0){
            randomNumber = Math.floor(Math.random() * 6) + 1;
            text = randomNumber.toString();
            finalNumber = text;
            continue;
        }

        randomNumber = Math.floor(Math.random() * 6) + 1;
        text = randomNumber.toString();
        finalNumber = finalNumber + text;
    }
    return finalNumber;
}