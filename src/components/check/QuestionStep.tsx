"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import type { Question } from "@/lib/classification/types";

interface QuestionStepProps {
  question: Question;
  onAnswer: (answerId: string) => void;
  onBack?: () => void;
  canGoBack: boolean;
}

export function QuestionStep({ question, onAnswer, onBack, canGoBack }: QuestionStepProps) {
  const [showHelp, setShowHelp] = useState(false);

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-xl md:text-2xl font-bold mb-2">{question.textDe}</h2>

      {question.helpTextDe && (
        <div className="mb-6">
          <button
            onClick={() => setShowHelp(!showHelp)}
            className="flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors"
          >
            <HelpCircle className="h-4 w-4" />
            Hilfe anzeigen
            {showHelp ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
          </button>
          {showHelp && (
            <div className="mt-2 p-4 bg-blue-50 rounded-lg text-sm text-gray-700 leading-relaxed">
              {question.helpTextDe.split('\n').map((line, i) => {
                // Simple bold markdown rendering
                const parts = line.split(/\*\*(.*?)\*\*/g);
                return (
                  <p key={i} className={line === '' ? 'h-2' : 'mb-1'}>
                    {parts.map((part, j) =>
                      j % 2 === 1 ? <strong key={j}>{part}</strong> : part
                    )}
                  </p>
                );
              })}
            </div>
          )}
        </div>
      )}

      <div className="space-y-3">
        {question.options.map((option) => (
          <button
            key={option.id}
            onClick={() => onAnswer(option.id)}
            className="w-full text-left p-4 rounded-lg border-2 border-gray-200 hover:border-primary hover:bg-primary/5 transition-all group"
          >
            <p className="font-medium group-hover:text-primary">{option.labelDe}</p>
            {option.descriptionDe && (
              <p className="text-sm text-gray-500 mt-1">{option.descriptionDe}</p>
            )}
          </button>
        ))}
      </div>

      {canGoBack && (
        <div className="mt-6">
          <Button variant="ghost" onClick={onBack} size="sm">
            &larr; Zurück
          </Button>
        </div>
      )}
    </div>
  );
}
