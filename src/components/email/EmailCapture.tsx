"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Check, AlertCircle } from "lucide-react";

interface EmailCaptureProps {
  aiSystemId?: string;
  source?: string;
}

export function EmailCapture({ aiSystemId, source = "result_page" }: EmailCaptureProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, aiSystemId, source }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Fehler");
      }

      setStatus("success");
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err.message || "Ein Fehler ist aufgetreten.");
    }
  };

  if (status === "success") {
    return (
      <Card className="border-green-200 bg-green-50">
        <CardContent className="pt-6 text-center">
          <Check className="h-8 w-8 text-green-600 mx-auto mb-2" />
          <p className="font-semibold text-green-800">Bitte prüfen Sie Ihre E-Mail zur Bestätigung.</p>
          <p className="text-sm text-green-600 mt-1">Wir haben Ihnen einen Bestätigungslink gesendet.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-center gap-2 mb-4">
          <Mail className="h-5 w-5 text-primary" />
          <h3 className="font-bold">Ergebnis per E-Mail erhalten</h3>
        </div>

        <p className="text-sm text-gray-600 mb-4">Wir senden Ihnen:</p>
        <ul className="text-sm text-gray-600 space-y-1 mb-4">
          <li className="flex items-center gap-2">
            <Check className="h-4 w-4 text-green-500" /> Ihr Ergebnis als Zusammenfassung
          </li>
          <li className="flex items-center gap-2">
            <Check className="h-4 w-4 text-green-500" /> Deadline-Erinnerungen (90, 60, 30 Tage vor dem 2. August 2026)
          </li>
          <li className="flex items-center gap-2">
            <Check className="h-4 w-4 text-green-500" /> Updates bei Änderungen der Verordnung
          </li>
        </ul>

        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ihre E-Mail-Adresse"
            required
            className="flex-1"
          />
          <Button type="submit" disabled={status === "loading"}>
            {status === "loading" ? "..." : "Absenden"}
          </Button>
        </form>

        {status === "error" && (
          <div className="flex items-center gap-1 mt-2 text-sm text-red-600">
            <AlertCircle className="h-4 w-4" />
            {errorMsg}
          </div>
        )}

        <p className="text-xs text-gray-400 mt-3">Kein Spam. Jederzeit abbestellbar.</p>
      </CardContent>
    </Card>
  );
}
