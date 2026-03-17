import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { ResultView } from "@/components/check/ResultView";
import type { Obligation } from "@/lib/classification/types";
import type { Metadata } from "next";

interface Props {
  params: { id: string; locale: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const system = await prisma.aISystem.findUnique({ where: { id: params.id } });
  if (!system) return { title: "Ergebnis nicht gefunden" };

  const riskLabels: Record<string, string> = {
    PROHIBITED: "Verbotene KI-Praktik",
    HIGH_RISK: "Hochrisiko",
    LIMITED_RISK: "Begrenztes Risiko",
    MINIMAL_RISK: "Minimales Risiko",
    GPAI: "General-Purpose AI",
    NOT_AI: "Kein KI-System",
  };

  const riskLabel = riskLabels[system.riskLevel || ""] || "Ergebnis";

  return {
    title: `AI Act Check: ${system.name} — ${riskLabel}`,
    description: `${system.name} wurde als "${riskLabel}" klassifiziert. Erfahren Sie, welche Pflichten nach dem EU AI Act gelten.`,
    openGraph: {
      title: `AI Act Check: ${riskLabel}`,
      description: `${system.name} — ${riskLabel}. Kostenloser EU AI Act Pflichten-Check.`,
    },
  };
}

export default async function ErgebnisPage({ params }: Props) {
  const system = await prisma.aISystem.findUnique({
    where: { id: params.id },
  });

  if (!system || !system.riskLevel) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <ResultView
        id={system.id}
        systemName={system.name}
        riskLevel={system.riskLevel}
        userRole={system.userRole || "DEPLOYER"}
        summaryDe={(system.obligations as any)?.summaryDe || ""}
        obligations={(system.obligations as any)?.obligations || []}
      />
    </div>
  );
}
