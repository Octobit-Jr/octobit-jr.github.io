import { AutomationIcon, ConsultingIcon, DataIcon, WebIcon } from "./icons";

const SERVICES = [
  {
    icon: WebIcon,
    title: "Presença Digital que Converte",
    description:
      "Desenvolvemos sites institucionais ultrarrápidos, landing pages estratégicas e lojas online seguras (SEO e Mobile-First). Mantenha seu negócio aberto 24 horas por dia.",
    span: "lg:col-span-7",
  },
  {
    icon: AutomationIcon,
    title: "Ganhe Tempo e Aumente a Eficiência",
    description:
      "Elimine trabalho manual. Criamos sistemas personalizados que integram suas ferramentas e automatizam as rotinas da sua empresa.",
    span: "lg:col-span-5",
  },
  {
    icon: DataIcon,
    title: "Decisões Guiadas por Inteligência",
    description:
      "Data Science. Transforme dados dispersos em conhecimento valioso e descubra padrões ocultos no seu mercado.",
    span: "lg:col-span-6",
  },
  {
    icon: ConsultingIcon,
    title: "Consultoria em Tecnologia",
    description:
      "Ajudamos a guiar sua empresa na escolha e no desenvolvimento das soluções certas, com foco no que realmente importa: aumentar vendas e produtividade.",
    span: "lg:col-span-6",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="bg-background py-20 lg:py-24">
      <div className="mx-auto max-w-8xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-foreground lg:text-4xl">
            Nossos Serviços
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {SERVICES.map(({ icon: Icon, title, description, span }) => (
            <div
              key={title}
              className={`rounded-2xl border border-subtle bg-surface p-8 transition-colors hover:border-purple/40 ${span}`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple/10">
                <Icon className="h-6 w-6 text-purple" />
              </div>
              <h3 className="mt-6 font-display text-xl font-bold text-foreground">
                {title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
