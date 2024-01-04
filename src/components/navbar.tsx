"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/darkmode-toggle";

const links = [
  { label: "Uva uHunt", href: "/" },
  { label: "All problems", href: "/problems" },
];

const Navbar = ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => {
  const pathname = usePathname();

  return (
    <header className="flex flex-col justify-between md:flex border-b w-full sticky top-0 z-50 bg-background">
      <nav
        className={cn(
          "flex h-16 justify-between items-center px-2 space-x-4",
          className,
        )}
        {...props}
      >
        <div className="flex items-center gap-2">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                "nav-link",
                pathname === link.href && "active-nav-link",
                "first:text-lg first:font-bold first:mr-8",
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <ModeToggle />
      </nav>
    </header>
  );
};

export default Navbar;
