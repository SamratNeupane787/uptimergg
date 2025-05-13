import Image from "next/image";
import Hero from "@/components/Hero";
import { FeaturesSectionDemo } from "@/components/Feature";
import PricingSection from "@/components/Pricing";
export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturesSectionDemo />
      <PricingSection/>
    </div>
  );
}
