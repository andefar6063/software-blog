interface Question {
  question: string;
  code: string | "none";
  answers: string[];
  correctAnswer: string;
}

interface TestQuestions {
  [key: number]: Question[];
}

export const testQuestions: TestQuestions = {
  1: [
    {
      question: "What will be the output of the following JavaScript code?",
      code: `console.log(typeof null);`,
      answers: ["'object'", "'null'", "'undefined'", "'boolean'"],
      correctAnswer: "'object'",
    },
  ],
  2: [
    {
      question:
        "Which of the following is a correct way to define a function in JavaScript?",
      code: "none",
      answers: [
        "function myFunction() {}",
        "def myFunction() {}",
        "function:myFunction() {}",
        "func myFunction() {}",
      ],
      correctAnswer: "function myFunction() {}",
    },
  ],
  3: [
    {
      question: "What will be the output of the following JavaScript code?",
      code: `let x = 10;
let y = '10';
console.log(x == y);`,
      answers: ["true", "false", "undefined", "null"],
      correctAnswer: "true",
    },
  ],
  4: [
    {
      question: "How can you add a single-line comment in JavaScript?",
      code: "none",
      answers: [
        "<!-- Comment -->",
        "// Comment",
        "/* Comment */",
        "## Comment",
      ],
      correctAnswer: "// Comment",
    },
  ],
  5: [
    {
      question: "What will be the output of the following code snippet?",
      code: `const fruits = ['Apple', 'Banana', 'Mango'];
console.log(fruits[1]);`,
      answers: ["'Apple'", "'Banana'", "'Mango'", "undefined"],
      correctAnswer: "'Banana'",
    },
  ],
};
