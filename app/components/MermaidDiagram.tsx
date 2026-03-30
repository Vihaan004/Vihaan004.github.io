"use client";

import { useEffect, useId, useRef, useState } from "react";
import mermaid from "mermaid";

type MermaidDiagramProps = {
  chart: string;
};

function shouldUseDarkTheme(): boolean {
  const root = document.documentElement;
  if (root.classList.contains("dark")) return true;
  if (root.classList.contains("light")) return false;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export default function MermaidDiagram({ chart }: MermaidDiagramProps) {
  const id = useId().replace(/[:]/g, "");
  const containerRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let active = true;

    const renderDiagram = async () => {
      try {
        mermaid.initialize({
          startOnLoad: false,
          securityLevel: "strict",
          theme: shouldUseDarkTheme() ? "dark" : "default",
        });

        const { svg } = await mermaid.render(`mermaid-${id}`, chart);

        if (!active || !containerRef.current) return;
        containerRef.current.innerHTML = svg;
        setError(false);
      } catch {
        if (!active) return;
        setError(true);
      }
    };

    renderDiagram();

    const observer = new MutationObserver(() => {
      void renderDiagram();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      active = false;
      observer.disconnect();
    };
  }, [chart, id]);

  if (error) {
    return (
      <pre className="mermaid-fallback">
        <code>{chart}</code>
      </pre>
    );
  }

  return (
    <div className="mermaid-diagram" aria-label="Mermaid diagram">
      <div ref={containerRef} className="mermaid-diagram-inner" />
    </div>
  );
}
