import Image from "next/image";

const clients = [
  {
    name: "Zoom",
    image: "/clients/zoom.svg",
  },
  {
    name: "Slack",
    image: "/clients/slack.svg",
  },
  {
    name: "Amazon",
    image: "/clients/amazon.svg",
  },
  {
    name: "Adobe",
    image: "/clients/adobe.svg",
  },
  {
    name: "Spotify",
    image: "/clients/spotify.svg",
  },
  {
    name: "Zapier",
    image: "/clients/zapier.svg",
  },
];

export const Clients = () => {
  return (
    <section className="border-secondary-15 relative border-b py-12">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 backdrop-blur-sm">
        <div className="border-secondary-15 rounded-full border px-4 py-2 text-sm max-md:text-xs">
          Trusted by 250+ Companies
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8 lg:grid-cols-6 lg:gap-4">
        {clients.map((client) => (
          <div key={client.name} className="flex items-center justify-center">
            <Image
              src={client.image}
              alt={client.name}
              width={100}
              height={100}
              className="h-10 w-auto"
              draggable={false}
              priority
            />
          </div>
        ))}
      </div>
    </section>
  );
};
