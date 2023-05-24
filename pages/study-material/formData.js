import React from "react";

export const FormData = [
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
    optiona: "1/15",
    optionb: "1/12",
    optionc: "14/15",
    optiond: "11/12",
    topic: "Relations and Functions",
  },
  {
    id: 2,
    question: (
      <div>
        Given functions f(x)=x^3+1, g(x)=2x+1, and h(x)=3x−1, then find the
        function h^-1(g−f)(x) and then solve the equation h^-1(g⊂f)(x)=2 for x.
      </div>
    ),
    optiona: 1,
    optionb: -1,
    optionc: 0,
    optiond: 2,
    topic: "Probability",
  },
  {
    id: 3,
    question: (
      <div>
        Find the average value F_avg​ for the function f(x)=x^2+x+5 on [-1,2]
        and determine the value of c in [-1,2] for which f(c)=2 * F_avg​.
      </div>
    ),
    optiona: "F_avg = 6.5; c=-2.37, 3.37",
    optionb: "F_avg = 5.6; c=2.37, -3.37",
    optionc: "F_avg = 6.5; c=2.37,-3.37",
    optiond: "F_avg = 5.6; c=-2.37,3.37",
    topic: "Applications of Derivatives",
  },
];

export default FormData;
