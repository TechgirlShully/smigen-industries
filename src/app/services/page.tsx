import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Interior Painting",
    image: "/images/services/interior.jpg",
    description:
      "Refresh your living spaces with smooth, clean, and long-lasting interior finishes.",
    benefits: [
      "Premium paint products",
      "Smooth wall finishing",
      "Neat and clean workmanship",
    ],
  },
  {
    title: "Exterior Painting",
    image: "/images/services/exterior.jpg",
    description:
      "Protect and beautify your property's exterior with durable weather-resistant coatings.",
    benefits: [
      "Weather protection",
      "UV-resistant finishes",
      "Long-lasting beauty",
    ],
  },
  {
    title: "Commercial Painting",
    image: "/images/services/commercial.jpg",
    description:
      "Professional painting solutions for offices, schools, hotels, and commercial buildings.",
    benefits: [
      "Minimal business disruption",
      "Fast project completion",
      "Professional finish",
    ],
  },
  {
    title: "House Scraping & Surface Preparation",
    image: "/images/services/scraping.jpg",
    description:
      "Proper preparation ensures a flawless finish and improves paint durability.",
    benefits: [
      "Paint removal",
      "Wall repairs",
      "Surface smoothing",
    ],
  },
];
export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className="pt-28">
        {/* Hero */}
        <section className="bg-[#1E3A8A] py-20 text-white">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <h1 className="text-5xl font-bold">
              Our Services
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-200">
              We provide reliable residential, commercial and industrial
              painting services with quality workmanship and attention to
              detail.
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="mx-auto max-w-7xl space-y-24 px-6 py-20">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`grid items-center gap-12 lg:grid-cols-2 ${
                index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative h-[400px] overflow-hidden rounded-2xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h2 className="text-4xl font-bold text-[#1E3A8A]">
                  {service.title}
                </h2>

                <p className="mt-6 leading-8 text-gray-600">
                  {service.description}
                </p>

                <ul className="mt-8 space-y-3">
                  {service.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-center gap-3"
                    >
                      <span className="h-2 w-2 rounded-full bg-orange-500" />
                      {benefit}
                    </li>
                  ))}
                </ul>

                <Button
  
  className="mt-10 bg-orange-500 hover:bg-orange-600"
>
  <a
    href="https://wa.me/2349036486524?text=Hello%20Smigen%20Industries,%20I'm%20interested%20in%20your%20painting%20services."
    target="_blank"
    rel="noopener noreferrer"
  >
    Contact Us
  </a>
</Button>
              </div>
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}