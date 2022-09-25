
const randomNumberBetween0and1= Math.random();                              //math.random generates random value 
const randomNumberbetweenand19= randomNumberBetween0and1 * 20;
const luckyNumber = Math.floor(randomNumberbetweenand19);                   //math.floor to remove decimal value

let score = 4;
console.log('Lucky Number :' + luckyNumber);

const UserInput = document.getElementById('guessing');
const megBox = document.querySelector('#message');

const checkButton = document.getElementById('check');
const main = document.querySelector('main');
const scoreElement=document.getElementById('score');
scoreElement.textContent = score;


function checkNumber () {
    const userGuess = Number(UserInput.value);

    if(userGuess==luckyNumber){
        megBox.textContent= 'congrats ! you guessed the correct number 🤘';
        main.style.backgroundColor='green';
    }
    else{
    main.style.backgroundColor='red';
    score=score-1;

     if (score <= 0) {
        megBox.textContent='you lost the game';
        checkButton.disabled =true;
        return;
     }
     else{
        scoreElement.textContent=score;
       if(userGuess > luckyNumber)
       {
        megBox.textContent="guess is too high 😒";
       }
       else{
        megBox.textContent='guess is too low 😒';
       }

     }
     
    }

}

checkButton.addEventListener('click',checkNumber);