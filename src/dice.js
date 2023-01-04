import {findWord} from './effWordList.js';

export function eff(){

    var fiveDigits = diceRoll();

    var oneWord = findWord(fiveDigits);
    var capitalized = oneWord.charAt(0).toUpperCase() + oneWord.slice(1);

    var passphrase = capitalized;

    for(var j=0; j<5; j++){

        fiveDigits = diceRoll();

        oneWord = findWord(fiveDigits);
        capitalized = oneWord.charAt(0).toUpperCase() + oneWord.slice(1);
    
        passphrase = passphrase + capitalized;
    }

    return alert(passphrase);
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
