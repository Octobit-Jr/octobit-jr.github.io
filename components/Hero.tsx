import { WHATSAPP_URL } from "@/lib/site";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[92vh] items-center overflow-hidden bg-background"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src="/hero-network.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/75 to-background/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

      <div className="relative mx-auto w-full max-w-8xl px-6 py-24 lg:px-10">
        <div className="max-w-3xl animate-fadeInUp">
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Tecnologia sob medida para o seu negócio, com qualidade USP, para
            te ajudar a vender mais.
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-muted">
            Somos a OctoBit Jr., a empresa júnior de Ciências da Computação
            da USP Ribeirão Preto. Criamos sites, automações e soluções de
            dados que transformam processos lentos em resultados — com o
            custo-benefício de uma empresa júnior e o rigor técnico de um
            time universitário.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#contato"
              className="rounded-lg bg-purple px-8 py-4 text-center text-base font-bold text-white transition-colors hover:bg-purple-hover"
            >
              Quero meu orçamento
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/60 px-8 py-4 text-center text-base font-bold text-foreground transition-colors hover:border-white hover:bg-white/5"
            >
              Falar no WhatsApp
            </a>
          </div>

          <p className="mt-5 text-sm text-muted">
            Resposta em até 24h úteis · Sem compromisso
          </p>
        </div>
      </div>
    </section>
  );
}
