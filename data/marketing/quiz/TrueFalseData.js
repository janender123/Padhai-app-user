// import node module libraries
import { v4 as uuid } from "uuid";

export const TrueFalseData = [
  {
    id: 1,
    question: "Is the Earth flat?",
    answerSelectionType: "single",
    interface: "button",
    answers: [
      {
        id: uuid(),
        answer: "True",
        value: 1,
      },
      {
        id: uuid(),
        answer: "false",
        value: 2,
      },
    ],
    correctAnswer: 2,
    point: 20,
  },
  {
    id: 2,
    question: "Is the capital of France Paris?",
    answerSelectionType: "single",
    interface: "button",
    answers: [
      {
        id: uuid(),
        answer: "True",
        value: 1,
      },
      {
        id: uuid(),
        answer: "false",
        value: 2,
      },
    ],
    correctAnswer: 1,
    point: 20,
  },
  {
    id: 3,
    question: "Meryl Streep has won two Academy Awards",
    answerSelectionType: "single",
    interface: "button",
    answers: [
      {
        id: uuid(),
        answer: "True",
        value: 1,
      },
      {
        id: uuid(),
        answer: "false",
        value: 2,
      },
    ],
    correctAnswer: 2,
    point: 20,
  },
  {
    id: 4,
    question: "The Great Wall of China is longer than the distance between London and Beijing",
    answerSelectionType: "single",
    interface: "button",
    answers: [
      {
        id: uuid(),
        answer: "True",
        value: 1,
      },
      {
        id: uuid(),
        answer: "false",
        value: 2,
      },
    ],
    correctAnswer: 1,
    point: 20,
  },
  {
    id: 5,
    question: "Gin is typically included in a Long Island Iced Tea",
    answerSelectionType: "single",
    interface: "button",
    answers: [
      {
        id: uuid(),
        answer: "True",
        value: 1,
      },
      {
        id: uuid(),
        answer: "false",
        value: 2,
      },
    ],
    correctAnswer: 1,
    point: 20,
  },
  {
    id: 6,
    question: "The unicorn is the national animal of Scotland",
    answerSelectionType: "single",
    interface: "button",
    answers: [
      {
        id: uuid(),
        answer: "True",
        value: 1,
      },
      {
        id: uuid(),
        answer: "false",
        value: 2,
      },
    ],
    correctAnswer: 1,
    point: 20,
  }
];

export default TrueFalseData;
