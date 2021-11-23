import {
  FaInstagram,
  FaShareAlt,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaSkype,
} from "react-icons/fa";
const socialProfile = {
  title: "Social Profiles",
  icon: <FaShareAlt className="text-2xl text-yellow-400" />,
  links: [
    {
      id: 1,
      link: (
        <FaTwitter className="group group-hover:text-white text-gray-600 text-center text-xl transition duration-300 ease-linear" />
      ),
    },
    {
      id: 2,
      link: (
        <FaFacebook className="group group-hover:text-white text-gray-600 text-center text-xl transition duration-300 ease-linear" />
      ),
    },
    {
      id: 3,
      link: (
        <FaInstagram className="group group-hover:text-white text-gray-600 text-center text-xl transition duration-300 ease-linear" />
      ),
    },
    {
      id: 4,
      link: (
        <FaLinkedin className="group group-hover:text-white text-gray-600 text-center text-xl transition duration-300 ease-linear" />
      ),
    },
    {
      id: 5,
      link: (
        <FaSkype className="group group-hover:text-white text-gray-600 text-center text-xl transition duration-300 ease-linear" />
      ),
    },
  ],
  text: "",
};

export default socialProfile;
