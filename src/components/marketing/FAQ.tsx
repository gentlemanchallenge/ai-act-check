import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Betrifft mich der AI Act, wenn ich KI nur nutze und nicht entwickle?",
    answer:
      "Ja. Der AI Act unterscheidet zwischen Anbietern (Providern) und Betreibern (Deployern). Wenn Sie KI-Tools wie ChatGPT, KI-Recruiting-Software oder KI-Buchhaltung einsetzen, sind Sie Betreiber und haben eigene Pflichten — insbesondere bei Hochrisiko-Systemen (z.B. Art. 26: menschliche Aufsicht, Eingabedatenqualität, Monitoring).",
  },
  {
    question: "Welche Strafen drohen bei Verstößen gegen den AI Act?",
    answer:
      "Die Strafen sind gestaffelt: Bis zu 35 Mio. € oder 7% des weltweiten Jahresumsatzes für verbotene KI-Praktiken. Bis zu 15 Mio. € oder 3% für Verstöße gegen Hochrisiko-Anforderungen. Bis zu 7,5 Mio. € oder 1,5% für falsche Angaben. Für KMU gelten jeweils die niedrigeren Beträge.",
  },
  {
    question: "Ab wann gilt der AI Act?",
    answer:
      "Der AI Act ist seit dem 1. August 2024 in Kraft. Die Pflichten werden stufenweise wirksam: Verbotene Praktiken seit 2. Februar 2025. KI-Kompetenz (Art. 4) seit 2. Februar 2025. GPAI-Anforderungen ab 2. August 2025. Hochrisiko-Anforderungen ab 2. August 2026. Die wichtigste Deadline für die meisten Unternehmen ist der 2. August 2026.",
  },
  {
    question: "Was ist die KI-Kompetenzpflicht (Art. 4)?",
    answer:
      "Seit dem 2. Februar 2025 müssen alle Unternehmen, die KI-Systeme anbieten oder einsetzen, sicherstellen, dass ihr Personal über ausreichende KI-Kompetenz verfügt. Dies umfasst technisches Wissen, Verständnis der Risiken und Schulungen. Die Pflicht gilt unabhängig von der Risikoklasse Ihres KI-Systems.",
  },
  {
    question: "Was zählt als KI-System im Sinne des AI Act?",
    answer:
      "Ein KI-System ist ein maschinengestütztes System, das mit unterschiedlichem Grad an Autonomie arbeitet und aus Eingaben Ausgaben wie Vorhersagen, Empfehlungen, Entscheidungen oder Inhalte erzeugt (Art. 3 Nr. 1). Dazu gehören Machine Learning, neuronale Netze, NLP und ähnliche Technologien. Einfache regelbasierte Software (Excel-Formeln, If/Then-Logik) fällt NICHT darunter.",
  },
  {
    question: "Ist dieser Check rechtlich verbindlich?",
    answer:
      "Nein. Dieser Check bietet eine automatisierte Ersteinschätzung auf Basis der Verordnung (EU) 2024/1689. Er dient der Orientierung und ersetzt keine Rechtsberatung. Für eine verbindliche Einschätzung empfehlen wir, einen auf KI-Recht spezialisierten Rechtsanwalt zu konsultieren.",
  },
];

export function FAQ() {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Häufig gestellte Fragen
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
