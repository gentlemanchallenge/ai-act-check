"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EmailCapture } from "@/components/email/EmailCapture";
import {
  AlertTriangle,
  BookOpen,
  CheckCircle,
  Clock,
  ExternalLink,
  Link2,
  ArrowRight,
  FileText,
  Shield,
  Eye,
  Settings,
  ClipboardList,
  Database,
  GraduationCap,
} from "lucide-react";
import type { Obligation } from "@/lib/classification/types";

interface ResultViewProps {
  id: string;
  systemName: string;
  riskLevel: string;
  userRole: string;
  summaryDe: string;
  obligations: Obligation[];
}

const riskConfig: Record<string, { label: string; variant: any; emoji: string; color: string }> = {
  PROHIBITED: { label: "Verbotene KI-Praktik", variant: "prohibited", emoji: "🔴", color: "bg-red-50 border-red-200" },
  HIGH_RISK: { label: "Hochrisiko", variant: "high", emoji: "🟠", color: "bg-orange-50 border-orange-200" },
  LIMITED_RISK: { label: "Begrenztes Risiko", variant: "limited", emoji: "🟡", color: "bg-yellow-50 border-yellow-200" },
  MINIMAL_RISK: { label: "Minimales Risiko", variant: "minimal", emoji: "🟢", color: "bg-green-50 border-green-200" },
  GPAI: { label: "General-Purpose AI", variant: "gpai", emoji: "🔵", color: "bg-blue-50 border-blue-200" },
  NOT_AI: { label: "Kein KI-System", variant: "notai", emoji: "⚪", color: "bg-gray-50 border-gray-200" },
};

const roleLabels: Record<string, string> = {
  PROVIDER: "Anbieter (Provider)",
  DEPLOYER: "Betreiber (Deployer)",
  BOTH: "Anbieter & Betreiber",
  IMPORTER: "Importeur",
  DISTRIBUTOR: "Händler",
};

const categoryIcons: Record<string, any> = {
  documentation: FileText,
  transparency: Eye,
  governance: Shield,
  technical: Settings,
  monitoring: ClipboardList,
  registration: Database,
  literacy: GraduationCap,
};

const categoryLabels: Record<string, string> = {
  documentation: "Dokumentation",
  transparency: "Transparenz",
  governance: "Governance & Compliance",
  technical: "Technische Anforderungen",
  monitoring: "Überwachung",
  registration: "Registrierung",
  literacy: "KI-Kompetenz",
};

