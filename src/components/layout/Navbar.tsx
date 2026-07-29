"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import Container from "./Container";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <Container className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Smigen Industries"
            width={45}
            height={45}
            priority
          />

          <div>
            <h1
              className={`text-xl font-bold ${
                scrolled ? "text-[#1E3A8A]" : "text-white"
              }`}
            >
              Smigen
            </h1>

            <p
              className={`text-xs uppercase tracking-[0.25em] ${
                scrolled ? "text-gray-500" : "text-gray-200"
              }`}
            >
              Industries
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition ${
                  active
                    ? "text-orange-500"
                    : scrolled
                    ? "text-gray-700 hover:text-orange-500"
                    : "text-white hover:text-orange-300"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Button */}
        <div className="hidden lg:block">
          <Button
  
  className="bg-orange-500 hover:bg-orange-600"
>
  <a
    href="https://wa.me/2349036486524?text=Hello%20Smigen%20Industries,%20I%20would%20like%20to%20request%20a%20painting%20quote."
    target="_blank"
    rel="noopener noreferrer"
  >
    Get Free Quote
  </a>
</Button>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className={`transition ${
                scrolled ? "text-[#1E3A8A]" : "text-white"
              }`}
            >
              <Menu className="h-8 w-8" />
            </SheetTrigger>

            <SheetContent side="right" className="w-[300px] p-0">
              <div className="flex h-full flex-col">

                {/* Logo */}
                <div className="border-b p-6">
                  <Link
                    href="/"
                    className="flex items-center gap-3"
                    onClick={() => setOpen(false)}
                  >
                    <Image
                      src="/logo.png"
                      alt="Smigen Industries"
                      width={40}
                      height={40}
                    />

                    <div>
                      <h2 className="font-bold text-[#1E3A8A]">
                        Smigen
                      </h2>

                      <p className="text-xs uppercase tracking-widest text-gray-500">
                        Industries
                      </p>
                    </div>
                  </Link>
                </div>

                {/* Links */}
                <nav className="flex flex-col gap-2 p-6">
                  {navLinks.map((link) => {
                    const active = pathname === link.href;

                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={`rounded-lg px-4 py-3 font-medium transition ${
                          active
                            ? "bg-orange-100 text-orange-600"
                            : "hover:bg-gray-100"
                        }`}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </nav>

                {/* Button */}
                <div className="mt-auto p-6">
                  <Button
  
  className="w-full bg-orange-500 hover:bg-orange-600"
>
  <a
    href="https://wa.me/2349036486524?text=Hello%20Smigen%20Industries,%20I%20would%20like%20to%20request%20a%20painting%20quote."
    target="_blank"
    rel="noopener noreferrer"
    onClick={() => setOpen(false)}
  >
    Get Free Quote
  </a>
</Button>
                </div>

              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
}