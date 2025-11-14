import { IconPlus } from "@tabler/icons-react";

import { Box } from "@/components/ui/box";
import { SectionHeader } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

export const FAQ = () => {
  return (
    <div className="border-secondary-15 border-b">
      <SectionHeader
        title="Frequently Asked Questions"
        description="Still you have any questions? Contact our Team via hello@squareup.com"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <FAQItem
          index={1}
          question="What services does SquareUp provide?"
          answer="SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."
          className="border-secondary-15 border-r border-b"
        />
        <FAQItem
          index={2}
          question="How can SquareUp help my business?"
          answer="SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."
          className="border-secondary-15 border-b"
        />
        <FAQItem
          index={3}
          question="What industries does SquareUp work with?"
          answer="SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."
          className="border-secondary-15 border-r border-b"
        />
        <FAQItem
          index={4}
          question="How long does it take to complete a project with SquareUp?"
          answer="SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."
          className="border-secondary-15 border-r border-b"
        />
        <FAQItem
          index={5}
          question="Do you offer ongoing support and maintenance after the project is completed?"
          answer="SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."
          className="border-secondary-15 border-r border-b"
        />
        <FAQItem
          index={6}
          question="Can you work with existing design or development frameworks?"
          answer="SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."
          className="border-secondary-15 border-r border-b"
        />
        <FAQItem
          index={7}
          question="How involved will I be in the project development process?"
          answer="SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."
          className="border-secondary-15 border-r"
        />
        <FAQItem
          index={8}
          question="Can you help with website or app maintenance and updates?"
          answer="SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."
        />
      </div>
    </div>
  );
};

const FAQItem = ({
  index,
  question,
  answer,
  className,
}: {
  index: number;
  question: string;
  answer: string;
  className?: string;
}) => {
  return (
    <div className={cn("p-12", className)}>
      <details className="group">
        <summary className="group-open:text-primary-50 cursor-default list-none">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Box>
                <span className="text-primary-50 text-lg">{index}</span>
              </Box>
              <h4 className="text-secondary-90 group-open:text-primary-50 cursor-pointer text-lg font-semibold">
                {question}
              </h4>
            </div>
            <IconPlus className="size-5 transition-transform duration-300 group-open:rotate-45" />
          </div>
        </summary>
        <p className="text-secondary-90 mt-4 text-sm leading-relaxed">
          {answer}
        </p>
      </details>
    </div>
  );
};
