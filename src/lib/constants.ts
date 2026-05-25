export const SITE_NAME = "Prestige India Holidays";
export const SITE_TAGLINE = "Discover India, Your Way";
export const SITE_DESCRIPTION =
  "Premium India tour packages — Taj Mahal, Golden Triangle, Royal Rajasthan & more. 7+ years of crafting unforgettable experiences.";

export const CONTACT = {
  phone: "+917078644407",
  phoneDisplay: "+91 70786 44407",
  whatsapp: "917078644407",
  email: "info@prestigeindiaholidays.com",
  address: "M.I.G 175 Shaheed Nagar, Agra - 282001, India",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3549.4!2d78.0!3d27.18!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDEwJzQ4LjAiTiA3OMKwMDAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1",
};

export const SOCIAL = {
  facebook: "https://facebook.com/theimperialtour",
  instagram: "https://instagram.com/theimperialtours",
  youtube: "https://youtube.com/@TheImperialTours",
  tripadvisor: "https://tripadvisor.com",
};

export const WHATSAPP_BASE_URL = `https://wa.me/${CONTACT.whatsapp}`;

export function getWhatsAppLink(tourName: string): string {
  const message = encodeURIComponent(
    `Hi Fardeen, I'm interested in the "${tourName}" tour. Could you share more details?`
  );
  return `${WHATSAPP_BASE_URL}?text=${message}`;
}

export interface CarBookingDetails {
  vehicle: string;
  category?: string;
  days?: string;
  pickupDate?: string;
  location?: string;
  name?: string;
  phone?: string;
  notes?: string;
}

// Builds a pre-filled WhatsApp booking request so Fardeen can see the vehicle,
// trip length and contact details at a glance, then reply with a quote.
export function getWhatsAppBookingLink(d: CarBookingDetails): string {
  const lines = [
    `New booking enquiry — ${SITE_NAME}`,
    "",
    `Vehicle: ${d.vehicle}${d.category ? ` (${d.category})` : ""}`,
    d.days ? `Number of days: ${d.days}` : "",
    d.pickupDate ? `Pickup date: ${d.pickupDate}` : "",
    d.location ? `Pickup / route: ${d.location}` : "",
    d.name ? `Name: ${d.name}` : "",
    d.phone ? `Phone: ${d.phone}` : "",
    d.notes ? `Notes: ${d.notes}` : "",
    "",
    "Please share your best quote.",
  ].filter(Boolean);
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(lines.join("\n"))}`;
}

export function getWhatsAppGenericLink(): string {
  const message = encodeURIComponent(
    `Hi Fardeen, I'd like to know more about your tour packages.`
  );
  return `${WHATSAPP_BASE_URL}?text=${message}`;
}

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Tours", href: "/tours" },
  { label: "Car Rentals", href: "/car-rentals" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

export const STATS = [
  { value: "7+", label: "Years Experience" },
  { value: "500+", label: "Happy Travelers" },
  { value: "50+", label: "Tour Packages" },
  { value: "24/7", label: "Customer Support" },
];
