"use client";

import { FormEvent, useState } from "react";
import { WHATSAPP_NUMBER } from "@/lib/site";

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);

    const name = form.get("name")?.toString().trim() ?? "";
    const company = form.get("company")?.toString().trim() ?? "";
    const email = form.get("email")?.toString().trim() ?? "";
    const whatsapp = form.get("whatsapp")?.toString().trim() ?? "";
    const message = form.get("message")?.toString().trim() ?? "";

    const lines = [
      "Olá! Vim pelo site e gostaria de um orçamento.",
      `Nome: ${name}`,
      company && `Empresa: ${company}`,
      email && `E-mail: ${email}`,
      whatsapp && `WhatsApp: ${whatsapp}`,
      message && `Como podemos ajudar: ${message}`,
    ].filter(Boolean);

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      lines.join("\n")
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
    event.currentTarget.reset();
  }

  const inputClasses =
    "w-full rounded-lg border border-subtle bg-background px-4 py-3 text-foreground placeholder:text-muted/70 transition-colors focus:border-purple";

  return (
    <section id="contato" className="bg-surface py-20 lg:py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-foreground lg:text-4xl">
            Pronto para transformar o seu negócio?
          </h2>
          <p className="mt-4 text-lg text-muted">
            Preencha o formulário abaixo ou fale com a gente pelo WhatsApp.
            Nossa equipe vai entrar em contato para desenhar a solução ideal
            para o seu negócio (o orçamento é 100% gratuito).
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-12 space-y-5" noValidate>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                Nome
              </label>
              <input id="name" name="name" type="text" autoComplete="name" required className={inputClasses} />
            </div>
            <div>
              <label htmlFor="company" className="mb-2 block text-sm font-medium text-foreground">
                Nome da Empresa
              </label>
              <input id="company" name="company" type="text" autoComplete="organization" className={inputClasses} />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                E-mail
              </label>
              <input id="email" name="email" type="email" autoComplete="email" required className={inputClasses} />
            </div>
            <div>
              <label htmlFor="whatsapp" className="mb-2 block text-sm font-medium text-foreground">
                WhatsApp
              </label>
              <input id="whatsapp" name="whatsapp" type="tel" autoComplete="tel" required className={inputClasses} />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
              Como podemos ajudar seu negócio a crescer?
            </label>
            <textarea id="message" name="message" rows={4} className={inputClasses} />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-purple px-8 py-4 text-center text-base font-bold text-white transition-colors hover:bg-purple-hover"
          >
            Solicitar Orçamento Gratuito
          </button>

          <p role="status" aria-live="polite" className="text-center text-sm text-muted">
            {submitted
              ? "Abrimos o WhatsApp com seus dados preenchidos — é só enviar a mensagem por lá!"
              : "Ao enviar, abriremos uma conversa no WhatsApp com seus dados preenchidos."}
          </p>
        </form>
      </div>
    </section>
  );
}
