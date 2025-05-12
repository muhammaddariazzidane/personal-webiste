import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import NavItem from "@/components/common/NavItem";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import ModeToggle from "@/components/ui/mode-toggle";

export default function Navbar() {
  return (
    <div
      className={`w-full sticky top-0 left-0 right-0 bg-white dark:bg-slate-950 border-b z-50`}
    >
      <div className="flex py-4 items-center justify-between mx-auto max-w-5xl  px-5">
        <div>
          <Link to="/" className="text-primary">
            <h1 className="lg:text-lg text-base font-semibold tracking-tight">
              Muhammad Dariaz Zidane
            </h1>
          </Link>
        </div>
        <div className="w-full max-w-md ms-auto font-medium space-x-7 hidden md:flex justify-end items-center">
          <NavItem />
        </div>

        <div className="flex gap-4">
          <div className="md:hidden block">
            <ModeToggle />
          </div>
          <Sheet>
            <SheetTrigger
              aria-label="Hamburger menu"
              className="md:hidden block"
            >
              <Menu />
            </SheetTrigger>
            <SheetContent
              side={"right"}
              className="md:hidden block w-full h-full"
            >
              <SheetHeader className="text-start">
                <SheetTitle className="text-start flex items-center gap-4 mb-5">
                  <Avatar>
                    <AvatarImage
                      src="/img/foto.png"
                      className=" object-cover"
                    />
                    <AvatarFallback>DZ</AvatarFallback>
                  </Avatar>
                  Muhammad Dariaz Zidane
                </SheetTitle>
                <div className="flex flex-col gap-6">
                  <NavItem />
                </div>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
