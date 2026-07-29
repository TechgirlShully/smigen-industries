"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function WhatsappButton() {
  const phone = "2349036486524"; // Replace with Smigen's WhatsApp number

  return (
    <Link
      href={`https://wa.me/${phone}?text=Hello%20Smigen%20Industries.%20I'm%20interested%20in%20your%20painting%20services.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition hover:scale-110 hover:bg-[#1EBE5D]"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-8 w-8" />
    </Link>
  );
}