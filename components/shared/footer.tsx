import {
  IconBrandFacebookFilled,
  IconBrandLinkedinFilled,
  IconBrandXFilled,
  IconMailFilled,
  IconMapPinFilled,
  IconPhoneFilled,
} from "@tabler/icons-react";

import Link from "next/link";

import { Logo } from "@/components/shared/logo";
import { Box } from "@/components/ui/box";
import { Container } from "@/components/ui/container";

export const Footer = () => {
  return (
    <div className="border-secondary-15 border-t py-12">
      <Container className="px-4 xl:px-0">
        <footer className="flex h-full flex-col justify-between gap-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <Logo showText />
            <div className="flex flex-wrap items-center justify-center gap-6">
              <Link href="/">Home</Link>
              <Link href="/services">Services</Link>
              <Link href="/work">Work</Link>
              <Link href="/process">Process</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </div>
            <Socials />
          </div>
          <div className="bg-secondary-15 h-px w-full" />
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="flex flex-col items-center gap-4 md:flex-row">
              <Link
                href="mailto:info@squareup.in"
                className="flex items-center gap-2"
              >
                <IconMailFilled className="text-primary-50 size-4" />
                <span>info@squareup.in</span>
              </Link>
              <Link
                href="tel:+919999999999"
                className="flex items-center gap-2"
              >
                <IconPhoneFilled className="text-primary-50 size-4" />
                <span>+91 9999999999</span>
              </Link>
              <p className="flex items-center gap-2">
                <IconMapPinFilled className="text-primary-50 size-4" />
                <span>Gokul, Mathura, INDIA</span>
              </p>
            </div>
            <div>
              <p className="text-secondary-60 text-sm">
                © {new Date().getFullYear()} SquareUp. All rights reserved.
              </p>
            </div>
          </div>
          <p className="text-secondary-60 flex items-center justify-center gap-1 text-sm">
            Designed by{" "}
            <Link
              href="https://x.com/Praha37v"
              target="_blank"
              className="text-primary-60"
            >
              @praha,
            </Link>
            Developed by{" "}
            <Link
              href="https://x.com/ditinagrawal"
              target="_blank"
              className="text-primary-60"
            >
              @ditinagrawal.
            </Link>
          </p>
        </footer>
      </Container>
    </div>
  );
};

const Socials = () => {
  return (
    <div className="border-secondary-15 flex items-center gap-4 rounded-md border px-4 py-2">
      <p>Stay Connected</p>
      <div className="flex items-center gap-2">
        <Box>
          <IconBrandFacebookFilled className="text-primary-50 size-5" />
        </Box>
        <Box>
          <IconBrandXFilled className="text-primary-50 size-5" />
        </Box>
        <Box>
          <IconBrandLinkedinFilled className="text-primary-50 size-5" />
        </Box>
      </div>
    </div>
  );
};
