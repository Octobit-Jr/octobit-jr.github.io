import { QuoteIcon } from "./icons";

export default function SocialProof() {
  return (
    <section className="bg-background py-20 lg:py-24">
      <div className="mx-auto max-w-8xl px-6 lg:px-10">
        <h2 className="text-center font-display text-3xl font-bold text-foreground lg:text-4xl">
          Quem confia no nosso trabalho
        </h2>

        <figure className="mx-auto mt-14 max-w-3xl rounded-2xl border border-subtle bg-surface p-10 text-center lg:p-14">
          <QuoteIcon className="mx-auto h-8 w-8 text-purple" />
          <blockquote className="mt-6 text-xl font-medium leading-relaxed text-foreground lg:text-2xl">
            &ldquo;Dou nota 5! A equipe da OctoBit é atenciosa, educada e
            muito competente. Tudo tem dado muito certo e todas as nossas
            demandas foram plenamente atendidas. Renovamos o contrato! Vamos
            que vamos!&rdquo;
          </blockquote>
          <figcaption className="mt-6 text-base font-semibold text-muted">
            — Academia Brasileira de Belas Artes
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
