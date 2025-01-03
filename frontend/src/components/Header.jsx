import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Menu, Bell, Briefcase } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { NavLink } from "react-router";
import { useState } from "react";

export function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <header className="tracking-tight sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/80">
      <div className="tracking-tight container mx-auto flex h-16 items-center justify-between px-4">
        <NavLink to="/" className="tracking-tight flex items-center space-x-2">
          <Briefcase className="tracking-tight h-6 w-6 text-teal-600 dark:text-teal-400" />
          <span className="tracking-tight text-xl font-bold text-zinc-900 dark:text-white">
            JobPortal
          </span>
        </NavLink>
        <div className="tracking-tight hidden md:flex md:items-center md:space-x-4">
          <nav className="tracking-tight flex space-x-6">
            <NavLink
              to="/about"
              className="tracking-tight text-sm font-medium text-zinc-700 hover:text-teal-600 dark:text-zinc-300 dark:hover:text-teal-400"
            >
              About
            </NavLink>
            <NavLink
              to="/find-job"
              className="tracking-tight text-sm font-medium text-zinc-700 hover:text-teal-600 dark:text-zinc-300 dark:hover:text-teal-400"
            >
              Find Jobs
            </NavLink>

            <NavLink
              to="/companies"
              className="tracking-tight text-sm font-medium text-zinc-700 hover:text-teal-600 dark:text-zinc-300 dark:hover:text-teal-400"
            >
              Companies
            </NavLink>
            <NavLink
              to="/resources"
              className="tracking-tight text-sm font-medium text-zinc-700 hover:text-teal-600 dark:text-zinc-300 dark:hover:text-teal-400"
            >
              Resources
            </NavLink>
          </nav>
        </div>
        <div className="tracking-tight flex items-center space-x-4">
          {isLoggedIn ? (
            <>
              {" "}
              <Button
                variant="ghost"
                size="icon"
                className="tracking-tight relative"
              >
                <Bell className="tracking-tight h-5 w-5" />
                <span className="tracking-tight absolute right-0 top-0 flex h-2 w-2">
                  <span className="tracking-tight absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75"></span>
                  <span className="tracking-tight relative inline-flex h-2 w-2 rounded-full bg-teal-500"></span>
                </span>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="tracking-tight relative h-8 w-8 rounded-full"
                  >
                    <Avatar className="tracking-tight h-8 w-8">
                      <AvatarImage
                        src="/placeholder.svg?height=32&width=32"
                        alt="@user"
                      />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <NavLink to="/profile">Profile</NavLink>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <NavLink to="/settings">Settings</NavLink>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <NavLink to="/logout">Log out</NavLink>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button className="tracking-tight hidden md:inline-flex">
                Post a Job
              </Button>
            </>
          ) : (
            <NavLink to="/login">
              {" "}
              <Button className="tracking-tight hidden md:inline-flex">
                Login
              </Button>
            </NavLink>
          )}
        </div>
      </div>
    </header>
  );
}
