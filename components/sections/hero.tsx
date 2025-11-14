import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Pattern } from "@/components/ui/pattern";

export const Hero = () => {
  return (
    <section className="border-secondary-15 relative border-b py-42">
      <Pattern />
      <div className="flex flex-col items-center justify-center gap-8 text-center">
        <h1 className="text-5xl leading-[1.1] font-semibold text-shadow-2xs">
          A Digital Product Studio <br />
          that will Work
        </h1>
        <div className="border-secondary-15 bg-secondary-15/30 rounded-lg border px-4 py-5 backdrop-blur-md">
          For{" "}
          <span className="bg-secondary-20 mx-1 rounded-md p-2">Startups</span>,{" "}
          <span className="bg-secondary-20 mx-1 rounded-md px-4 py-2">
            Enterprise Leaders
          </span>
          ,{" "}
          <span className="bg-secondary-20 mx-1 rounded-md px-4 py-2">
            Media & Publishers
          </span>{" "}
          and{" "}
          <span className="bg-secondary-20 mx-1 rounded-md px-4 py-2">
            Social Good
          </span>
        </div>
        <div className="space-x-4">
          <Link href="/work" className={buttonVariants({ variant: "outline" })}>
            Our Works
          </Link>
          <Link
            href="/contact"
            className={buttonVariants({ variant: "primary" })}
          >
            Contact Us
          </Link>
        </div>
      </div>
      <div>
        <Image
          src="/abstract.svg"
          alt="Abstract"
          width={1000}
          height={1000}
          draggable={false}
          priority
          className="absolute bottom-0 -z-10 h-2/3 w-full object-cover"
        />
      </div>
    </section>
  );
};
