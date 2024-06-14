# quiz_application_ts_project08

A fun and interactive command-line quiz application where you can test your knowledge on various topics. Choose your quiz topic, set the number of questions, and challenge yourself with different difficulty levels. Built with `inquirer` for seamless user interaction and enhanced with `chalk` for vibrant console messages.

## Features

- **Interactive Gameplay**: Built with `inquirer` for a seamless interactive experience.
- **Vibrant Console Messages**: Enhanced with `chalk` for colorful and bold game notifications.
- **Dynamic Topics**: Choose from various topics like Computers, Gadgets, Sports, and more.
- **Difficulty Levels**: Customize the quiz difficulty with options for easy, medium, and hard questions.

## Installation

To install and run the quiz app, follow these steps on command prompt:

1. **Install the Quiz App**
    ```bash
    npm i quiz-app-byhassanali
    ```

2. **Run the Quiz App**
    ```bash
    npx quiz-app-byhassanali
    ```

## How to Play

1. **Start the Quiz**
   - Upon running the app, you will be prompted to enter your name.

2. **Choose Your Quiz Topic**
   - Select the topic for your quiz from the available choices: Science: Computers, Science: Gadgets, Sports, General Knowledge, Entertainment: Japanese Anime and & Manga, Entertainment: Music, Entertainment: Video Games.

3. **Set Quiz Parameters**
   - Specify the number of questions you want in the quiz (between 1 and 50).
   - Select the difficulty level for the quiz: easy, medium, or hard.

4. **Answer Questions**
   - For each question, select the correct answer from the given choices.
   - Your score will be displayed at the end of the quiz.

## Example

```bash
$ npx quiz-app-byhassanali
What is your name? John
Select the topic for the quiz: Science: Computers, Science: Gadgets, Sports, General Knowledge, Entertainment: Japanese Anime and & Manga, Entertainment: Music, Entertainment: Video Games: Science: Computers
How many questions do you want in the quiz? (1-50): 5
Select the difficulty level: easy, medium, hard: medium
Question 1: What does CPU stand for?
a) Central Processing Unit
b) Central Process Unit
c) Computer Personal Unit
d) Central Processor Unit
Select the correct answer: Central Processing Unit
...
Dear John! Your Score is 4 out of 5
```

## Author

Hassan Ali
