"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
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

const whatsappLink =
  "https://wa.me/2349036486524?text=Hello%20Smigen%20Industries,%20I%20would%20like%20to%20request%20a%20painting%20quote.";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b bg-white/95 py-3 shadow-md backdrop-blur-md">
      <Container className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Smigen Industries"
            width={60}
            height={60}
            priority
          />

          <div>
            <h1 className="text-xl font-bold text-[#1E3A8A]">
              Smigen
            </h1>

            <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
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
                className={`font-medium transition-colors ${
                  active
                    ? "text-orange-500"
                    : "text-gray-700 hover:text-orange-500"
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
              href={whatsappLink}
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
            <SheetTrigger className="text-[#1E3A8A]">
              <Menu className="h-8 w-8" />
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[300px] border-l bg-white p-0 shadow-2xl"
            >
              <div className="flex h-full flex-col">

                {/* Header */}
                <div className="border-b p-6">
                  <Link
                    href="/"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3"
                  >
                    <Image
                      src="/logo.png"
                      alt="Smigen Industries"
                      width={55}
                      height={55}
                    />

                    <div>
                      <h2 className="text-xl font-bold text-[#1E3A8A]">
                        Smigen
                      </h2>

                      <p className="text-xs uppercase tracking-widest text-gray-500">
                        Industries
                      </p>
                    </div>
                  </Link>
                </div>

                {/* Navigation */}
                <nav className="space-y-2 p-6">
                  {navLinks.map((link) => {
                    const active = pathname === link.href;

                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={`block rounded-lg px-4 py-3 font-medium transition ${
                          active
                            ? "bg-orange-50 text-orange-500"
                            : "text-gray-700 hover:bg-gray-100 hover:text-orange-500"
                        }`}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </nav>

                {/* WhatsApp Button */}
                <div className="mt-auto p-6">
                  <Button
                    
                    className="w-full bg-orange-500 hover:bg-orange-600"
                  >
                    <a
                      href={whatsappLink}
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