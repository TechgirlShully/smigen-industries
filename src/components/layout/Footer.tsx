import Link from "next/link";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="bg-[#1E3A8A] py-12 text-white">
      <Container>
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h2 className="mb-4 text-2xl font-bold">
              Smigen Industries
            </h2>

            <p className="text-gray-300">
              Professional painting services for residential,
              commercial, and industrial properties.
            </p>
          </div>

          <div>
            <h3 className="mb-3 font-semibold">
              Quick Links
            </h3>

            <div className="space-y-2">
              <Link href="/">Home</Link>

              <br />

              <Link href="/about">About</Link>

              <br />

              <Link href="/services">Services</Link>

              <br />

              <Link href="/gallery">Gallery</Link>

              <br />

              <Link href="/contact">Contact</Link>
            </div>
          </div>

          <div>
            <h3 className="mb-3 font-semibold">
              Contact
            </h3>

            <p>Phone: +234 903 648 6524</p>

            <p>Email: smigenindustries@gmail.com</p>

            <p>Lagos, Nigeria</p>
          </div>
        </div>

        <div className="mt-12 border-t border-white/20 pt-6 text-center text-sm">
          © {new Date().getFullYear()} Smigen Industries.
          All rights reserved.
        </div>
      </Container>
    </footer>
  );
}