import Link from "next/link";

import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/darkmode-toggle";

const links = [{ label: "Uva uHunt", href: "/" }];

const Navbar = ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => {
  return (
    <header className="flex flex-col justify-between md:flex border-b w-full sticky top-0 z-50 bg-background">
      <nav
        className={cn(
          "flex h-16 justify-between items-center px-2 space-x-4",
          className,
        )}
        {...props}
      >
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-lg font-medium rounded-lg px-2 py-2 hover:bg-zinc-800 hover:underline"
          >
            {link.label}
          </Link>
        ))}
        <ModeToggle />
      </nav>
    </header>
  );
};

export default Navbar;
