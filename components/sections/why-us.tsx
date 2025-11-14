import {
  IconHeartHandshake,
  IconMedal,
  IconShield,
  IconUsersGroup,
} from "@tabler/icons-react";

import { Box } from "@/components/ui/box";
import { SectionHeader } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

export const WhyUs = () => {
  return (
    <div className="border-secondary-15 border-b">
      <SectionHeader
        title="Why Choose SquareUp?"
        description="Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results."
      />
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <WhyUsCard
          className="border-secondary-15 border-r border-b"
          icon={IconMedal}
          title="Expertise"
          description="Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions."
        />
        <WhyUsCard
          className="border-secondary-15 border-b"
          icon={IconUsersGroup}
          title="Client-Centric Approach"
          description="We prioritize our clients and their unique needs. We listen to your ideas, challenges, and goals, and tailor our services to meet your specific requirements. Your success is our success."
        />
        <WhyUsCard
          className="border-secondary-15 border-r"
          icon={IconShield}
          title="Results-Driven Solutions"
          description="Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth, enhance user experiences, and provide a competitive advantage."
        />
        <WhyUsCard
          icon={IconHeartHandshake}
          title="Collaborative Partnership"
          description="We value long-term relationships with our clients. We see ourselves as your digital partner, providing ongoing support, maintenance, and updates to ensure your digital products continue to thrive."
        />
      </div>
    </div>
  );
};

interface WhyUsCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  className?: string;
}

const WhyUsCard = ({
  icon: Icon,
  title,
  description,
  className,
}: WhyUsCardProps) => {
  return (
    <div className={cn("p-12", className)}>
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Box className="size-12">
            <Icon className="text-primary-50 fill-primary-50 size-6" />
          </Box>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="text-secondary-90 max-w-md flex-1 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};
