"use client";
import { useEffect, useState } from "react";

export default function Typer({ phrases }) {
  const [text, setText] = useState(phrases[0]);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let p = 0, c = 0, del = false, t;
    const tick = () => {
      const full = phrases[p];
      c += del ? -1 : 1;
      setText(full.slice(0, c));
      let wait = del ? 35 : 70;
      if (!del && c === full.length) { del = true; wait = 1600; }
      else if (del && c === 0) { del = false; p = (p + 1) % phrases.length; wait = 350; }
      t = setTimeout(tick, wait);
    };
    c = phrases[0].length; del = true; t = setTimeout(tick, 1800);
    return () => clearTimeout(t);
  }, [phrases]);
  return (<span aria-label={phrases[0]}>{text}<i className="caret" aria-hidden="true" /></span>);
}
