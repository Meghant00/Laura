import {
  FaBasketballBall,
  FaFile,
  FaGlobe,
  FaTachometerAlt,
} from "react-icons/fa";

const services = [
  {
    title: "Lorem Ipsum",
    description:
      "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
    icon: (
      <FaBasketballBall className="text-yellow-500 text-5xl mx-4 my-4 group" />
    ),
  },
  {
    title: "Sed ut perspiciatis",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    icon: <FaFile className="text-yellow-500 text-5xl mx-4 my-4 group" />,
  },
  {
    title: "Magni Dolores",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    icon: (
      <FaTachometerAlt className="text-yellow-500 text-5xl mx-4 my-4 group" />
    ),
  },
  {
    title: "Nemo Enim",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    icon: <FaGlobe className="text-yellow-500 text-5xl mx-4 my-4 group" />,
  },
];
export default services;
