"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
} from "lucide-react";
import { CONTACT, SOCIAL, WHATSAPP_BASE_URL } from "@/lib/constants";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hi Fardeen, my name is ${name}. ${message}`
    );
    window.open(`${WHATSAPP_BASE_URL}?text=${text}`, "_blank");
  }

  return (
    <>
      <section className="bg-gradient-to-b from-teal-50 to-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
          <p className="mt-3 text-lg text-gray-500 max-w-2xl">
            Have questions or ready to book? Reach out and we&apos;ll get back
            to you right away.
          </p>
        </div>
      </section>

      <section className="py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send us a message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-colors resize-none"
                    placeholder="I'd like to know about your Golden Triangle tour..."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-xl transition-colors"
                >
                  <Send className="w-4 h-4" />
                  Send via WhatsApp
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-gray-900">Get in Touch</h2>

              <div className="space-y-5">
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-teal-100 transition-colors">
                    <Phone className="w-5 h-5 text-teal-700" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Phone / WhatsApp</p>
                    <p className="text-sm text-gray-500">
                      {CONTACT.phoneDisplay}
                    </p>
                  </div>
                </a>

                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-teal-100 transition-colors">
                    <Mail className="w-5 h-5 text-teal-700" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-sm text-gray-500">{CONTACT.email}</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-teal-700" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Office</p>
                    <p className="text-sm text-gray-500">{CONTACT.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 text-teal-700" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">WhatsApp</p>
                    <a
                      href={`${WHATSAPP_BASE_URL}?text=${encodeURIComponent("Hi Fardeen!")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-green-600 hover:text-green-700 font-medium"
                    >
                      Chat with us instantly
                    </a>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div>
                <p className="font-medium text-gray-900 mb-3">Follow Us</p>
                <div className="flex gap-3">
                  <a
                    href={SOCIAL.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 rounded-xl bg-gray-50 hover:bg-teal-50 transition-colors text-sm font-medium text-gray-600"
                  >
                    Facebook
                  </a>
                  <a
                    href={SOCIAL.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 rounded-xl bg-gray-50 hover:bg-teal-50 transition-colors text-sm font-medium text-gray-600"
                  >
                    Instagram
                  </a>
                  <a
                    href={SOCIAL.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 rounded-xl bg-gray-50 hover:bg-teal-50 transition-colors text-sm font-medium text-gray-600"
                  >
                    YouTube
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="bg-gray-100 rounded-2xl h-60 flex items-center justify-center">
                <p className="text-gray-400 text-sm">
                  Map: Agra, Uttar Pradesh, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
