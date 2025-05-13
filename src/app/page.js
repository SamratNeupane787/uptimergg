import Image from "next/image";
import Hero from "@/components/Hero";
import { FeaturesSectionDemo } from "@/components/Feature";
export default function Home() {
  return (
    <div>
    <Hero/>
    <FeaturesSectionDemo/>
    </div>
  );
}
