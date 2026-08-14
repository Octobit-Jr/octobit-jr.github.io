import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TEAM } from "@/lib/team";

export const metadata: Metadata = {
  title: "Nossa Equipe",
  description:
    "Conheça o time de estudantes de Ciências da Computação da USP Ribeirão Preto por trás da OctoBit Jr.",
};

export default function EquipePage() {
  return (
    <>
      <Navbar />
      <main id="equipe" className="bg-background py-20 lg:py-24">
        <div className="mx-auto max-w-8xl px-6 lg:px-10">
          <h1 className="text-center font-display text-3xl font-bold text-foreground lg:text-4xl">
            Nosso Time
          </h1>

          <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center rounded-2xl border border-subtle bg-surface p-5 text-center"
              >
                <div className="relative h-24 w-24 overflow-hidden rounded-full">
                  <Image
                    src={`/equipe/${member.photo}`}
                    alt={member.name}
                    fill
                    sizes="96px"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <h2 className="mt-4 text-base font-bold text-foreground">
                  {member.name}
                </h2>
                {member.roles.map((role) => (
                  <p key={role} className="mt-1 text-sm text-muted">
                    {role}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
