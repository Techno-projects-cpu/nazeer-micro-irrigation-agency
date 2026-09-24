"use client";

import { useEffect } from "react";

/** Everything that should visibly react to a tap. */
const PRESSABLE = ".btn, [data-press]";
/** How long the pressed colour stays after the finger lifts. */
const HOLD_MS = 450;

/**
 * Touch screens have no hover, and a tap only lasts ~100ms — shorter than the
 * buttons' colour transition — so `:active` alone is never seen on a phone.
 * This marks the tapped element with `data-pressed="true"` and holds it for a
 * moment after release, so the colour change actually registers. A scroll
 * that happens to start on a button (pointercancel) clears it at once.
 * Mouse input is ignored: it has real :hover.
 */
export function PressFeedback() {
  useEffect(() => {
    const timers = new Map<Element, number>();
    let current: Element | null = null;

    const clear = (element: Element) => {
      const timer = timers.get(element);
      if (timer) window.clearTimeout(timer);
      timers.delete(element);
      element.removeAttribute("data-pressed");
    };

    const onDown = (event: PointerEvent) => {
      if (event.pointerType === "mouse") return;
      const target = event.target as Element | null;
      const element = target && target.closest ? target.closest(PRESSABLE) : null;
      if (!element) return;
      clear(element);
      element.setAttribute("data-pressed", "true");
      current = element;
    };

    const onUp = () => {
      const element = current;
      current = null;
      if (!element) return;
      timers.set(
        element,
        window.setTimeout(() => clear(element), HOLD_MS),
      );
    };

    const onCancel = () => {
      if (current) clear(current);
      current = null;
    };

    document.addEventListener("pointerdown", onDown, { passive: true });
    document.addEventListener("pointerup", onUp, { passive: true });
    document.addEventListener("pointercancel", onCancel, { passive: true });
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("pointerup", onUp);
      document.removeEventListener("pointercancel", onCancel);
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);

  return null;
}
