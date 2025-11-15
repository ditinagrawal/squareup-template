import { Button } from "@/components/ui/button";

export const ContactForm = () => {
  return (
    <div className="border-secondary-15 mx-auto max-w-3xl border-x">
      <form className="space-y-6 p-12">
        <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:justify-between">
          <InputField label="Name" name="name" type="text" />
          <InputField label="Email" name="email" type="email" />
        </div>
        <div className="border-secondary-15 bg-secondary-20/20 w-full space-y-6 rounded border p-4">
          <h4 className="font-medium">Why are you contacting us?</h4>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="web-design"
                name="Web Design"
                value="web-design"
                className="border-secondary-20 checked:bg-primary-50 size-5 appearance-none rounded-sm border"
              />
              <label htmlFor="web-design">Web Design</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="collaboration"
                name="Collaboration"
                value="collaboration"
                className="border-secondary-20 checked:bg-primary-50 size-5 appearance-none rounded-sm border"
              />
              <label htmlFor="collaboration">Collaboration</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="mobile-app-development"
                name="Mobile App Development"
                value="mobile-app-development"
                className="border-secondary-20 checked:bg-primary-50 size-5 appearance-none rounded-sm border"
              />
              <label htmlFor="mobile-app-development">
                Mobile App Development
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="others"
                name="Others"
                value="others"
                className="border-secondary-20 checked:bg-primary-50 size-5 appearance-none rounded-sm border"
              />
              <label htmlFor="others">Others</label>
            </div>
          </div>
        </div>
        <div className="border-secondary-15 bg-secondary-20/20 w-full space-y-6 rounded border p-4">
          <div className="flex flex-col gap-2">
            <h4 className="font-medium">Your Budget</h4>
            <p>Slide to indicate your budget range</p>
          </div>
          <div className="space-y-4">
            <input
              type="range"
              id="budget"
              name="budget"
              min="0"
              max="100"
              defaultValue="10"
              className="bg-secondary-15 accent-primary-50 h-px w-full cursor-pointer appearance-none rounded-lg"
            />
            <div className="text-secondary-60 flex justify-between text-sm">
              <span>$1000</span>
              <span>$10k+</span>
            </div>
          </div>
        </div>
        <div className="border-secondary-15 bg-secondary-20/20 w-full space-y-6 rounded border p-4">
          <div className="flex flex-col gap-4">
            <label htmlFor="message" className="font-medium">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Type Here"
              className="resize-none outline-none"
              autoComplete="off"
              required
            />
          </div>
        </div>
        <div className="flex justify-center">
          <Button variant="primary">Submit</Button>
        </div>
      </form>
    </div>
  );
};

const InputField = ({
  label,
  name,
  type,
}: {
  label: string;
  name: string;
  type: string;
}) => {
  return (
    <div className="border-secondary-15 bg-secondary-20/20 w-full rounded border p-4">
      <div className="flex flex-col gap-4">
        <label htmlFor={name} className="font-medium">
          {label}
        </label>
        <input
          type={type}
          id={name}
          name={name}
          placeholder="Type Here"
          className="outline-none"
          autoComplete="off"
          required
        />
      </div>
    </div>
  );
};
