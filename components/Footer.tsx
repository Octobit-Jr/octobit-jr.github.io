import Image from "next/image";
import { INSTAGRAM_URL, LINKEDIN_URL, WHATSAPP_URL } from "@/lib/site";

const SOCIALS = [
  { href: INSTAGRAM_URL, icon: "/icons/instagram.svg", label: "Instagram" },
  { href: LINKEDIN_URL, icon: "/icons/linkedin.svg", label: "LinkedIn" },
  { href: WHATSAPP_URL, icon: "/icons/whatsapp.svg", label: "WhatsApp" },
];

export default function Footer() {
  return (
    <footer className="border-t border-subtle bg-background py-16">
      <div className="mx-auto max-w-8xl px-6 text-center lg:px-10">
        <div className="flex items-center justify-center gap-2">
          <Image src="/logo.png" alt="Logo OctoBit Jr." width={32} height={32} />
          <span className="font-display text-base font-bold text-foreground">
            OctoBit Jr.
          </span>
        </div>

        <ul className="mt-8 flex items-center justify-center gap-6">
          {SOCIALS.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-subtle transition-colors hover:border-purple hover:bg-purple/10"
              >
                <Image
                  src={social.icon}
                  alt=""
                  width={20}
                  height={20}
                  aria-hidden="true"
                  className="brightness-0 invert"
                />
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-sm text-muted">
          &copy; {new Date().getFullYear()} OctoBit Jr. — Empresa Júnior de
          Ciências da Computação da USP Ribeirão Preto.
        </p>
      </div>
    </footer>
  );
}
