export const SITE_NAME = "Fardeen Tours";
export const SITE_TAGLINE = "Discover India, Your Way";
export const SITE_DESCRIPTION =
  "Premium India tour packages — Taj Mahal, Golden Triangle, Royal Rajasthan & more. 7+ years of crafting unforgettable experiences.";

export const CONTACT = {
  phone: "+917078644407",
  phoneDisplay: "+91 70786 44407",
  whatsapp: "917078644407",
  email: "info@theimperialtours.com",
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

export function getWhatsAppCarLink(carName: string, route: string): string {
  const message = encodeURIComponent(
    `Hi Fardeen, I'm interested in renting a "${carName}" for the "${route}" route. Could you share availability and pricing?`
  );
  return `${WHATSAPP_BASE_URL}?text=${message}`;
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
