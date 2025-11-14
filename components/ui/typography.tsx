import { Pattern } from "@/components/ui/pattern";
import { cn } from "@/lib/utils";

export const SectionTitle = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return <h2 className={cn("text-4xl font-bold", className)}>{text}</h2>;
};

export const SectionDescription = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <p className={cn("text-secondary-90 mx-auto max-w-2xl text-sm", className)}>
      {text}
    </p>
  );
};

export const SectionHeader = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="border-secondary-15 relative border-b py-20">
      <Pattern />
      <div className="space-y-2 text-center">
        <SectionTitle text={title} />
        <SectionDescription text={description} />
      </div>
    </div>
  );
};
