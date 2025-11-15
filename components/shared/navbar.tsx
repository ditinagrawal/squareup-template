import { IconMenuDeep } from "@tabler/icons-react";

import Link from "next/link";

import { Logo } from "@/components/shared/logo";
import { Button, buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  return (
    <div className="border-secondary-15 border-b py-6">
      <Container className="px-4 xl:px-0">
        <nav className="flex items-center justify-between">
          <Logo showText />
          <div className="hidden items-center gap-4 md:flex">
            <Link href="/" className={buttonVariants({ variant: "secondary" })}>
              Home
            </Link>
            <Link href="/" className={buttonVariants()}>
              Services
            </Link>
            <Link href="/" className={buttonVariants()}>
              Work
            </Link>
            <Link href="/" className={buttonVariants()}>
              Process
            </Link>
            <Link href="/" className={buttonVariants()}>
              About
            </Link>
          </div>
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: "primary" }),
              "hidden md:block",
            )}
          >
            Contact Us
          </Link>
          <MobileNavbar />
        </nav>
      </Container>
    </div>
  );
};

const MobileNavbar = () => {
  return (
    <div className="md:hidden">
      <div>
        <Button variant="secondary">
          <IconMenuDeep className="text-primary-70 size-5" />
        </Button>
      </div>
    </div>
  );
};
