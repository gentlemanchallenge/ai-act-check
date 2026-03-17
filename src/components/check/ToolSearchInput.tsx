"use client";

import { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { searchTools, type KnownTool } from "@/lib/classification/toolDatabase";
import { Search, Check, X, AlertTriangle } from "lucide-react";

interface ToolSearchInputProps {
  onToolSelected: (tool: KnownTool) => void;
  onManualAnswer: () => void;
}

export function ToolSearchInput({ onToolSelected, onManualAnswer }: ToolSearchInputProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<KnownTool[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [selectedTool, setSelectedTool] = useState<KnownTool | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (query.length >= 2) {
      setResults(searchTools(query));
      setShowResults(true);
    } else {
      setResults([]);
      setShowResults(false);
    }
  }, [query]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        resultsRef.current &&
        !resultsRef.current.contains(e.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(e.target as Node)
      ) {
        setShowResults(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (tool: KnownTool) => {
    setSelectedTool(tool);
    setQuery(tool.name);
    setShowResults(false);
    onToolSelected(tool);
  };

  const handleClear = () => {
    setSelectedTool(null);
    setQuery("");
    setResults([]);
    inputRef.current?.focus();
  };

  if (selectedTool) {
    return (
      <div className={`rounded-lg border-2 p-4 ${selectedTool.isAI ? 'border-blue-200 bg-blue-50' : 'border-green-200 bg-green-50'}`}>
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              {selectedTool.isAI ? (
                <span className="inline-flex items-center gap-1 text-xs font-semibold bg-blue-100 text-blue-800 rounded px-2 py-0.5">
                  <Check className="h-3 w-3" /> KI-System
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 text-xs font-semibold bg-green-100 text-green-800 rounded px-2 py-0.5">
                  <X className="h-3 w-3" /> Keine KI
                </span>
              )}
              <span className="text-xs text-gray-500">{selectedTool.categoryDe}</span>
            </div>
            <p className="font-semibold">{selectedTool.name}</p>
            {selectedTool.riskHintDe && (
              <p className="text-sm text-gray-600 mt-1">{selectedTool.riskHintDe}</p>
            )}
          </div>
          <button
            onClick={handleClear}
            className="text-gray-400 hover:text-gray-600 p-1"
            aria-label="Auswahl zurücksetzen"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query.length >= 2 && setShowResults(true)}
          placeholder="Tool-Name eingeben, z.B. ChatGPT, DeepL, Excel..."
          className="pl-10"
          autoComplete="off"
        />
      </div>

      {showResults && results.length > 0 && (
        <div
          ref={resultsRef}
          className="absolute z-50 w-full mt-1 bg-white rounded-lg border shadow-lg max-h-80 overflow-y-auto"
        >
          {results.map((tool) => (
            <button
              key={tool.name}
              onClick={() => handleSelect(tool)}
              className="w-full text-left px-4 py-3 hover:bg-gray-50 border-b last:border-b-0 transition-colors"
            >
              <div className="flex items-center justify-between gap-2">
                <div>
                  <span className="font-medium text-sm">{tool.name}</span>
                  <span className="text-xs text-gray-400 ml-2">{tool.categoryDe}</span>
                </div>
                {tool.isAI ? (
                  <span className="text-xs font-medium text-blue-600 bg-blue-50 rounded px-1.5 py-0.5 shrink-0">KI</span>
                ) : (
                  <span className="text-xs font-medium text-green-600 bg-green-50 rounded px-1.5 py-0.5 shrink-0">Keine KI</span>
                )}
              </div>
              {tool.riskHintDe && (
                <p className="text-xs text-gray-500 mt-0.5">{tool.riskHintDe}</p>
              )}
            </button>
          ))}
        </div>
      )}

      {showResults && query.length >= 2 && results.length === 0 && (
        <div className="absolute z-50 w-full mt-1 bg-white rounded-lg border shadow-lg p-4">
          <div className="flex items-start gap-2 text-sm text-gray-500">
            <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5 text-yellow-500" />
            <div>
              <p className="font-medium text-gray-700">"{query}" nicht in unserer Datenbank</p>
              <p className="mt-1">Kein Problem — beantworten Sie die nächste Frage einfach manuell.</p>
            </div>
          </div>
        </div>
      )}

      <p className="text-xs text-gray-400 mt-2">
        Tippen Sie den Namen Ihres Tools ein. Wir erkennen über 150 gängige Tools und sagen Ihnen sofort, ob es sich um KI handelt.
      </p>
    </div>
  );
}
