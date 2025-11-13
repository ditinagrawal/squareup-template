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
      <Image
        src="/logo.svg"
        alt="BBPixels"
        width={100}
        height={100}
        draggable={false}
        priority
        className={cn("size-10", className)}
      />
      {showText && <span className="text-lg font-semibold">BBPixels</span>}
    </div>
  );
};
