import { NavLinks } from "@/components/common/constant/NavLinks";
import { Link, useLocation } from "react-router-dom";
import ModeToggle from "../ui/mode-toggle";

export default function NavItem() {
  const location = useLocation();
  return (
    <>
      {NavLinks?.map((nav, index) => (
        <Link
          key={index}
          to={nav.href}
          className={`transition-all hover:bg-primary py-1.5 px-2.5 hover:text-primary-foreground rounded-md duration-500 flex items-center gap-2
            ${
              location.pathname == nav.href &&
              "bg-primary text-primary-foreground"
            }`}
        >
          {nav.icon}
          {nav.label}
        </Link>
      ))}
      <div className="md:block hidden">
        <ModeToggle />
      </div>
    </>
  );
}
