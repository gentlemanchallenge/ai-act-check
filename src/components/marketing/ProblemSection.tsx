import { AlertTriangle, Gavel, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const problems = [
  {
    icon: AlertTriangle,
    title: "Auch Betreiber sind betroffen",
    text: "Sie müssen keine KI entwickeln. Wer KI-Tools einsetzt — von ChatGPT bis Recruiting-Software — hat Pflichten als Betreiber.",
    color: "text-risk-high",
  },
  {
    icon: Gavel,
    title: "Strafen bis 35 Mio. €",
    text: "Verstöße gegen den AI Act werden mit bis zu 35 Mio. € oder 7% des weltweiten Jahresumsatzes geahndet.",
    color: "text-risk-prohibited",
  },
  {
    icon: Clock,
    title: "Weniger als 30% haben begonnen",
    text: "Die meisten KMU haben noch nicht mit der Vorbereitung begonnen. Die Deadline 2. August 2026 rückt näher.",
    color: "text-risk-limited",
  },
];

export function ProblemSection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Warum Sie jetzt handeln sollten
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((problem) => (
            <Card key={problem.title} className="text-center">
              <CardContent className="pt-6">
                <problem.icon className={`h-12 w-12 mx-auto mb-4 ${problem.color}`} />
                <h3 className="text-lg font-semibold mb-2">{problem.title}</h3>
                <p className="text-gray-600 text-sm">{problem.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
