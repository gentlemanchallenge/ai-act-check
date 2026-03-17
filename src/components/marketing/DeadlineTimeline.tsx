const milestones = [
  { date: "01.08.2024", label: "AI Act in Kraft getreten", status: "past" as const },
  { date: "02.02.2025", label: "Verbotene Praktiken + KI-Kompetenz", status: "past" as const },
  { date: "02.08.2025", label: "GPAI-Anforderungen", status: "upcoming" as const },
  { date: "02.08.2026", label: "Hochrisiko-Anforderungen", status: "future" as const },
  { date: "02.08.2027", label: "Annex I Integration", status: "future" as const },
];

export function DeadlineTimeline() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Die wichtigsten Fristen
        </h2>
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2" />
          {milestones.map((m, i) => (
            <div key={m.date} className={`relative flex items-start mb-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'} pl-10 md:pl-0`}>
                <p className="text-sm font-bold text-primary">{m.date}</p>
                <p className={`text-sm ${m.status === 'past' ? 'text-gray-400 line-through' : m.status === 'upcoming' ? 'text-risk-limited font-semibold' : 'font-semibold'}`}>
                  {m.label}
                </p>
              </div>
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 mt-1">
                <div className={`w-3 h-3 rounded-full border-2 ${
                  m.status === 'past'
                    ? 'bg-gray-300 border-gray-300'
                    : m.status === 'upcoming'
                      ? 'bg-risk-limited border-risk-limited'
                      : 'bg-white border-primary'
                }`} />
              </div>
              <div className="flex-1 hidden md:block" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
