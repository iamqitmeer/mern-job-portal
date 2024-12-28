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
import { NavLink } from 'react-router'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <NavLink to="/" className="flex items-center space-x-2">
          <Briefcase className="h-6 w-6 text-teal-600 dark:text-teal-400" />
          <span className="text-xl font-bold text-zinc-900 dark:text-white">
            JobPortal
          </span>
        </NavLink>
        <div className="hidden md:flex md:items-center md:space-x-4">
          <nav className="flex space-x-4">
            <NavLink
              to="/jobs"
              className="text-sm font-medium text-zinc-700 hover:text-teal-600 dark:text-zinc-300 dark:hover:text-teal-400"
            >
              Find Jobs
            </NavLink>
            <NavLink
              to="/companies"
              className="text-sm font-medium text-zinc-700 hover:text-teal-600 dark:text-zinc-300 dark:hover:text-teal-400"
            >
              Companies
            </NavLink>
            <NavLink
              to="/resources"
              className="text-sm font-medium text-zinc-700 hover:text-teal-600 dark:text-zinc-300 dark:hover:text-teal-400"
            >
              Resources
            </NavLink>
          </nav>
          <div className="relative">
            <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform text-zinc-500 dark:text-zinc-400" />
            <Input
              className="w-64 pl-8 dark:bg-zinc-800 dark:text-white"
              placeholder="Search jobs..."
            />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute right-0 top-0 flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500"></span>
            </span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
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
          <Button className="hidden md:inline-flex">Post a Job</Button>
        </div>
      </div>
    </header>
  );
}
