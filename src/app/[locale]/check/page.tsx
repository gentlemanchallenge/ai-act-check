"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ProgressBar } from "@/components/check/ProgressBar";
import { QuestionStep } from "@/components/check/QuestionStep";
import { ToolSearchInput } from "@/components/check/ToolSearchInput";
import { getNextQuestion, getQuestionById } from "@/lib/classification";
import type { Answer } from "@/lib/classification/types";
import type { KnownTool } from "@/lib/classification/toolDatabase";
import { Loader2, ArrowRight, Search } from "lucide-react";

const TOTAL_QUESTIONS = 8;

export default function CheckPage() {
  const router = useRouter();
  const [phase, setPhase] = useState<"intro" | "questions" | "submitting">("intro");
  const [systemName, setSystemName] = useState("");
  const [description, setDescription] = useState("");
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [error, setError] = useState("");
  const [knownTool, setKnownTool] = useState<KnownTool | null>(null);

  const nextQuestionId = getNextQuestion(answers);
  const currentQuestion = nextQuestionId ? getQuestionById(nextQuestionId) : null;

  const handleStartCheck = () => {
    if (!systemName.trim()) {
      setError("Bitte geben Sie den Namen des KI-Tools ein.");
      return;
    }
    setError("");
    setPhase("questions");
  };

  const handleToolSelected = (tool: KnownTool) => {
    setKnownTool(tool);
    // Auto-fill the system name if not already set
    if (!systemName) {
      setSystemName(tool.name);
    }
  };

  const handleAnswer = async (answerId: string) => {
    const newAnswers = [...answers, { questionId: nextQuestionId!, answerId }];
    setAnswers(newAnswers);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const next = getNextQuestion(newAnswers);
    if (!next) {
      setPhase("submitting");
      try {
        const res = await fetch("/api/check", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            systemName: systemName.trim(),
            description: description.trim() || undefined,
            answers: newAnswers,
          }),
        });

        if (!res.ok) throw new Error("Fehler bei der Analyse");

        const data = await res.json();
        router.push(data.redirectUrl);
      } catch {
        setError("Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.");
        setPhase("questions");
      }
    }
  };

  const handleBack = () => {
    if (answers.length === 0) {
      setPhase("intro");
      setKnownTool(null);
    } else {
      setAnswers(answers.slice(0, -1));
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (phase === "submitting") {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <Loader2 className="h-8 w-8 animate-spin mx-auto text-primary mb-4" />
        <p className="text-lg font-medium">Ergebnis wird berechnet...</p>
      </div>
    );
  }

  if (phase === "intro") {
    return (
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-lg mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">AI Act Pflichten-Check</h1>
          <p className="text-gray-600 mb-8">
            Beschreiben Sie Ihr KI-System und erfahren Sie in wenigen Minuten, welche Pflichten für Sie gelten.
          </p>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name des KI-Tools *</label>
              <Input
                value={systemName}
                onChange={(e) => setSystemName(e.target.value)}
                placeholder="z.B. ChatGPT, Personio KI-Recruiting, HubSpot AI"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Wofür setzen Sie es ein?</label>
              <Input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="z.B. Kundenanfragen beantworten, Bewerber vorselektieren"
              />
            </div>

            {error && <p className="text-sm text-red-600">{error}</p>}

            <Button onClick={handleStartCheck} size="lg" className="w-full">
              Check starten <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Questions phase
  // Show tool search on Q1 (the "is it AI?" question)
  const showToolSearch = nextQuestionId === 'Q1';

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <ProgressBar current={answers.length + 1} total={TOTAL_QUESTIONS} />

      {showToolSearch && (
        <div className="max-w-2xl mx-auto mb-8">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-5 border border-blue-100">
            <div className="flex items-center gap-2 mb-3">
              <Search className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">Kennen wir Ihr Tool?</h3>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Geben Sie den Namen Ihres Tools ein — wir sagen Ihnen sofort, ob es ein KI-System ist und welche Risikoklasse wahrscheinlich gilt.
            </p>
            <ToolSearchInput
              onToolSelected={(tool) => {
                handleToolSelected(tool);
                // Auto-answer Q1 based on the tool
                if (!tool.isAI) {
                  handleAnswer('Q1_NO');
                }
              }}
              onManualAnswer={() => {}}
            />
            {knownTool && knownTool.isAI && (
              <p className="text-sm text-blue-700 mt-3 font-medium">
                ✓ {knownTool.name} ist ein KI-System. Beantworten Sie bitte die Frage unten mit "Ja".
              </p>
            )}
          </div>
        </div>
      )}

      {currentQuestion && (
        <QuestionStep
          question={currentQuestion}
          onAnswer={handleAnswer}
          onBack={handleBack}
          canGoBack={true}
        />
      )}

      {error && (
        <p className="text-sm text-red-600 text-center mt-4">{error}</p>
      )}
    </div>
  );
}
