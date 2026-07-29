"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

import Container from "../layout/Container";
import SectionHeading from "../shared/SectionHeading";
import AnimatedSection from "../shared/AnimatedSection";

const features = [
  "Experienced & Skilled Painters",
  "Premium Quality Paints",
  "Affordable Pricing",
  "Residential & Commercial Projects",
  "Neat Workmanship",
  "100% Customer Satisfaction",
];

export default function About() {
  return (
    <AnimatedSection className="py-24 bg-white">
      <Container>
        <SectionHeading
          title="About Smigen Industries"
          subtitle="We deliver premium painting solutions that transform homes, offices, and commercial buildings with exceptional craftsmanship."
        />

        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative h-[500px] overflow-hidden rounded-3xl">
            <Image
              src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1200"
              alt="Professional painter"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h3 className="mb-6 text-3xl font-bold text-[#1E3A8A]">
              Painting Excellence You Can Always Trust 
            </h3>

            <p className="mb-8 text-lg leading-8 text-gray-600">
              Smigen Industries specializes in interior and exterior painting,
              decorative finishes, waterproof coatings, wall preparation, and
              complete painting solutions for residential, commercial, and
              industrial properties.
            </p>

            <div className="grid gap-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle2 className="text-[#F97316]" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
}