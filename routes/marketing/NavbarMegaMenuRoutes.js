import { v4 as uuid } from 'uuid';


const NavbarMegaMenuRoutes = [
  {
    id: uuid(),
    menuitem: "I am in class : ",
    children: [
      {
        id: uuid(),
        menuitem: "Master of Applied Data Science",
        subtitle: "6",
        image: "/images/png/six.png",
        link: "#",
      },
      {
        id: uuid(),
        menuitem: "MBA in Business Analytics",
        subtitle: "7",
        image: "/images/png/seven.png",
        link: "#",
      },
      {
        id: uuid(),
        menuitem: "Master of Science in Machine",
        subtitle: "8",
        image: "/images/png/eight.png",
        link: "#",
      },
      {
        id: uuid(),
        menuitem: "Master of Computer Science",
        subtitle: "9",
        image: "/images/png/nine.png",
        link: "#",
      },
      {
        id: uuid(),
        menuitem: "Google Data Analytics",
        subtitle: "10",
        image: "/images/png/number-10.png",
        link: "#",
      },
      {
        id: uuid(),
        menuitem: "IBM Data Science",
        subtitle: "11",
        image: "/images/png/number-11.png",
        link: "#",
      },
      {
        id: uuid(),
        menuitem: "Machine Leaning for Analytics",
        subtitle: "12",
        image: "/images/png/twelve.png",
        link: "#",
      },
      {
        id: uuid(),
        menuitem: "TensorFlow Developer Certificate",
        subtitle: "13",
        image: "/images/png/number-13.png",
        link: "#",
      },
      {
        id: uuid(),
        menuitem: "Next",
        button: true,
        link: "#",
      },
    ],
  },
];

export default NavbarMegaMenuRoutes;
