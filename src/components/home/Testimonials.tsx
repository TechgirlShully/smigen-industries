"use client";

import { Star } from "lucide-react";
import AnimatedSection from "../shared/AnimatedSection";
import Container from "../layout/Container";
import SectionHeading from "../shared/SectionHeading";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <AnimatedSection className="py-24">
      <Container>
        <SectionHeading
          title="What Our Clients Say"
          subtitle="We're proud of the trust our customers place in us."
        />

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border bg-white p-8 shadow-sm"
            >
              <div className="mb-5 flex gap-1 text-[#F97316]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={18} fill="currentColor" />
                ))}
              </div>

              <p className="mb-6 text-gray-600">
                "{item.review}"
              </p>

              <h4 className="font-semibold">
                {item.name}
              </h4>
            </div>
          ))}
        </div>
      </Container>
    </AnimatedSection>
  );
}