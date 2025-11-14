import { IconBrush, IconChartBar, IconCode } from "@tabler/icons-react";

import { Box } from "@/components/ui/box";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/typography";

export const Services = () => {
  return (
    <div className="">
      <SectionHeader
        title="Our Services"
        description="Transform your brand with our innovative digital solutions that captivate and engage your audience."
      />
      <div className="divide-secondary-15 grid grid-cols-1 divide-x lg:grid-cols-3">
        <ServiceCard
          title="Design"
          description="At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences."
          icon={IconBrush}
        />
        <ServiceCard
          title="Development"
          description="Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs."
          icon={IconCode}
        />
        <ServiceCard
          title="Project Management"
          description="Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process."
          icon={IconChartBar}
        />
      </div>
    </div>
  );
};

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
}

const ServiceCard = ({ title, description, icon: Icon }: ServiceCardProps) => {
  return (
    <div className="flex h-full flex-col p-12">
      <div className="flex flex-1 flex-col space-y-6">
        <Box className="size-12">
          <Icon className="text-primary-50 fill-primary-50 size-6" />
        </Box>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-secondary-90 flex-1 text-sm leading-relaxed">
          {description}
        </p>
        <div className="pt-8">
          <Button variant="secondary" className="w-full">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};
