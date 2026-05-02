"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

const CURSOR_ATTR = "data-custom-cursor";

const INTERACTIVE_SELECTOR = [
  "a[href]",
  'button:not([disabled])',
  '[role="button"]:not([aria-disabled="true"])',
  "input:not([type='hidden'])",
  "textarea",
  "select",
  "summary",
  "label",
  "[data-cursor-hover]",
].join(",");

function isInteractiveUnderCursor(target: EventTarget | null): boolean {
  if (!(target instanceof Element)) return false;
  const zone = target.closest(INTERACTIVE_SELECTOR);
  if (!zone) return false;
  const style = window.getComputedStyle(zone);
  if (style.pointerEvents === "none") return false;
  if (zone instanceof HTMLAnchorElement && !zone.hasAttribute("href")) {
    return false;
  }
  return true;
}

/** Cursor visual (quadrado) que segue o rato — esconde o ponteiro do sistema enquanto ativo. */
export function Mouse() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [interactive, setInteractive] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    const canHover = window.matchMedia("(hover: hover)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const sync = () => {
      const ok =
        finePointer.matches && canHover.matches && !reducedMotion.matches;
      setActive(ok);
    };

    sync();
    finePointer.addEventListener("change", sync);
    canHover.addEventListener("change", sync);
    reducedMotion.addEventListener("change", sync);

    return () => {
      finePointer.removeEventListener("change", sync);
      canHover.removeEventListener("change", sync);
      reducedMotion.removeEventListener("change", sync);
    };
  }, []);

  useEffect(() => {
    if (!active || typeof document === "undefined") return;

    document.documentElement.setAttribute(CURSOR_ATTR, "");

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
      setInteractive(isInteractiveUnderCursor(e.target));
    };

    const onLeave = () => {
      setVisible(false);
      setInteractive(false);
    };

    window.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      document.documentElement.removeAttribute(CURSOR_ATTR);
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener(
        "mouseleave",
        onLeave
      );
    };
  }, [active]);

  if (!active) return null;

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none fixed z-[99999] rounded-full transition-[opacity,width,height,background-color,transform,box-shadow]  duration-200 ease-out backdrop-invert",
        visible ? "opacity-100" : "opacity-0",
        interactive
          ? "size-12 bg-white/25 shadow-md backdrop-invert backdrop-blur-[1px]"
          : "size-5 bg-white/25  shadow-none "
      )}
      style={{
        left: pos.x,
        top: pos.y,
        transform: "translate(-50%, -50%)",
      }}
    />
  );
}
