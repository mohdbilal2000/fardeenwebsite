"use client";

import { MessageCircle } from "lucide-react";
import { getWhatsAppGenericLink } from "@/lib/constants";

export default function WhatsAppWidget() {
  return (
    <a
      href={getWhatsAppGenericLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white p-3 sm:px-4 sm:py-3 rounded-full shadow-lg shadow-green-500/25 transition-all hover:scale-105"
    >
      <MessageCircle className="w-5 h-5 sm:w-5 sm:h-5" />
      <span className="text-sm font-medium hidden md:inline">Chat with us</span>
    </a>
  );
}
