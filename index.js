

import readlineSync from "readline-sync"
let score = 0

const userName = readlineSync.question("what is your name ?")

console.log("😃 Welcome", userName.toUpperCase(), " to Do You Know Me Quiz 😀")

function play(question, answer) {
  const userAnswer = readlineSync.question(question)
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("You are Right✅",)
    score = score + 1
  } else {
    console.log("You are Wrong❌",)
    score = score - 1
  }
  console.log("Your current score is:", score)
  console.log("----------")
}

const questions = [
  {
    question: "In which month my birthday comes ?",
    answer: "august"
  }, {
    question: "My favourite bike ?",
    answer: "r15"
  }, {
    question: "I have laptop of which company ?",
    answer: "asus"
  }, {
    question: "I like F1 or Football ?",
    answer: "f1"
  }, {
    question: "Which company's smartphone i have ?",
    answer: "samsung"
  }
]

for (let i = 0; i < questions.length; i++) {
  play(questions[i].question,
    questions[i].answer)
}


console.log("*****Quiz ends here***** ")




console.log("Your Final Score is:", score)


console.log("High scorers👇")

const highScorers = [
  {
    name: "Aman",
    score: 5
  },
  {
    name: "Janvi",
    score: 4
  }
]

for (let i = 0; i < highScorers.length; i++) {
  console.log(highScorers[i].name),
    console.log("score:", highScorers[i].score),
    console.log("<-->")
}








