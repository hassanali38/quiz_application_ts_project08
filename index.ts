#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";


let dataFetch = async (data : string) => {
    let fetchQuiz : any = await fetch(data); 
    let response = await fetchQuiz.json();

    return response.results;
}


let startQuiz = async () => {
    let score : number = 0;
    let userInput = await inquirer.prompt([
        {
            type : "input",
            name : "name",
            message : "What is your name?"
        },
        {
            type : "list",
            name : "topic",
            message : "Select the topic for the quiz:",
            choices : [ "Science: Computers", "Science: Gadgets", "Sports", "General Knowledge", 
                        "Entertainment: Japanese Anime and & Manga", "Entertainment: Music", 
                        "Entertainment: Video Games"]
        },
    ]);

    while (true) {
        var questions = await inquirer.prompt([
            {
                type : "number",
                name : "total",
                message : "How many questions do you want in the quiz? (1-50)"
            },
            {
                type : "list",
                name : "level",
                message : "Select the difficulty level:",
                choices : ["easy", "medium", "hard"]
            }
        ]);

        if (questions.total >= 1 && questions.total <= 50) {
            break;
        }
        else {
            console.log(chalk.red.italic.bold("Invalid Number of Questions! Questions should be in between 1 and 50!"));
        }
    }

    let apiLink : string = "";

    switch(userInput.topic) {
        case "Science: Computers":
            apiLink = `https://opentdb.com/api.php?amount=${questions.total}&category=18&difficulty=${questions.level}&type=multiple`;
            break;
        case "Science: Gadgets":
            apiLink = `https://opentdb.com/api.php?amount=${questions.total}&category=30&difficulty=${questions.level}&type=multiple`;
            break;
        case "Sports":
            apiLink = `https://opentdb.com/api.php?amount=${questions.total}&category=21&difficulty=${questions.level}&type=multiple`;
            break;
        case "General Knowledge":
            apiLink = `https://opentdb.com/api.php?amount=${questions.total}&category=9&difficulty=${questions.level}&type=multiple`;
            break;
        case "Entertainment: Japanese Anime and & Manga":
            apiLink = `https://opentdb.com/api.php?amount=${questions.total}&category=31&difficulty=${questions.level}&type=multiple`;
            break;
        case "Entertainment: Music":
            apiLink = `https://opentdb.com/api.php?amount=${questions.total}&category=12&difficulty=${questions.level}&type=multiple`;
            break;
        case "Entertainment: Video Games":
            apiLink = `https://opentdb.com/api.php?amount=${questions.total}&category=15&difficulty=${questions.level}&type=multiple`;
            break;
    }

    let data = await dataFetch(apiLink);

    for (let i = 0; i < questions.total; i++) {
        let answers = [...data[i].incorrect_answers, data[i].correct_answer];

        let ans = await inquirer.prompt([
            {
                type : "list",
                name : "quiz",
                message : data[i].question,
                choices : answers.map((val : any)=>val)
            }
        ]);

        if (ans.quiz == data[i].correct_answer) {
            ++score;
            console.log(chalk.bold.italic.green("Correct"));
        }
        else {
            console.log(`${chalk.bold.italic.red("Incorrect! ")}`);
            console.log(`The correct answer is "${chalk.bold.italic.green(data[i].correct_answer)}"`);
        }

    }
    console.log(`Dear ${chalk.magentaBright.bold(userInput.name)}! Your Score is ${chalk.blueBright.bold(score)} out of ${chalk.blueBright.bold(questions.total)}`);
}



startQuiz();


