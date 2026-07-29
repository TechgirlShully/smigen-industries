import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="pt-28">
        {/* Hero */}
        <section className="bg-[#1E3A8A] py-20 text-white">
          <div className="mx-auto max-w-7xl px-6">
            <h1 className="text-5xl font-bold">About Smigen Industries</h1>
            <p className="mt-4 max-w-3xl text-lg text-gray-200">
              Delivering quality painting solutions for residential,
              commercial and industrial properties with professionalism,
              precision and excellence.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="mx-auto grid max-w-7xl gap-16 px-6 py-20 lg:grid-cols-2">
          <div className="relative h-[500px] overflow-hidden rounded-2xl">
            <Image
              src="/images/about.jpg"
              alt="About Smigen Industries"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold text-[#1E3A8A]">
              Our Story
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              Smigen Industries is committed to transforming homes,
              offices and commercial spaces through premium painting
              solutions. Our team combines skilled craftsmanship,
              attention to detail and quality materials to deliver
              beautiful, long-lasting finishes.
            </p>

            <div className="mt-10 grid gap-6">
              <div>
                <h3 className="font-bold text-xl text-[#1E3A8A]">
                  Mission
                </h3>

                <p className="mt-2 text-gray-600">
                  To provide exceptional painting services that exceed
                  customer expectations.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-xl text-[#1E3A8A]">
                  Vision
                </h3>

                <p className="mt-2 text-gray-600">
                  To become one of Nigeria's most trusted painting
                  companies.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-xl text-[#1E3A8A]">
                  Core Values
                </h3>

                <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-600">
                  <li>Integrity</li>
                  <li>Quality Workmanship</li>
                  <li>Professionalism</li>
                  <li>Customer Satisfaction</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}