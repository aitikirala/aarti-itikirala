"use client";
import React, { useEffect, useRef } from "react";

type TimelineEntry = {
  date: React.ReactNode;
  content: React.ReactNode;
};

export function Timeline({ data }: { data: TimelineEntry[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const outerRef = useRef<HTMLDivElement>(null);
  const railBgRef = useRef<HTMLDivElement>(null);
  const railFillRef = useRef<HTMLDivElement>(null);

  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dateLabelRefs = useRef<(HTMLDivElement | null)[]>([]);

  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dotInnerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dotYRef = useRef<number[]>([]);
  const firstDotOffsetRef = useRef<number>(0);

  useEffect(() => {
    const container = containerRef.current;
    const outer = outerRef.current;
    const railBg = railBgRef.current;
    const railFill = railFillRef.current;
    if (!container || !outer || !railBg || !railFill) return;

    function getScrollParent(el: HTMLElement): HTMLElement | Window {
      let node: HTMLElement | null = el.parentElement;
      while (node && node !== document.body) {
        const { overflow, overflowY, overflowX } = window.getComputedStyle(node);
        if (/auto|scroll/.test(overflow + overflowY + overflowX)) return node;
        node = node.parentElement;
      }
      return window;
    }

    const scroller = getScrollParent(container);

    const computeDotPositions = () => {
      const containerRect = container.getBoundingClientRect();
      const ys: number[] = [];

      dateLabelRefs.current.forEach((el, i) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        const centerY = r.top + r.height / 2;
        ys[i] = centerY - containerRect.top;
      });

      const firstY = ys.find((v) => typeof v === "number") ?? 0;
      firstDotOffsetRef.current = firstY;

      ys.forEach((y, i) => {
        const dot = dotRefs.current[i];
        if (dot) dot.style.top = `${y - firstY}px`;
      });

      dotYRef.current = ys;
    };

    const update = () => {
      const h = container.offsetHeight;

      const containerRect = container.getBoundingClientRect();
      const outerRect = outer.getBoundingClientRect();

      computeDotPositions();

      const firstY = firstDotOffsetRef.current;

      // ✅ rail starts at the first dot (no faint rail above it)
      // ✅ moved rail more to the RIGHT by reducing the subtraction (26 -> 14)
      railBg.style.left = `${containerRect.left - outerRect.left - 14}px`;
      railBg.style.top = `${containerRect.top - outerRect.top + firstY}px`;
      railBg.style.height = `${Math.max(0, h - firstY)}px`;

      const isWindow = scroller instanceof Window;
      const scrollerTop = isWindow
        ? 0
        : (scroller as HTMLElement).getBoundingClientRect().top;

      const vh = isWindow ? window.innerHeight : (scroller as HTMLElement).clientHeight;
      const relTop = containerRect.top - scrollerTop;

      const scrolledPast = -relTop + vh * 0.1;
      const total = h - vh * 0.9;

      const progress = Math.min(Math.max(total > 0 ? scrolledPast / total : 0, 0), 1);
      const filledPx = progress * h;

      const filledFromFirstDot = Math.max(0, filledPx - firstY);
      railFill.style.height = `${filledFromFirstDot}px`;

      const ys = dotYRef.current;
      ys.forEach((y, i) => {
        const inner = dotInnerRefs.current[i];
        if (!inner) return;

        const isFilled = filledPx >= y;
        inner.style.opacity = isFilled ? "1" : "0";
        inner.style.transform = isFilled ? "scale(1)" : "scale(0.6)";
      });
    };

    scroller.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    computeDotPositions();
    update();

    const t = setTimeout(() => {
      computeDotPositions();
      update();
    }, 300);

    return () => {
      scroller.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      clearTimeout(t);
    };
  }, [data]);

  return (
    <div ref={outerRef} className="w-full font-sans relative">
      <div ref={containerRef} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-4 md:pt-6"
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
          >
            <div className="relative w-full min-w-0 pl-6 pr-4 pb-3">
              <div className="relative">
                <div
                  ref={(el) => {
                    dateLabelRefs.current[index] = el;
                  }}
                  className="absolute top-0 -translate-y-1/2 z-20 pointer-events-none flex items-center"
                  style={{ left: 20, right: 0 }}
                >
                  <span className="bg-background pr-2 py-[2px] text-sm font-medium text-muted-foreground">
                    {item.date}
                  </span>
                  <span className="h-px flex-1 bg-border/70" />
                </div>

                <div className="relative z-10 pt-2">{item.content}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        ref={railBgRef}
        className="absolute left-2 z-10 w-[2px]"
        style={{
          background: "hsl(var(--border) / 0.35)",
          boxShadow: "0 0 0 1px hsl(var(--border) / 0.10)",
        }}
      >
        <div
          ref={railFillRef}
          style={{
            position: "absolute",
            inset: "0 0 auto 0",
            width: "2px",
            height: "0px",
            borderRadius: "9999px",
            background: "linear-gradient(to bottom, #a855f7, #3b82f6, #06b6d4)",
            transition: "height 0.1s linear",
          }}
        />

        {data.map((_, index) => (
          <div
            key={`dot-${index}`}
            ref={(el) => {
              dotRefs.current[index] = el;
            }}
            aria-hidden="true"
            style={{
              position: "absolute",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "14px",
              height: "14px",
              borderRadius: "9999px",
              background: "hsl(var(--border) / 0.35)",
            }}
          >
            <div
              ref={(el) => {
                dotInnerRefs.current[index] = el;
              }}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "9999px",
                background: "linear-gradient(to bottom, #a855f7, #3b82f6, #06b6d4)",
                opacity: 0,
                transform: "scale(0.6)",
                transition: "opacity 0.15s ease, transform 0.15s ease",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}