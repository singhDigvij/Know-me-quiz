import readlineSync from "readline-sync"
const userName = readlineSync.question("What is your name ? ")
console.log(`Welcome ${userName.toUpperCase()} Do you know Digvijay ? Lets check out`)

let score = 0

console.log("<----- Quiz starts! Good luck ----->")

function quiz(question, answer) {
  const userAnswer = readlineSync.question(question)
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("You are right!")
    score = score + 1
  } else {
    console.log("You are wrong!")
    score = score - 1
  }
  console.log("-----")
}




const quizQuestions = [
  {
    question: "Q1. Which state does he live ?",
    answer: "uttar pradesh"
  },
  {
    question: "Q2. Which city does he live ?",
    answer: "prayagraj"

  },
  {
    question: "Q3. Does he has a laptop ?",
    answer: "yes"
  },
  {
    question: "Q4. Does he has a wireless mouse ?",
    answer: "yes"
  }
]

for (let i = 0; i < quizQuestions.length; i++) {
  quiz(quizQuestions[i].question, quizQuestions[i].answer)
}


console.log("<----- Quiz ends ----->")

console.log(userName.toUpperCase(), "your final score is", score)








