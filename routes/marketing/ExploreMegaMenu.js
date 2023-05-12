import { v4 as uuid } from "uuid";

const ExploreMegaMenuClass = [
  {
    id: uuid(),
    menuitem: "I am in class : ",
    children: [
      {
        id: uuid(),
        subtitle: (
          <div>
            6 <sup>th</sup>
          </div>
        ),
        image: "/images/png/six.png",
        link: "#",
      },
      {
        id: uuid(),
        subtitle: (
          <div>
            7 <sup>th</sup>
          </div>
        ),
        image: "/images/png/seven.png",
        link: "#",
      },
      {
        id: uuid(),
        subtitle: (
          <div>
            8 <sup>th</sup>
          </div>
        ),
        image: "/images/png/eight.png",
        link: "#",
      },
      {
        id: uuid(),
        subtitle: (
          <div>
            9 <sup>th</sup>
          </div>
        ),
        image: "/images/png/nine.png",
        link: "#",
      },
      {
        id: uuid(),
        subtitle: (
          <div>
            10 <sup>th</sup>
          </div>
        ),
        image: "/images/png/number-10.png",
        link: "#",
      },
      {
        id: uuid(),
        subtitle: (
          <div>
            11 <sup>th</sup>
          </div>
        ),
        image: "/images/png/number-11.png",
        link: "#",
      },
      {
        id: uuid(),
        subtitle: (
          <div>
            12 <sup>th</sup>
          </div>
        ),
        image: "/images/png/twelve.png",
        link: "#",
      },
      {
        id: uuid(),
        subtitle: <div>12 +</div>,
        image: "/images/png/number-13.png",
        link: "#",
      }
    ],
  },
];

const ExploreMegaMenuStream = [
  {
    id: uuid(),
    menuitem: "My stream is... ",
    children: [
      {
        id: uuid(),
        subtitle: "Science",
        image: "/images/stream-icons/chemistry.png",
        link: "#",
      },
      {
        id: uuid(),
        subtitle: "Commerce",
        image: "/images/stream-icons/payment-method.png",
        link: "#",
      },
    ],
  },
];

const ExploreMegaMenuBoards = [
  {
    id: uuid(),
    menuitem: "My Board is... ",
    children: [
      {
        id: uuid(),
        subtitle: "CBSE",
        image: "/images/boards-icons/cbse-icon.png",
        link: "#",
      },
      {
        id: uuid(),
        subtitle: "ICSE",
        image: "/images/boards-icons/icse-icon.jpg",
        link: "#",
      },
      {
        id: uuid(),
        subtitle: "UP Board",
        image: "/images/boards-icons/up-board-icon.jpg",
        link: "#",
      },
      {
        id: uuid(),
        subtitle: "Raj Board",
        image: "/images/boards-icons/raj-board.jpg",
        link: "#",
      },
    ],
  },
];

const ExploreMegaMenuExams = [
  {
    id: uuid(),
    menuitem: "Exam I am preparing for :  ",
    children: [
      {
        id: uuid(),
        subtitle: "Boards",
        image: "/images/boards-icons/cbse-icon.png",
        link: "#",
      },
      {
        id: uuid(),
        subtitle: "NEET",
        image: "/images/boards-icons/neet-icon.jpg",
        link: "#",
      },
      {
        id: uuid(),
        subtitle: "JEE-Mains",
        image: "/images/boards-icons/jee-mains.png",
        link: "#",
      },
      {
        id: uuid(),
        subtitle: "JEE-Advanced",
        image: "/images/boards-icons/jee-mains.png",
        link: "#",
      },
      {
        id: uuid(),
        subtitle: "UPSC",
        image: "/images/boards-icons/upsc-icon.jpg",
        link: "#",
      }
    ],
  },
];


const ExploreMegaMenuLanguage = [
  {
    id: uuid(),
    menuitem: "Select your language : ",
    children: [
      {
        id: uuid(),
        subtitle: "English",
        link: "#",
      },
      {
        id: uuid(),
        subtitle: "Hindi",
        link: "#",
      },
      {
        id: uuid(),
        subtitle: "Hinglish",
        link: "#",
      }
    ],
  },
];

export default ExploreMegaMenuClass;
export {
  ExploreMegaMenuBoards,
  ExploreMegaMenuExams,
  ExploreMegaMenuStream,
  ExploreMegaMenuLanguage,
};
