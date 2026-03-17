import { FileText, MessageSquare, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "KI-Tool beschreiben",
    text: "Nennen Sie uns das KI-Tool und den Einsatzzweck.",
    step: "1",
  },
  {
    icon: MessageSquare,
    title: "Fragen beantworten",
    text: "Beantworten Sie geführte Fragen zu Ihrem KI-Einsatz.",
    step: "2",
  },
  {
    icon: CheckCircle,
    title: "Pflichten erfahren",
    text: "Erhalten Sie Ihre Risikoklasse und alle relevanten Pflichten.",
    step: "3",
  },
];

export function HowItWorks() {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          So funktioniert&apos;s
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step) => (
            <div key={step.step} className="text-center">
              <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <step.icon className="h-8 w-8 text-primary" />
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                  {step.step}
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
