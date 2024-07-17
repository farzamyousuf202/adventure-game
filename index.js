#! /usr/bin/env  node
// src/index.ts
// src/index.ts
import inquirer from 'inquirer';
async function startGame() {
    const questions = [
        {
            type: 'list',
            name: 'choice',
            message: 'You are in a dark forest. Which way do you go?',
            choices: ['Left', 'Right', 'Forward']
        }
    ];
    const answer = await inquirer.prompt(questions);
    if (answer.choice === 'Left') {
        console.log('You encounter a wild animal and run away!');
    }
    else if (answer.choice === 'Right') {
        console.log('You find a hidden treasure chest!');
    }
    else {
        console.log('You walk into a clearing and find a peaceful village.');
    }
    console.log('Game over. Thanks for playing!');
}
startGame();
