"use client";

import { useState } from "react";
import { MessageCircle, ShieldCheck } from "lucide-react";
import { getWhatsAppBookingLink } from "@/lib/constants";

export default function CarBookingForm({
  vehicleName,
  categoryLabel,
}: {
  vehicleName: string;
  categoryLabel: string;
}) {
  const [days, setDays] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [location, setLocation] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const url = getWhatsAppBookingLink({
      vehicle: vehicleName,
      category: categoryLabel,
      days,
      pickupDate,
      location,
      name,
      phone,
      notes,
    });
    window.open(url, "_blank", "noopener,noreferrer");
  }

  const fieldClass =
    "w-full rounded-xl border border-gray-200 bg-white px-3.5 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-brand focus:ring-2 focus:ring-brand/30 focus:outline-none transition";

  return (
    <form onSubmit={handleSubmit} className="space-y-3.5">
      <div>
        <label className="block text-xs font-semibold text-gray-500 mb-1.5">
          Vehicle
        </label>
        <input
          type="text"
          value={vehicleName}
          readOnly
          className="w-full rounded-xl border border-brand/20 bg-brand-light px-3.5 py-2.5 text-sm font-semibold text-brand-dark"
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1.5">
            Number of days
          </label>
          <input
            type="number"
            min={1}
            inputMode="numeric"
            value={days}
            onChange={(e) => setDays(e.target.value)}
            placeholder="e.g. 3"
            className={fieldClass}
            required
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1.5">
            Pickup date
          </label>
          <input
            type="date"
            value={pickupDate}
            onChange={(e) => setPickupDate(e.target.value)}
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-500 mb-1.5">
          Pickup location / route
        </label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="e.g. Delhi Airport → Agra"
          className={fieldClass}
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1.5">
            Your name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full name"
            className={fieldClass}
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1.5">
            Phone
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="With country code"
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-500 mb-1.5">
          Notes <span className="font-normal text-gray-400">(optional)</span>
        </label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={2}
          placeholder="Anything else we should know?"
          className={fieldClass}
        />
      </div>

      <button
        type="submit"
        className="flex items-center justify-center gap-2 w-full bg-brand hover:bg-brand-dark text-white font-semibold py-4 rounded-full transition-all hover:shadow-lg hover:shadow-brand/25"
      >
        <MessageCircle className="w-5 h-5" />
        Send Booking Request on WhatsApp
      </button>

      <p className="flex items-center justify-center gap-1.5 text-xs text-gray-500">
        <ShieldCheck className="w-3.5 h-3.5 text-brand" />
        Every car comes with a private professional chauffeur.
      </p>
    </form>
  );
}
