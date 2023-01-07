export function length12pw(){
  var phrase = 'This is your 12 character password: ';
  var password = generate(12);
  return alert(phrase + password);
}

export function length20pw(){
  var phrase = 'This is your 20 character password: ';
  var password = generate(20);
  return alert(phrase + password);
}

export function length32pw(){
  var phrase = 'This is your 32 character password: ';
  var password = generate(32);
  return alert(phrase + password);
}

function generate(number){
  var password;
  var randomNumber;

  // 1 = abcs, 2 = ABCs, 3 = digits, 4 = special characters
  randomNumber = Math.floor(Math.random() * (4-1)+1);
  password = inputChar(randomNumber);

  for(var i = 0; i<number-1; i++){
    randomNumber = Math.floor(Math.random() * (4-1+1)+1);
    password = password + inputChar(randomNumber);
  }

  return password;
}

function inputChar(randomNumber){

  let asciiLowercase = 'abcdefghijklmnopqrstuvwxyz';
  let asciiUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let digits = '0123456789';
  let specialChars = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';

  if(randomNumber === 1){
    let randNum = Math.floor(Math.random() * (26-1)+1);
    return asciiLowercase.charAt(randNum);
  }
  if(randomNumber === 2){
    let randNum = Math.floor(Math.random() * (26-1)+1);
    return asciiUppercase.charAt(randNum);
  }
  if(randomNumber === 3){
    let randNum = Math.floor(Math.random() * (10-1)+1);
    return digits.charAt(randNum)
  }
  if(randomNumber === 4){
    let randNum = Math.floor(Math.random() * (30-1)+1);
    return specialChars.charAt(randNum)
  }
}