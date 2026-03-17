import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTABanner() {
  return (
    <section className="bg-primary py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Jetzt prüfen, welche Pflichten für Ihren KI-Einsatz gelten
        </h2>
        <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
          Kostenlos. Ohne Login. In 5 Minuten wissen Sie, was der AI Act für Ihr Unternehmen bedeutet.
        </p>
        <Button asChild size="xl" variant="secondary">
          <Link href="/de/check">
            Kostenloser Pflichten-Check <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
