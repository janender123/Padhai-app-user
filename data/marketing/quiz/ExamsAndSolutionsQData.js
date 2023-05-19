// import node module libraries
import { v4 as uuid } from "uuid";

export const ExamsAndSolutionsQData = [
  {
    id: 1,
    question: (
      <div>
        Probabilities of a target being hit by three players A, B and C are
        1/5,2/5 and 5/6 respectively. If all three players given a try then what
        would be the probability that the target being hit by not more than 2
        players?
      </div>
    ),
    answerSelectionType: "single",
    interface: "button",
    answers: [
      {
        id: uuid(),
        answer: "1/15",
        value: 1,
      },
      {
        id: uuid(),
        answer: "1/12",
        value: 2,
      },
      {
        id: uuid(),
        answer: "14/15",
        value: 3,
      },
      {
        id: uuid(),
        answer: "11/12",
        value: 4,
      },
    ],
    correctAnswer: 3,
    point: 20,
  },
  {
    id: 2,
    question: "The lifecycle methods are mainly used for ___.",
    answerSelectionType: "single",
    interface: "radio",
    answers: [
      {
        id: uuid(),
        answer: "keeping track of event history",
        value: 1,
      },
      {
        id: uuid(),
        answer: "enhancing components",
        value: 2,
      },
      {
        id: uuid(),
        answer: "freeing up resources",
        value: 3,
      },
      {
        id: uuid(),
        answer: "none of the above",
        value: 4,
      },
    ],
    correctAnswer: 3,
    point: 20,
  },
  {
    id: 3,
    question:
      "___ can be done while multiple elements need to be returned from a component.",
    answerSelectionType: "single",
    interface: "button",
    answers: [
      {
        id: uuid(),
        answer: "Abstraction",
        value: 1,
      },
      {
        id: uuid(),
        answer: "Packing",
        value: 2,
      },
      {
        id: uuid(),
        answer: "Insulation",
        value: 3,
      },
      {
        id: uuid(),
        answer: "Wrapping",
        value: 4,
      },
    ],
    correctAnswer: 4,
    point: 20,
  },
  {
    id: 4,
    question: "What’s the difference between a 301 and a 302 redirect?",
    answerSelectionType: "single",
    interface: "checkbox",
    answers: [
      {
        id: uuid(),
        answer:
          "301 is used for a temporary page redirection, 302 for a redirection block",
        value: 1,
      },
      {
        id: uuid(),
        answer:
          "301 is used for a permanent page redirection, 302 for a temporary redirection",
        value: 2,
      },
      {
        id: uuid(),
        answer:
          "301 is used for a page redirection block, 302 for a permanent redirection",
        value: 3,
      },
      {
        id: uuid(),
        answer:
          "301 is used for a temporary page redirection, 302 for a permanent redirection",
        value: 4,
      },
    ],
    correctAnswer: 3,
    point: 20,
  },
  {
    id: 5,
    question: "Is React a programming language?",
    answerSelectionType: "multiple",
    interface: "radio",
    answers: [
      {
        id: uuid(),
        answer: "Yes",
        value: 1,
      },
      {
        id: uuid(),
        answer: "No",
        value: 2,
      },
    ],
    correctAnswer: 1,
    point: 20,
  },
];

export default ExamsAndSolutionsQData;
