"use client";

import Image from "next/image";

import {
  Home,
  Building2,
  Paintbrush,
  Droplets,
} from "lucide-react";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import Container from "../layout/Container";
import SectionHeading from "../shared/SectionHeading";
import AnimatedSection from "../shared/AnimatedSection";

const services = [
  {
    title: "Interior Painting",
    icon: Home,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200",
  },
  {
    title: "Exterior Painting",
    icon: Building2,
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200",
  },
  {
    title: "Decorative Finishes",
    icon: Paintbrush,
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1200",
  },
  {
    title: "Waterproof Coating",
    icon: Droplets,
    image:
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=1200",
  },
];

export default function Services() {
  return (
    <AnimatedSection className="bg-gray-50 py-24">
      <Container>
        <SectionHeading
          title="Our Services"
          subtitle="Professional painting services tailored to your needs."
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Card
                key={service.title}
                className="overflow-hidden transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative h-56">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <CardContent className="p-6">
                  <Icon className="mb-4 text-[#F97316]" size={34} />

                  <h3 className="mb-3 text-xl font-bold">
                    {service.title}
                  </h3>

                  <p className="text-gray-600">
                    High-quality workmanship using premium materials for
                    beautiful, long-lasting results.
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    </AnimatedSection>
  );
}