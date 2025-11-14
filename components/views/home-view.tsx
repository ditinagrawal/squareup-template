import { Clients } from "@/components/sections/clients";
import { Hero } from "@/components/sections/hero";
import { Footer } from "@/components/shared/footer";
import { Navbar } from "@/components/shared/navbar";
import { Container } from "@/components/ui/container";

export const HomeView = () => {
  return (
    <div>
      <Navbar />
      <Container className="border-secondary-15 border-x">
        <Hero />
        <Clients />
      </Container>
      <Footer />
    </div>
  );
};
