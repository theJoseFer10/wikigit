"use client"
interface TerminaltextProps {
  lines: string[];
}

export default function TerminalText({ lines }: TerminaltextProps) {
  return (
      <div className="w-full bg-[#1e1e1e] text-[#00ff00] font-mono p-4 rounded-lg shadow-lg border border-neutral-700 min-h-[200px]">
        <div className="flex gap-2 mb-3 border-b border-neutral-800 pb-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="space-y-1 text-sm leading-relaxed">
          {lines.map((line, index) => (
            <div key={index} className="flex">
              <span className="text-neutral-500 mr-2">$</span>
              <span>{line}</span>
            </div>
          ))}
          {/* Cursor parpadeante al final */}
          <div className="flex items-center">
            <span className="text-neutral-500 mr-2">$</span>
            <span className="w-2 h-4 bg-[#00ff00] animate-pulse" />
          </div>
        </div>
      </div>
    );
}
