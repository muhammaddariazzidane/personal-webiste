import { Home, Mail, User } from "lucide-react";
import { FaBriefcase } from "react-icons/fa6";
import { GiAchievement } from "react-icons/gi";

export const NavLinks = [
  {
    label: "Home",
    href: "/",
    icon: <Home size={22} className="md:hidden block" />,
  },
  {
    label: "About",
    href: "/about",
    icon: <User size={22} className="md:hidden block" />,
  },
  {
    label: "Projects",
    href: "/projects",
    icon: <FaBriefcase size={22} className="md:hidden block" />,
  },
  {
    label: "Certifications",
    href: "/certifications",
    icon: <GiAchievement size={22} className="md:hidden block" />,
  },
  {
    label: "Contact",
    href: "/contact",
    icon: <Mail size={22} className="md:hidden block" />,
  },
];
