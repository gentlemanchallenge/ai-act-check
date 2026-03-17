"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Lightbulb } from "lucide-react";
import type { Question } from "@/lib/classification/types";

interface QuestionStepProps {
  question: Question;
  onAnswer: (answerId: string) => void;
  onBack?: () => void;
  canGoBack: boolean;
}

function renderHelpLine(line: string, i: number) {
  // Handle bold **text** and render bullet points
  const parts = line.split(/\*\*(.*?)\*\*/g);
  const isBullet = line.trimStart().startsWith('•') || line.trimStart().startsWith('-');

  return (
    <p key={i} className={`${line === '' ? 'h-3' : 'mb-1'} ${isBullet ? 'pl-2' : ''}`}>
      {parts.map((part, j) =>
        j % 2 === 1 ? <strong key={j} className="text-gray-900">{part}</strong> : part
      )}
    </p>
  );
}

export function QuestionStep({ question, onAnswer, onBack, canGoBack }: QuestionStepProps) {
  const [showHelp, setShowHelp] = useState(false);

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-xl md:text-2xl font-bold mb-4">{question.textDe}</h2>

      {question.helpTextDe && (
        <div className="mb-6">
          <button
            onClick={() => setShowHelp(!showHelp)}
            className={`flex items-center gap-2 w-full text-left px-4 py-3 rounded-lg border-2 transition-all ${
              showHelp
                ? 'border-amber-300 bg-amber-50 text-amber-800'
                : 'border-amber-200 bg-amber-50/50 text-amber-700 hover:bg-amber-50 hover:border-amber-300'
            }`}
          >
            <Lightbulb className={`h-5 w-5 shrink-0 ${showHelp ? 'text-amber-500' : 'text-amber-400'}`} />
            <span className="font-medium text-sm flex-1">
              {showHelp ? 'Hilfe & Erklärung' : 'Unsicher? Hier klicken für Erklärung & Beispiele'}
            </span>
            {showHelp ? <ChevronUp className="h-4 w-4 shrink-0" /> : <ChevronDown className="h-4 w-4 shrink-0" />}
          </button>

          {showHelp && (
            <div className="mt-0 px-4 py-4 bg-amber-50 border-2 border-t-0 border-amber-300 rounded-b-lg text-sm text-gray-700 leading-relaxed">
              {question.helpTextDe.split('\n').map(renderHelpLine)}
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
