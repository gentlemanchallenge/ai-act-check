import { Badge } from "@/components/ui/badge";

const examples = [
  {
    tool: "ChatGPT / Copilot",
    usage: "Kundenservice-Chatbot",
    risk: "Begrenztes Risiko",
    variant: "limited" as const,
  },
  {
    tool: "KI-Bewerbermanagement",
    usage: "Bewerbervorauswahl",
    risk: "Hochrisiko",
    variant: "high" as const,
  },
  {
    tool: "KI-Kredit-Scoring",
    usage: "Kreditbewertung",
    risk: "Hochrisiko",
    variant: "high" as const,
  },
  {
    tool: "KI-Textgenerator",
    usage: "Marketing-Content",
    risk: "Minimales Risiko",
    variant: "minimal" as const,
  },
  {
    tool: "KI-Videoüberwachung",
    usage: "Personenerkennung",
    risk: "Potenziell Hochrisiko",
    variant: "high" as const,
  },
  {
    tool: "DeepL",
    usage: "Übersetzung",
    risk: "Minimales Risiko",
    variant: "minimal" as const,
  },
];

export function ExampleCards() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Beispiele: Welche Risikoklasse hat Ihr KI-Tool?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {examples.map((example) => (
            <div
              key={example.tool}
              className="flex items-center justify-between p-4 rounded-lg border hover:shadow-md transition-shadow"
            >
              <div>
                <p className="font-semibold text-sm">{example.tool}</p>
                <p className="text-xs text-gray-500">{example.usage}</p>
              </div>
              <Badge variant={example.variant} className="ml-3 shrink-0">
                {example.risk}
              </Badge>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
