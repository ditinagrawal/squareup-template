import Image from "next/image";

import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

export const Testimonial = () => {
  return (
    <div className="border-secondary-15 border-b">
      <SectionHeader
        title="What our Clients say About us"
        description="At SquareUp, we take pride in delivering exceptional digital products and services that drive success for our clients. Here's what some of our satisfied clients have to say about their experience working with us."
      />
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <TestimonialCard
          title="SquareUp has been Instrumental in Transforming our Online Presence."
          description="Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier."
          image="/users/user-1.png"
          author="John Smith"
          position="CEO at ABC Company"
          className="border-secondary-15 border-r border-b"
        />
        <TestimonialCard
          title="Working with SquareUp was a breeze."
          description="They understood our vision for a mobile app that streamlined our food delivery service. The app they delivered exceeded our expectations, and our customers love the seamless ordering experience. SquareUp is a trusted partner we highly recommend."
          image="/users/user-2.png"
          author="Sarah Johnson"
          position="CEO at XYZ Inc."
          className="border-secondary-15 border-b"
        />
        <TestimonialCard
          title="SquareUp developed a comprehensive booking and reservation system for our event management company"
          description="Their attention to detail and commitment to delivering a user-friendly platform was evident throughout the project. The system has streamlined our operations and enhanced our clients' event experiences."
          image="/users/user-3.png"
          author="Mark Thompson"
          position="CEO at EVT Company"
          className="border-secondary-15 border-r border-b"
        />
        <TestimonialCard
          title="ProTech Solutions turned to SquareUp to automate our workflow"
          description="They delivered an exceptional custom software solution. The system has significantly increased our productivity and reduced manual errors. SquareUp's expertise and professionalism have made them a trusted technology partner."
          image="/users/user-4.png"
          author="Laura Adams"
          position="CEO at ProTech Solutions"
          className="border-secondary-15 border-b"
        />
        <TestimonialCard
          title="SquareUp designed and developed a captivating web portal for showcasing our real estate listings."
          description="The platform is visually appealing and easy to navigate, allowing potential buyers to find their dream homes effortlessly. SquareUp's expertise in the real estate industry is unmatched."
          image="/users/user-5.png"
          author="Michael Lee"
          position="CEO at Real Estate Company"
          className="border-secondary-15 border-r"
        />
        <TestimonialCard
          title="FitLife Tracker wanted a mobile app that tracked fitness activities and provided personalized workout plans."
          description="SquareUp's team developed an intuitive and feature-rich app that has helped our users stay motivated and achieve their fitness goals. We highly recommend SquareUp for any health and fitness app development needs."
          image="/users/user-6.png"
          author="Emily Wilson"
          position="CEO at FitLife Company"
        />
      </div>
    </div>
  );
};

interface TestimonialCardProps {
  title: string;
  description: string;
  image: string;
  author: string;
  position: string;
  className?: string;
}

const TestimonialCard = ({
  title,
  description,
  image,
  author,
  position,
  className,
}: TestimonialCardProps) => {
  return (
    <div className={cn("flex h-full flex-col p-12", className)}>
      <div className="flex flex-1 flex-col space-y-6">
        <h3 className="text-primary-70 min-h-[56px] text-xl font-semibold">
          {title}
        </h3>
        <p className="text-secondary-90 flex-1 text-sm leading-relaxed">
          {description}
        </p>
        <div className="border-secondary-15 mt-6 flex items-center justify-between rounded-md border p-3">
          <div className="flex min-w-0 items-center gap-2">
            <div>
              <Image
                src={image}
                alt={author}
                width={40}
                height={40}
                className="shrink-0 rounded-lg"
              />
            </div>
            <div className="min-w-0">
              <h5 className="text-secondary-90 truncate text-sm font-semibold">
                {author}
              </h5>
              <p className="text-secondary-60 truncate text-xs">{position}</p>
            </div>
          </div>
          <Button variant="secondary">Open Website</Button>
        </div>
      </div>
    </div>
  );
};
