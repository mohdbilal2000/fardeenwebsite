"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { CONTACT, SOCIAL, WHATSAPP_BASE_URL } from "@/lib/constants";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = encodeURIComponent(`Hi Fardeen, my name is ${name}. ${message}`);
    window.open(`${WHATSAPP_BASE_URL}?text=${text}`, "_blank");
  }

  return (
    <>
      <section className="bg-gray-950 pt-28 sm:pt-32 pb-14 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-line">
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Contact Us
            </h1>
          </div>
          <p className="mt-3 text-base sm:text-lg text-gray-400 max-w-xl">
            Have questions or ready to book? Reach out and we&apos;ll get back
            to you right away.
          </p>
        </div>
      </section>

      <section className="py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Form */}
            <div>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                Send us a message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all text-sm"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    Your Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all resize-none text-sm"
                    placeholder="I'd like to know about your Golden Triangle tour..."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-semibold px-6 py-3.5 rounded-full transition-all hover:shadow-lg"
                >
                  <Send className="w-4 h-4" />
                  Send via WhatsApp
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-gray-900">
                Get in Touch
              </h2>

              <div className="space-y-4">
                {[
                  { icon: Phone, title: "Phone / WhatsApp", value: CONTACT.phoneDisplay, href: `tel:${CONTACT.phone}` },
                  { icon: Mail, title: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
                  { icon: MapPin, title: "Office", value: CONTACT.address, href: undefined },
                  { icon: MessageCircle, title: "WhatsApp", value: "Chat with us instantly", href: `${WHATSAPP_BASE_URL}?text=${encodeURIComponent("Hi Fardeen!")}` },
                ].map((item) => {
                  const Wrapper = item.href ? "a" : "div";
                  const linkProps = item.href ? { href: item.href, target: item.href.startsWith("https") ? "_blank" as const : undefined, rel: item.href.startsWith("https") ? "noopener noreferrer" : undefined } : {};
                  return (
                    <Wrapper
                      key={item.title}
                      {...linkProps}
                      className="flex items-start gap-4 p-4 rounded-xl bg-gray-50/80 hover:bg-gray-100/80 transition-colors group border border-gray-100/50"
                    >
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shrink-0 shadow-sm border border-gray-100">
                        <item.icon className="w-5 h-5 text-gray-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{item.title}</p>
                        <p className={`text-sm mt-0.5 ${item.href?.startsWith("https") ? "text-teal-600 font-medium" : "text-gray-500"}`}>
                          {item.value}
                        </p>
                      </div>
                    </Wrapper>
                  );
                })}
              </div>

              {/* Social */}
              <div>
                <p className="font-semibold text-gray-900 text-sm mb-3">Follow Us</p>
                <div className="flex gap-2">
                  {[
                    { label: "Facebook", href: SOCIAL.facebook },
                    { label: "Instagram", href: SOCIAL.instagram },
                    { label: "YouTube", href: SOCIAL.youtube },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-900 hover:text-white text-sm font-medium text-gray-600 transition-all"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Map placeholder */}
              <div className="bg-gray-100 rounded-2xl h-48 flex items-center justify-center border border-gray-200/50">
                <p className="text-gray-400 text-sm">Agra, Uttar Pradesh, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
