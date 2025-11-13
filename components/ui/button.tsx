import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";

import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all py-3 px-5",
  {
    variants: {
      variant: {
        default: "hover:bg-secondary-15/80",
        primary: "bg-primary-50 hover:bg-primary-50/90 text-secondary-10",
        secondary: "bg-secondary-15 hover:bg-secondary-15/80",
        outline: "border-2 border-secondary-15",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export const Button = ({
  className,
  variant,
  ...props
}: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants>) => {
  return (
    <button className={cn(buttonVariants({ variant, className }))} {...props} />
  );
};
