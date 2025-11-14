import { ContactForm } from "@/components/sections/contact-form";
import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import { Pattern } from "@/components/ui/pattern";
import { SectionDescription, SectionTitle } from "@/components/ui/typography";

export const Contact = () => {
  return (
    <div>
      <div className="border-secondary-15 relative border-b py-20">
        <Pattern />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <Logo />
          <SectionTitle
            text="Thank you for your Interest in SquareUp."
            className="mt-4"
          />
          <SectionDescription text="We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us." />
          <Button variant="primary" className="mt-4">
            Start Project
          </Button>
        </div>
      </div>
      <ContactForm />
    </div>
  );
};
