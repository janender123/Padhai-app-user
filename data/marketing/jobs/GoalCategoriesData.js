import { v4 as uuid } from "uuid";

export const GoalCategoriesData = [
  {
    id: uuid(),
    icon: '<Image src="/images/goals-icons/upsc-icon.svg" alt="" height="45" className="text-inverse" />',
    category: "UPSC CSE-GS"
  },
  {
    id: uuid(),
    icon: '<Image src="/images/goals-icons/iit_jee-icon.svg" alt="" height="45" className="text-inverse" />',
    category: "IIT JEE",
    },
  {
    id: uuid(),
    icon: '<Image src="/images/goals-icons/neet_ug-icon.svg" alt="" height="45" className="text-inverse" />',
    category: "NEET UG",
     },
  {
    id: uuid(),
    icon: '<Image src="/images/goals-icons/ssc-icon.svg" alt="" height="45" className="text-inverse" />',
    category: "SSC JE & state AE exams",
   
  },
  {
    id: uuid(),
    icon: '<Image src="/images/goals-icons/cat-icon.svg" alt="" height="45" className="text-inverse" />',
    category: "CAT & other MBA entrance tests",
   
  },
  {
    id: uuid(),
    icon: '<Image src="/images/goals-icons/class_12-icon.svg" alt="" height="45" className="text-inverse" />',
    category: "CBSE class 12",
     },
  {
    id: uuid(),
    icon: '<Image src="/images/goals-icons/bank_exams-icon.svg" alt="" height="45" className="text-inverse" />',
    category: "Bank Exams",
     },
  {
    id: uuid(),
    icon: '<Image src="/images/goals-icons/ca-icon.svg" alt="" height="45" className="text-inverse" />',
    category: "CA Intermediate",
    },
];

export default GoalCategoriesData;
