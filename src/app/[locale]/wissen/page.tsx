import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CTABanner } from "@/components/layout/CTABanner";
import { BookOpen, Layers, Ban, Calendar } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Act Wissen — Alles zum EU AI Act für Unternehmen",
  description: "Umfassender Guide zum EU AI Act: Risikoklassen, verbotene Praktiken, Fristen und Pflichten für Unternehmen, die KI einsetzen.",
};

const wissenPages = [
  {
    href: "/de/wissen/eu-ai-act-guide",
    icon: BookOpen,
    title: "EU AI Act für Unternehmen",
    description: "Was Sie als KI-Nutzer wissen müssen — der umfassende Guide.",
  },
  {
    href: "/de/wissen/risikoklassen",
    icon: Layers,
    title: "AI Act Risikoklassen",
    description: "In welche Kategorie fällt Ihr KI-Tool? Alle 4 Stufen erklärt.",
  },
  {
    href: "/de/wissen/verbotene-ki-praktiken",
    icon: Ban,
    title: "8 verbotene KI-Praktiken",
    description: "Welche KI-Anwendungen der AI Act komplett verbietet.",
  },
  {
    href: "/de/wissen/fristen",
    icon: Calendar,
    title: "AI Act Fristen 2025–2027",
    description: "Interaktive Timeline: Was bis wann erledigt sein muss.",
  },
];

export default function WissenPage() {
  return (
    <>
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">AI Act Wissen</h1>
          <p className="text-lg text-gray-600 mb-10">
            Alles, was Sie über den EU AI Act wissen müssen — verständlich aufbereitet für Unternehmen.
          </p>

          <div className="grid gap-4">
            {wissenPages.map((page) => (
              <Link key={page.href} href={page.href}>
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="pt-6 flex items-start gap-4">
                    <page.icon className="h-8 w-8 text-primary shrink-0" />
                    <div>
                      <h2 className="font-semibold text-lg">{page.title}</h2>
                      <p className="text-sm text-gray-600">{page.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <CTABanner />
    </>
  );
}
