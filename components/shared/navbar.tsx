import Link from "next/link";

import { Logo } from "@/components/shared/logo";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export const Navbar = () => {
  return (
    <div className="border-secondary-15 border-b py-6">
      <Container>
        <nav className="flex items-center justify-between">
          <Logo showText />
          <div className="flex items-center gap-4">
            <Link href="/" className={buttonVariants({ variant: "secondary" })}>
              Home
            </Link>
            <Link href="/services" className={buttonVariants()}>
              Services
            </Link>
            <Link href="/work" className={buttonVariants()}>
              Work
            </Link>
            <Link href="/process" className={buttonVariants()}>
              Process
            </Link>
            <Link href="/about" className={buttonVariants()}>
              About
            </Link>
          </div>
          <Link
            href="/contact"
            className={buttonVariants({ variant: "primary" })}
          >
            Contact Us
          </Link>
        </nav>
      </Container>
    </div>
  );
};
