"use client";

import { useEffect, useState } from "react";

/**
 * Steps through `count` items every `ms` until the visitor picks one, then holds there.
 * People who prefer reduced motion get no auto-stepping.
 */
export function useAutoStep(count: number, ms = 2800) {
  const [cur, setCur] = useState(0);
  const [hold, setHold] = useState(false);

  useEffect(() => {
    if (hold || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setCur((c) => (c + 1) % count), ms);
    return () => clearInterval(t);
  }, [hold, count, ms]);

  const pick = (i: number) => {
    setCur(i);
    setHold(true);
  };

  return [cur, pick] as const;
}
