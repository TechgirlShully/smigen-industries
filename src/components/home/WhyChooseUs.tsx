"use client";

import {
  BadgeCheck,
  Clock3,
  DollarSign,
  Paintbrush,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import Container from "../layout/Container";
import AnimatedSection from "../shared/AnimatedSection";
import SectionHeading from "../shared/SectionHeading";

const reasons = [
  {
    title: "Experienced Professionals",
    icon: BadgeCheck,
  },
  {
    title: "Premium Paints",
    icon: Paintbrush,
  },
  {
    title: "Affordable Pricing",
    icon: DollarSign,
  },
  {
    title: "On-Time Delivery",
    icon: Clock3,
  },
  {
    title: "Neat Workmanship",
    icon: Sparkles,
  },
  {
    title: "Customer Satisfaction",
    icon: ShieldCheck,
  },
];

export default function WhyChooseUs() {
  return (
    <AnimatedSection className="py-24">
      <Container>
        <SectionHeading
          title="Why Choose Smigen Industries"
          subtitle="Our commitment to quality and professionalism makes us the trusted choice for painting projects."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <div
                key={reason.title}
                className="rounded-2xl border bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <Icon
                  size={42}
                  className="mb-5 text-[#F97316]"
                />

                <h3 className="mb-3 text-xl font-semibold">
                  {reason.title}
                </h3>

                <p className="text-gray-600">
                  We deliver exceptional workmanship using
                  premium materials while ensuring every
                  project is completed on schedule.
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </AnimatedSection>
  );
}