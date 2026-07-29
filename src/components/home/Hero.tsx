"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import Container from "../layout/Container";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      <Container className="relative z-10 pt-28">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur">
            <CheckCircle className="h-4 w-4 text-orange-500" />
            Trusted Residential & Commercial Painters
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-extrabold leading-tight text-white md:text-7xl">
            Transform Your Space with
            <span className="block text-orange-500">
              Professional Painting
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-200">
            Smigen Industries provides premium interior, exterior,
            residential, and commercial painting services with
            exceptional craftsmanship and long-lasting finishes.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Button
              
              size="lg"
              className="bg-orange-500 hover:bg-orange-600"
            >
              <Link href="/contact">
                Get Free Quote
              </Link>
            </Button>

            <Button
              
              size="lg"
              variant="outline"
              className="border-white bg-transparent text-white hover:bg-white hover:text-[#1E3A8A]"
            >
              <Link href="/services">
                Our Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Features */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {[
              "Interior & Exterior Painting",
              "Residential & Commercial Projects",
              "Premium Paint Products",
              "Free Site Inspection & Quote",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 text-white"
              >
                <CheckCircle className="h-5 w-5 text-orange-500" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}