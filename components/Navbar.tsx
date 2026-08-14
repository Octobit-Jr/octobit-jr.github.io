"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { NAV_LINKS, WHATSAPP_URL } from "@/lib/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-subtle bg-background/85 backdrop-blur">
      <nav
        className="mx-auto flex max-w-8xl items-center justify-between px-6 py-4 lg:px-10"
        aria-label="Navegação principal"
      >
        <Link href="/#home" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Logo OctoBit Jr."
            width={40}
            height={40}
            priority
          />
          <span className="font-display text-lg font-bold tracking-tight">
            OctoBit Jr.
          </span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-purple px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-purple-hover"
            >
              Fale conosco
            </a>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`h-0.5 w-6 bg-foreground transition-transform ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-foreground transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-foreground transition-transform ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-subtle bg-background transition-[max-height] duration-300 lg:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-base font-medium text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg bg-purple px-4 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-purple-hover"
            >
              Fale conosco
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
