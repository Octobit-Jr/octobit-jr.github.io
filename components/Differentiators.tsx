import { CheckIcon } from "./icons";

const ITEMS = [
  {
    emoji: "🎓",
    title: "Qualidade USP",
    description:
      "Projetos desenvolvidos com o rigor técnico de uma das melhores universidades da América Latina.",
  },
  {
    emoji: "💰",
    title: "Custo-Benefício Inteligente",
    description:
      "Tecnologia de nível empresarial a preços acessíveis.",
  },
  {
    emoji: "🤝",
    title: "Atendimento Personalizado",
    description:
      "Suporte próximo e transparente, focado nos seus resultados.",
  },
];

export default function Differentiators() {
  return (
    <section id="sobre" className="bg-surface py-20 lg:py-24">
      <div className="mx-auto max-w-8xl px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold text-foreground lg:text-4xl">
            A excelência de uma Empresa Júnior com a inovação de um ambiente
            universitário.
          </h2>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-3">
          {ITEMS.map((item) => (
            <div key={item.title} className="flex flex-col items-start gap-4">
              <div className="flex items-center gap-2">
                <CheckIcon className="h-6 w-6 shrink-0 text-purple" />
                <span aria-hidden="true" className="text-2xl">
                  {item.emoji}
                </span>
              </div>
              <h3 className="font-display text-lg font-bold text-foreground">
                {item.title}
              </h3>
              <p className="text-base leading-relaxed text-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
