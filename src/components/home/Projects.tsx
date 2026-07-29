"use client";

import Image from "next/image";
import Container from "../layout/Container";
import SectionHeading from "../shared/SectionHeading";
import AnimatedSection from "../shared/AnimatedSection";
import { gallery } from "@/data/gallery";

export default function Projects() {
  return (
    <AnimatedSection className="py-24 bg-gray-50">
      <Container>
        <SectionHeading
          title="Recent Projects"
          subtitle="A glimpse of some of our completed painting projects."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((project) => (
            <div
              key={project.id}
              className="group overflow-hidden rounded-2xl"
            >
              <div className="relative h-80">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              <div className="bg-white p-5">
                <h3 className="font-bold text-lg">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-500">
                  {project.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </AnimatedSection>
  );
}