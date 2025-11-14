import Image from "next/image";

import { cn } from "@/lib/utils";

export const Logo = ({
  className,
  showText = false,
}: {
  className?: string;
  showText?: boolean;
}) => {
  return (
    <div className="flex items-center gap-2">
      <div className="bg-primary-50 flex size-12 items-center justify-center rounded-md">
        <Image
          src="/logo.svg"
          alt="SquareUp"
          width={100}
          height={100}
          draggable={false}
          priority
          className={cn("size-8", className)}
        />
      </div>
      {showText && <span className="text-lg font-semibold">SquareUp</span>}
    </div>
  );
};
