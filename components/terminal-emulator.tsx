// components/TerminalEmulator.tsx
"use client";

import React, { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { useProgress } from "@/hooks/use-progress";

interface LogEntry {
  command: string;
  output: string;
  type?: "success" | "error";
}

export interface ExpectedCommand {
  command: string;
  output?: string;
  match?: "exact" | "prefix";
}

export interface TerminalEmulatorProps {
  expectedCommands?: ExpectedCommand[];
  welcomeMessage?: string;
  completionMessage?: string;
  title?: string;
  onCommandExecuted?: (command: string, matched: ExpectedCommand | null) => void;
  onComplete?: () => void;
}

function normalize(value: string): string {
  return value
    .trim()
    .replace(/[\u201C\u201D\u2018\u2019]/g, '"')
    .replace(/\s+/g, " ")
    .toLowerCase();
}

function findExpectedMatch(
  input: string,
  expectedCommands: ExpectedCommand[]
): ExpectedCommand | null {
  const normalizedInput = normalize(input);
  return (
    expectedCommands.find((item) => {
      const candidate = normalize(item.command);
      return item.match === "prefix"
        ? normalizedInput.startsWith(`${candidate} `)
        : normalizedInput === candidate;
    }) ?? null
  );
}

function formatExpected(item: ExpectedCommand): string {
  return item.match === "prefix" ? `${item.command} <valor>` : item.command;
}

export default function TerminalEmulator({
  expectedCommands = [],
  welcomeMessage = '¡Bienvenido! Escribe "help" para iniciar.',
  completionMessage = "¡Actividad completada!",
  title = "bash — main",
  onCommandExecuted,
  onComplete,
}: TerminalEmulatorProps) {
  const [history, setHistory] = useState<LogEntry[]>([]);
  const [input, setInput] = useState("");
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const completedRef = useRef(false);
  const pathname = usePathname();
  const { loaded, isComplete, markComplete } = useProgress();
  const activityId = pathname.startsWith("/actividades/") ? pathname : null;
  const activityCompleted = activityId ? isComplete(activityId) : false;

  // Auto-scroll al final cuando agregamos líneas
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const progress = expectedCommands.map((item) =>
    history.some((entry) => findExpectedMatch(entry.command, [item]))
  );
  const completedCount = progress.filter(Boolean).length;
  const allCompleted =
    expectedCommands.length > 0 && completedCount === expectedCommands.length;

  useEffect(() => {
    if (!allCompleted || completedRef.current) return;
    completedRef.current = true;
    if (activityId) markComplete(activityId);
    onComplete?.();
  }, [allCompleted, onComplete, activityId, markComplete]);

  const helpOutput = [
    "Comandos de la terminal: help, clear, about, date",
    ...(expectedCommands.length > 0
      ? ["Comandos esperados de la actividad:", ...expectedCommands.map(formatExpected)]
      : []),
  ].join("\n");

  const expectedErrorOutput = [
    "✗ Comando incorrecto para esta actividad.",
    "Comandos esperados:",
    ...expectedCommands.map(
      (item, index) => `  ${index + 1}. ${formatExpected(item)}`
    ),
  ].join("\n");

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedInput = input.trim();
    if (!trimmedInput) return;

    const matched = findExpectedMatch(trimmedInput, expectedCommands);
    onCommandExecuted?.(trimmedInput, matched);

    const commandRoot = trimmedInput.toLowerCase().split(/\s+/)[0];

    if (commandRoot === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    let output = "";
    let type: LogEntry["type"];

    if (matched) {
      output = matched.output ?? "✓ Comando ejecutado correctamente.";
      type = "success";
    } else {
      switch (commandRoot) {
        case "help":
          output = helpOutput;
          break;
        case "about":
          output = "Emulador de terminal interactivo creado en Next.js y Tailwind CSS.";
          break;
        case "date":
          output = new Date().toLocaleString();
          break;
        default:
          type = "error";
          output =
            expectedCommands.length > 0
              ? expectedErrorOutput
              : `Error: comando no encontrado: '${commandRoot}'. Escribe 'help' para ayuda.`;
      }
    }

    setHistory((prev) => [...prev, { command: trimmedInput, output, type }]);
    setInput("");
  };

  if (activityId && !loaded) {
    return (
      <div className="w-full bg-black p-4 rounded-lg shadow-2xl border border-neutral-800 h-[350px] animate-pulse" />
    );
  }

  if (activityId && activityCompleted) {
    return (
      <div className="w-full bg-black text-white font-mono p-4 rounded-lg shadow-2xl border border-emerald-900/60 h-[350px] flex flex-col items-center justify-center gap-3 text-center">
        <CheckCircle2 className="size-10 text-emerald-400" />
        <p className="text-sm font-semibold text-emerald-400">
          Actividad completada
        </p>
        <p className="max-w-sm text-sm text-neutral-400">{completionMessage}</p>
        <p className="max-w-sm text-xs text-neutral-600">
          Ya completaste esta actividad. Tu progreso quedo guardado.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full bg-black text-white font-mono p-4 rounded-lg shadow-2xl border border-neutral-800 h-[350px] flex flex-col">
      {/* Barra superior de la ventana */}
      <div className="flex items-center justify-between border-b border-neutral-800 pb-2 mb-2 text-xs text-neutral-400">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-neutral-700" />
          <span className="w-3 h-3 rounded-full bg-neutral-700" />
          <span className="w-3 h-3 rounded-full bg-neutral-700" />
        </div>
        <span>{title}</span>
        <div className="flex min-w-10 justify-end">
          {expectedCommands.length > 0 && (
            <span className={allCompleted ? "text-emerald-400" : "text-neutral-500"}>
              {allCompleted ? "completado" : `${completedCount}/${expectedCommands.length}`}
            </span>
          )}
        </div>
      </div>

      {/* Pantalla de comandos */}
      <div className="flex-1 overflow-y-auto space-y-2 text-sm pr-2">
        <div className="space-y-1">
          <p className="text-neutral-400">{welcomeMessage}</p>
          {expectedCommands.length > 0 && (
            <ul className="space-y-0.5 pl-1 text-xs">
              {expectedCommands.map((item, index) => (
                <li key={index} className="flex gap-2">
                  <span className={progress[index] ? "text-emerald-500" : "text-neutral-600"}>
                    {progress[index] ? "✓" : `${index + 1}.`}
                  </span>
                  <span
                    className={
                      progress[index]
                        ? "text-emerald-500/80 line-through decoration-neutral-700"
                        : "text-neutral-500"
                    }
                  >
                    {formatExpected(item)}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {history.map((entry, index) => (
          <div key={index} className="space-y-1">
            <div className="flex text-cyan-400">
              <span className="text-neutral-500 mr-2">guest@nextjs:~\$</span>
              <span>{entry.command}</span>
            </div>
            <div
              className={`whitespace-pre-wrap pl-4 ${
                entry.type === "success"
                  ? "text-emerald-400"
                  : entry.type === "error"
                    ? "text-red-400"
                    : "text-neutral-300"
              }`}
            >
              {entry.output}
            </div>
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      {/* Mensaje de actividad completada */}
      {allCompleted && (
        <div className="mt-2 rounded border border-emerald-500/40 bg-emerald-500/10 px-3 py-1.5 text-xs text-emerald-400">
          {completionMessage}
        </div>
      )}

      {/* Línea de entrada activa */}
      <form onSubmit={handleCommandSubmit} className="flex items-center text-sm mt-2 pt-2 border-t border-neutral-900">
        <span className="text-emerald-400 mr-2">guest@nextjs:~\$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-transparent focus:outline-none text-white caret-emerald-400"
          autoFocus
        />
      </form>
    </div>
  );
}
