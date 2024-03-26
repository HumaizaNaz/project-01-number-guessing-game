#! /usr/bin/env node

import inquirer from "inquirer"
// npm i -g h07aa-project-01-number-guessing-game (always do because i did save it on -g);

// 1) computer will generate a random number

// 2) user input for guessing number

// 3) compare user input with computer generated number and show result 


// const randomNumber = 13;

// const answers = await inquirer.prompt([
//     {
//         name:"userGuessedNumber",
//         type:"number",
//         message:"Please guess a number:",
//     },
// ]);

// if(answers.userGuessedNumber === randomNumber){
//     console.log("congratulation! you guessed right number.");
// }else{
//     console.log("You guessed wrong number");
// }

const randomNumber = Math.floor(Math.random() *10 + 1);//floor do round of
// console.log(randomNumber);// if we don't need 0 so we add +1

const answers = await inquirer.prompt([
    {
        name:"userGuessedNumber",
        type:"number",
        message:"Please guess a number 1-10 :",
    },
]);

if(answers.userGuessedNumber === randomNumber){
    console.log("congratulation! you guessed right number.");
}else{
    console.log("You guessed wrong number");
}
