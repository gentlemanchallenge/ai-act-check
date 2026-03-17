"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { CountdownTimer } from "./CountdownTimer";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 text-white">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyem0wLTRWMjhIMjR2MmgxMnptLTItMjJoMnYxMmgtMlYyem0tNCAwaC0ydjEyaDJWMnptLTIgMTZoMnYxMmgtMlYxOHptMTIgMGgydjEyaC0yVjE4eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>

      <div className="container mx-auto px-4 py-20 md:py-28 relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400"></span>
            </span>
            EU AI Act — Deadline 2. August 2026
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Nutzt Ihr Unternehmen KI?{" "}
            <span className="text-blue-300">Dann betrifft Sie der EU AI Act.</span>
          </h1>

          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            70% aller Unternehmen setzen KI-Tools ein — die wenigsten kennen ihre Pflichten.
            Prüfen Sie jetzt kostenlos, welche Anforderungen für Sie gelten.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="xl" className="bg-white text-primary hover:bg-blue-50 font-bold">
              <Link href="/de/check">
                Jetzt kostenlos prüfen <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="xl" variant="outline" className="border-white/30 text-white hover:bg-white/10">
              <Link href="/de/wissen/eu-ai-act-guide">
                Mehr erfahren
              </Link>
            </Button>
          </div>

          <CountdownTimer targetDate="2026-08-02T00:00:00" />
        </div>
      </div>
    </section>
  );
}
