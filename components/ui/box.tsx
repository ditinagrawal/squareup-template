import { cn } from "@/lib/utils";

export const Box = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "border-secondary-15 from-secondary-15 to-secondary-10 flex size-10 items-center justify-center rounded-sm border bg-linear-to-b mask-b-from-50%",
        className,
      )}
    >
      {children}
    </div>
  );
};
