import { FiHome } from "react-icons/fi";
import { FaRegUser, FaUsers } from "react-icons/fa";
export const sideMenu = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <FiHome className="sidebar-icons" />,
  },
  {
    title: "Student",
    path: "/student",
    icon: <FaUsers className="sidebar-icons" />,
  },
  {
    title: "Profile",
    path: "/profile",
    icon: <FaRegUser className="sidebar-icons" />,
  },
];
