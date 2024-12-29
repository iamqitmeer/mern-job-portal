import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { NavLink } from "react-router";

export function Footer() {
  return (
    <footer className="tracking-tight bg-zinc-900 text-zinc-300 dark:bg-zinc-950 dark:text-zinc-400">
      <div className="tracking-tight container mx-auto p-12">
        <div className="tracking-tight grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className="tracking-tight mb-4 text-lg font-semibold text-white dark:text-zinc-200">
              For Job Seekers
            </h3>
            <ul className="tracking-tight space-y-2">
              <li>
                <NavLink
                  href="#"
                  className="tracking-tight text-sm hover:text-teal-400 transition-colors"
                >
                  Browse Jobs
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="#"
                  className="tracking-tight text-sm hover:text-teal-400 transition-colors"
                >
                  Career Advice
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="#"
                  className="tracking-tight text-sm hover:text-teal-400 transition-colors"
                >
                  Upload Resume
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="tracking-tight mb-4 text-lg font-semibold text-white dark:text-zinc-200">
              For Employers
            </h3>
            <ul className="tracking-tight space-y-2">
              <li>
                <NavLink
                  href="#"
                  className="tracking-tight text-sm hover:text-teal-400 transition-colors"
                >
                  Post a Job
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="#"
                  className="tracking-tight text-sm hover:text-teal-400 transition-colors"
                >
                  Pricing
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="#"
                  className="tracking-tight text-sm hover:text-teal-400 transition-colors"
                >
                  Recruitment Solutions
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="tracking-tight mb-4 text-lg font-semibold text-white dark:text-zinc-200">
              Company
            </h3>
            <ul className="tracking-tight space-y-2">
              <li>
                <NavLink
                  href="#"
                  className="tracking-tight text-sm hover:text-teal-400 transition-colors"
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="#"
                  className="tracking-tight text-sm hover:text-teal-400 transition-colors"
                >
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="#"
                  className="tracking-tight text-sm hover:text-teal-400 transition-colors"
                >
                  Privacy Policy
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="tracking-tight mb-4 text-lg font-semibold text-white dark:text-zinc-200">
              Connect With Us
            </h3>
            <div className="tracking-tight flex space-x-4">
              <NavLink
                href="#"
                className="tracking-tight text-zinc-400 hover:text-teal-400 transition-colors"
              >
                <Facebook className="tracking-tight h-6 w-6" />
              </NavLink>
              <NavLink
                href="#"
                className="tracking-tight text-zinc-400 hover:text-teal-400 transition-colors"
              >
                <Twitter className="tracking-tight h-6 w-6" />
              </NavLink>
              <NavLink
                href="#"
                className="tracking-tight text-zinc-400 hover:text-teal-400 transition-colors"
              >
                <Linkedin className="tracking-tight h-6 w-6" />
              </NavLink>
              <NavLink
                href="#"
                className="tracking-tight text-zinc-400 hover:text-teal-400 transition-colors"
              >
                <Instagram className="tracking-tight h-6 w-6" />
              </NavLink>
            </div>
          </div>
        </div>
        <div className="tracking-tight mt-8 border-t border-zinc-800 pt-8 text-center">
          <p className="tracking-tight text-sm text-zinc-400">
            &copy; 2023 JobPortal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
