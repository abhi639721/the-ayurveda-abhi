import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";
import { WhyUs } from "@/components/WhyUs";
import { Ingredients } from "@/components/Ingredients";
import { Testimonials } from "@/components/Testimonials";
import { Categories } from "@/components/Categories";
import { About } from "@/components/About";
import { Highlight } from "@/components/Highlight";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Loader } from "@/components/Loader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Ayurveda — Ancient Ayurveda. Modern Wellness." },
      { name: "description", content: "Premium Ayurvedic herbal oils, skincare, supplements and wellness teas — handcrafted from pure botanicals." },
      { property: "og:title", content: "The Ayurveda — Ancient Ayurveda. Modern Wellness." },
      { property: "og:description", content: "Premium Ayurvedic rituals, crafted from earth." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative overflow-x-hidden">
      <Loader />
      <Navbar />
      <Hero />
      <Products />
      <WhyUs />
      <Ingredients />
      <Highlight />
      <Categories />
      <About />
      <Testimonials />
      <Faq />
      <Footer />
    </main>
  );
}
