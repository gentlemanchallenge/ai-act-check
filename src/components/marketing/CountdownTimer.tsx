"use client";

import { useEffect, useState } from "react";

interface CountdownTimerProps {
  targetDate: string;
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculate = () => {
      const diff = new Date(targetDate).getTime() - Date.now();
      if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      };
    };

    setTimeLeft(calculate());
    const timer = setInterval(() => setTimeLeft(calculate()), 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const blocks = [
    { value: timeLeft.days, label: "Tage" },
    { value: timeLeft.hours, label: "Stunden" },
    { value: timeLeft.minutes, label: "Minuten" },
    { value: timeLeft.seconds, label: "Sekunden" },
  ];

  return (
    <div className="flex flex-col items-center gap-2">
      <p className="text-sm text-blue-200 uppercase tracking-wider">bis zur Hochrisiko-Deadline</p>
      <div className="flex gap-3">
        {blocks.map((block) => (
          <div key={block.label} className="flex flex-col items-center">
            <div className="bg-white/10 backdrop-blur rounded-lg w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
              <span className="text-2xl md:text-3xl font-bold tabular-nums">
                {String(block.value).padStart(2, "0")}
              </span>
            </div>
            <span className="text-xs text-blue-200 mt-1">{block.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