export function ResultView({ id, systemName, riskLevel, userRole, summaryDe, obligations }: ResultViewProps) {
  const risk = riskConfig[riskLevel] || riskConfig.NOT_AI;

  const groupedObligations = obligations.reduce(
    (acc, obl) => {
      const cat = obl.category;
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push(obl);
      return acc;
    },
    {} as Record<string, Obligation[]>
  );

  const handleCopyLink = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      {/* 1. Result Header */}
      <div className={`rounded-xl border-2 p-6 md:p-8 ${risk.color}`}>
        <div className="flex items-start gap-4">
          <span className="text-4xl">{risk.emoji}</span>
          <div>
            <Badge variant={risk.variant} className="text-sm px-3 py-1 mb-2">
              {risk.label}
            </Badge>
            <h1 className="text-2xl font-bold mb-1">{systemName}</h1>
            <p className="text-gray-700 leading-relaxed">{summaryDe}</p>
          </div>
        </div>
      </div>

      {/* 2. Role */}
      <Card>
        <CardContent className="pt-6">
          <p className="text-gray-600">
            Sie sind <strong>{roleLabels[userRole] || userRole}</strong> dieses KI-Systems.
          </p>
        </CardContent>
      </Card>

      {/* 3. Obligations */}
      {obligations.length > 0 && (
        <div>
          <h2 className="text-xl font-bold mb-4">Ihre Pflichten ({obligations.length})</h2>
          {Object.entries(groupedObligations).map(([category, obls]) => {
            const Icon = categoryIcons[category] || FileText;
            return (
              <div key={category} className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Icon className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">{categoryLabels[category] || category}</h3>
                </div>
                <div className="space-y-3">
                  {obls.map((obl) => (
                    <Card key={obl.id}>
                      <CardContent className="pt-4 pb-4">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="font-medium text-sm">{obl.titleDe}</p>
                            <p className="text-xs text-primary font-mono mt-0.5">{obl.article}</p>
                            <p className="text-sm text-gray-600 mt-1">{obl.descriptionDe}</p>
                          </div>
                          <div className="flex items-center gap-1 text-xs text-gray-500 shrink-0">
                            <Clock className="h-3 w-3" />
                            {obl.deadline}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* 4. AI Literacy */}
      <Card className="border-primary/30 bg-primary/5">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <GraduationCap className="h-6 w-6 text-primary shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold mb-1">KI-Kompetenzpflicht (Art. 4)</h3>
              <p className="text-sm text-gray-700">
                Unabhängig von der Risikoklasse: Die KI-Kompetenzpflicht gilt für Ihr Unternehmen bereits seit dem 2. Februar 2025. Stellen Sie sicher, dass alle Mitarbeiter, die mit KI-Systemen arbeiten, ausreichend geschult sind.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 5. Next Steps */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Nächste Schritte</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-risk-minimal shrink-0 mt-0.5" />
              <span className="text-sm">Erstellen Sie ein KI-Inventar aller KI-Systeme in Ihrem Unternehmen.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-risk-minimal shrink-0 mt-0.5" />
              <span className="text-sm">Prüfen Sie jedes System einzeln mit diesem Tool.</span>
            </li>
            <li className="flex items-start gap-2">
              <AlertTriangle className="h-5 w-5 text-risk-limited shrink-0 mt-0.5" />
              <span className="text-sm">Für eine verbindliche rechtliche Einschätzung wenden Sie sich an einen spezialisierten Rechtsanwalt.</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* 6. Email Capture */}
      <EmailCapture aiSystemId={id} />

      {/* 7. Share */}
      <Card>
        <CardContent className="pt-6">
          <h3 className="font-semibold mb-3">Dieses Ergebnis teilen</h3>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={handleCopyLink}>
              <Link2 className="h-4 w-4 mr-1" /> Link kopieren
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn <ExternalLink className="h-3 w-3 ml-1" />
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&text=${encodeURIComponent('Mein AI Act Check Ergebnis:')}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                X / Twitter <ExternalLink className="h-3 w-3 ml-1" />
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* 8. Another Check */}
      <div className="text-center py-4">
        <p className="text-gray-600 mb-3">Haben Sie weitere KI-Systeme im Einsatz?</p>
        <Button asChild>
          <Link href="/de/check">
            Nächstes System prüfen <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      {/* 9. Disclaimer */}
      <div className="text-xs text-gray-400 border-t pt-6">
        <p>
          Dieses Tool bietet eine automatisierte Ersteinschätzung auf Basis der Verordnung (EU) 2024/1689 (Stand: März 2026). Es handelt sich um ein Orientierungstool, nicht um Rechtsberatung. Für eine verbindliche Einschätzung wenden Sie sich an einen qualifizierten Rechtsanwalt. Interpretationen können sich durch Leitlinien der EU-Kommission oder das Digital Omnibus-Paket ändern.
        </p>
      </div>

      {/* Phase 2 Placeholder */}
      <div className="rounded-xl border-2 border-dashed border-gray-200 p-6 text-center bg-gray-50">
        <p className="text-sm font-semibold text-gray-500 mb-2">Demnächst verfügbar</p>
        <ul className="text-sm text-gray-400 space-y-1">
          <li>PDF-Report zum Download</li>
          <li>Interaktive Pflichten-Checkliste mit Tracking</li>
          <li>Dokumentationsvorlagen</li>
        </ul>
      </div>
    </div>
  );
}
